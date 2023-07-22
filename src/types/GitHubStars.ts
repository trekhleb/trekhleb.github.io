export type GitHubProjectStars = {
  stars: number,
  updatedAt: string,
};

export type GitHubStars = Record<string, GitHubProjectStars>;
