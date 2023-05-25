/* eslint-disable no-await-in-loop, no-console, no-restricted-syntax, max-len, no-continue, @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

import { Snapshots as SnapshotsType } from '../types/Snapshots';

const gitHubAPIBasePath = 'https://api.github.com';

const starsJSONPath = path.resolve(__dirname, '__generated__', 'Top33JavaScriptRepos.json');

function logError(err: Error | any): void {
  if (err && err.message) {
    console.error(err.message);
  }
  process.exit(1);
}

function logInfo(message: any): void {
  console.log(message);
}

function saveSnapshots(snapshots: SnapshotsType, snapshotsPath: string): void {
  const jsonSpace = 2;
  const starsData = JSON.stringify(snapshots, null, jsonSpace);
  fs.writeFileSync(snapshotsPath, starsData);
}

type GitHubRepo = {
  full_name: string,
  html_url: string,
  description: string,
  stargazers_count: number,
  watchers_count: number,
  forks_count: number,
};

type SearchResponse = {
  total_count: number,
  incomplete_results: boolean,
  items: GitHubRepo[],
  message?: string,
};

function starsToKStars(stars: number): number {
  const fractionDigits = stars >= 100000 ? 0 : 1;
  return parseFloat((stars / 1000).toFixed(fractionDigits));
}

// @see: https://docs.github.com/en/rest/reference/search#search-repositories
async function searchGitHub(): Promise<SearchResponse> {
  return new Promise((resolve, reject) => {
    const requestURL = `${gitHubAPIBasePath}/search/repositories?q=stars:>1+language:JavaScript&sort=stars&order=desc&per_page=33`;
    fetch(requestURL)
      .then((resp) => resp.json() as Promise<SearchResponse>)
      .then((searchResults: SearchResponse) => {
        if (searchResults?.message) {
          reject(new Error(searchResults?.message));
        }
        resolve(searchResults);
      })
      .catch((err) => reject(err));
  });
}

async function main(): Promise<void> {
  const snapshots: SnapshotsType = {};

  try {
    const searchResults = await searchGitHub();
    if (typeof searchResults?.total_count !== 'number') {
      logError(new Error('Cannot fetch the number of stars from the response'));
      return;
    }
    searchResults.items.forEach((repo: GitHubRepo) => {
      snapshots[repo.full_name] = {
        id: repo.full_name,
        description: repo.description,
        kStars: starsToKStars(repo.stargazers_count),
      };
    });
    logInfo('Search results have been fetched successfully');
  } catch (err) {
    logError(err);
  }

  try {
    logInfo(`\nTrying to save snapshots to ${starsJSONPath}`);
    saveSnapshots(snapshots, starsJSONPath);
    logInfo('Snapshots JSON file has been updated');
  } catch (err) {
    logError(err);
  }
}

logInfo('START fetching GitHub repos\n');
main()
  .then(() => logInfo('\nSTOP fetching GitHub repos'))
  .catch(logError);
