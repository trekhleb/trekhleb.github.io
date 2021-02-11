export type GitHubProjectStars = {
  stars: number,
  updatedAt: number,
};

export type GitHubStars = Record<string, GitHubProjectStars>;
