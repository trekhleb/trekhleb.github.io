/* eslint-disable no-await-in-loop, no-console, no-restricted-syntax, max-len, no-continue, @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { Project } from '../types/Project';
import { getGitHubProjectID, projectMapToArray } from '../utils/project';
import { GitHubStars } from '../types/GitHubStars';

const gitHubAPIBasePath = 'https://api.github.com';

const starsJSONPath = path.resolve(__dirname, '..', 'data', '__generated__', 'projectStars.json');

// The projects highlighted on the home page also get their contributors and README translations
// counted (two extra requests each).
const detailedProjectIDs: string[] = (profile.highlights || [])
  .map((highlight) => highlight.starsOfProject || '')
  .filter(Boolean);

function logError(err: Error | any): void {
  if (err && err.message) {
    console.error(err.message);
  }
  process.exit(1);
}

function logInfo(message: any): void {
  console.log(message);
}

// The numbers from the previous run: a failed extra request keeps them instead of failing the build.
function readPreviousStars(starsPath: string): GitHubStars {
  try {
    return JSON.parse(fs.readFileSync(starsPath, 'utf8')) as GitHubStars;
  } catch (err) {
    return {};
  }
}

function saveStars(projectStars: GitHubStars, starsPath: string): void {
  const jsonSpace = 2;
  const starsData = JSON.stringify(projectStars, null, jsonSpace);
  fs.writeFileSync(starsPath, starsData);
}

type GitHubRateLimits = {
  resources: {
    core: {
      limit: number,
      remaining: number,
      reset: number,
      used: number,
    },
  },
};

// @see: https://api.github.com/
// @see: https://api.github.com/rate_limit
async function fetchGitHubRateLimits(): Promise<GitHubRateLimits> {
  return new Promise((resolve, reject) => {
    const requestURL = `${gitHubAPIBasePath}/rate_limit`;
    fetch(requestURL)
      .then((resp) => resp.json() as Promise<GitHubRateLimits>)
      .then((limits: GitHubRateLimits) => {
        resolve(limits);
      })
      .catch((err) => reject(err));
  });
}

type GitHubProject = {
  full_name?: string,
  stargazers_count?: number,
  forks_count?: number,
  message?: string,
};

// @see: https://api.github.com/
// @see: https://api.github.com/repos/trekhleb/nano-neuron
async function fetchGitHubProject(project: Project): Promise<GitHubProject> {
  return new Promise((resolve, reject) => {
    const owner = project?.gitHubRepo?.owner;
    const repo = project?.gitHubRepo?.repo;

    if (!owner || !repo) {
      reject(new Error('Either repo owner or name is empty'));
      return;
    }

    const requestURL = `${gitHubAPIBasePath}/repos/${owner}/${repo}`;
    fetch(requestURL)
      .then((resp) => resp.json() as Promise<GitHubProject>)
      .then((repository: GitHubProject) => {
        if (repository?.message) {
          reject(new Error(repository?.message));
        }
        resolve(repository);
      })
      .catch((err) => reject(err));
  });
}

// @see: https://docs.github.com/en/rest/repos/repos#list-repository-contributors
// With one contributor per page, the number of the "last" page is the number of contributors
// (people with a GitHub account, as listed on the repository page).
async function fetchContributorsCount(owner: string, repo: string): Promise<number> {
  const resp = await fetch(`${gitHubAPIBasePath}/repos/${owner}/${repo}/contributors?per_page=1`);
  if (!resp.ok) {
    throw new Error(`Cannot fetch contributors of ${owner}/${repo}: HTTP ${resp.status}`);
  }
  const lastPage = /[?&]page=(\d+)>; rel="last"/.exec(resp.headers.get('link') || '');
  if (lastPage) {
    return parseInt(lastPage[1], 10);
  }
  const contributors = await resp.json() as unknown[];
  return contributors.length;
}

// README translations live next to README.md as README.<language>.md (e.g. README.uk-UA.md).
// @see: https://docs.github.com/en/rest/repos/contents#get-repository-content
async function fetchReadmeTranslationsCount(owner: string, repo: string): Promise<number> {
  const resp = await fetch(`${gitHubAPIBasePath}/repos/${owner}/${repo}/contents/`);
  if (!resp.ok) {
    throw new Error(`Cannot list the files of ${owner}/${repo}: HTTP ${resp.status}`);
  }
  const files = await resp.json() as { name: string }[];
  return files.filter((file) => /^README\.[A-Za-z-]+\.md$/.test(file.name)).length;
}

async function main(): Promise<void> {
  const ghProjects = projectMapToArray(projects)
    .filter((project: Project) => project?.gitHubRepo?.owner && project?.gitHubRepo?.repo);

  if (!ghProjects || !ghProjects.length) {
    logInfo('No GitHub projects found');
    return;
  }

  logInfo(`Found ${ghProjects.length} GitHub projects to query`);

  // For unauthenticated requests, the rate limit allows for up to 60 requests per hour.
  // @see: https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting
  try {
    logInfo('\nChecking rate limits');
    const rateLimits: GitHubRateLimits = await fetchGitHubRateLimits();
    logInfo(`Limit: ${rateLimits.resources.core.limit}`);
    logInfo(`Remaining: ${rateLimits.resources.core.remaining}`);
    const requestsNeeded = ghProjects.length + 2 * detailedProjectIDs.length;
    if (rateLimits.resources.core.remaining < requestsNeeded) {
      logInfo('Skipping stars fetching since rate limit is smaller than number of projects to fetch');
      return;
    }
  } catch (err) {
    logError(err);
    return;
  }

  const projectStars: GitHubStars = {};
  const previousStars: GitHubStars = readPreviousStars(starsJSONPath);

  for (const ghProject of ghProjects) {
    const projectID = getGitHubProjectID(ghProject);
    if (!projectID) {
      logError(new Error('Cannot generate project ID'));
      continue;
    }

    logInfo(`\nFetching data for ${projectID}`);

    try {
      const ghRepo = await fetchGitHubProject(ghProject);
      if (typeof ghRepo?.stargazers_count !== 'number') {
        logError(new Error('Cannot fetch the number of stars from the response'));
        continue;
      }
      const previous = previousStars[projectID];
      let contributors: number | undefined;
      let translations: number | undefined;
      if (detailedProjectIDs.includes(ghProject.id)) {
        const owner = ghProject?.gitHubRepo?.owner || '';
        const repo = ghProject?.gitHubRepo?.repo || '';
        try {
          contributors = await fetchContributorsCount(owner, repo);
          translations = await fetchReadmeTranslationsCount(owner, repo);
        } catch (err) {
          console.error((err as Error)?.message || err);
          contributors = previous?.contributors;
          translations = previous?.translations;
        }
      }
      // Fields in reading order; the ones a project does not have are left out of the JSON.
      projectStars[projectID] = {
        stars: ghRepo.stargazers_count,
        forks: typeof ghRepo.forks_count === 'number' ? ghRepo.forks_count : previous?.forks,
        contributors,
        translations,
        updatedAt: new Date().toISOString(),
      };
      logInfo(projectStars[projectID]);
    } catch (err) {
      logError(err);
    }
  }

  try {
    logInfo(`\nTrying to save stars to ${starsJSONPath}`);
    saveStars(projectStars, starsJSONPath);
    logInfo('Stars JSON file has been updated');
  } catch (err) {
    logError(err);
  }
}

logInfo('START fetching GitHub stars\n');
main()
  .then(() => logInfo('\nSTOP fetching GitHub stars'))
  .catch(logError);
