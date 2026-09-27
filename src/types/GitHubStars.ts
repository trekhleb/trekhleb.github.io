export type GitHubProjectStars = {
  stars: number,
  forks?: number,
  // Only for the projects highlighted on the home page (see src/data/profile.ts):
  // people who contributed commits, and README translations (README.<language>.md files).
  contributors?: number,
  translations?: number,
  updatedAt: string,
};

export type GitHubStars = Record<string, GitHubProjectStars>;
