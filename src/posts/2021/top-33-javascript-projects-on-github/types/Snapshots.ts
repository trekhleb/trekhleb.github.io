export type GitHubID = string;

export type Snapshot = {
  id: GitHubID,
  description: string,
  kStars: number,
};

export type Snapshots = Record<GitHubID, Snapshot>;
