/* eslint-disable no-await-in-loop, no-console, no-restricted-syntax, max-len, no-continue, @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

import { projects } from '../data/projects';
import { Project } from '../types/Project';
import { getGitHubProjectID } from '../utils/project';
import { GitHubStars } from '../types/GitHubStars';

const gitHubAPIBasePath = 'https://api.github.com';

const starsJSONPath = path.resolve(__dirname, '..', 'data', '__generated__', 'projectStars.json');

function logError(err: Error): void {
  console.error(err.message);
  process.exit(1);
}

function logInfo(message: any): void {
  console.log(message);
}

function saveStars(projectStars: GitHubStars, starsPath: string): void {
  const starsData = JSON.stringify(projectStars);
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
      .then((resp) => resp.json())
      .then((limits: GitHubRateLimits) => {
        resolve(limits);
      })
      .catch((err) => reject(err));
  });
}

type GitHubProject = {
  full_name?: string,
  stargazers_count?: number,
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
      .then((resp) => resp.json())
      .then((repository: GitHubProject) => {
        if (repository?.message) {
          reject(new Error(repository?.message));
        }
        resolve(repository);
      })
      .catch((err) => reject(err));
  });
}

async function main(): Promise<void> {
  const ghProjects = projects
    .filter((project: Project) => project?.gitHubRepo?.owner && project?.gitHubRepo?.repo);

  if (!ghProjects || !ghProjects.length) {
    logInfo('No GitHub projects found');
    return;
  }

  logInfo(`Found ${ghProjects.length} GitHub projects to query`);

  try {
    logInfo('\nChecking rate limits');
    const rateLimits: GitHubRateLimits = await fetchGitHubRateLimits();
    logInfo(`Limit: ${rateLimits.resources.core.limit}`);
    logInfo(`Remaining: ${rateLimits.resources.core.remaining}`);
    if (rateLimits.resources.core.remaining < ghProjects.length) {
      logInfo('Skipping stars fetching since rate limit is smaller than number of projects to fetch');
      return;
    }
  } catch (err) {
    logError(err.message);
    return;
  }

  const projectStars: GitHubStars = {};

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
      projectStars[projectID] = {
        stars: ghRepo.stargazers_count,
        updatedAt: Date.now(),
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

logInfo('START\n');
main()
  .then(() => logInfo('\nEND'))
  .catch(logError);
