import { Project } from '../types/Project';
import projectStars from '../data/__generated__/projectStars.json';
import { GitHubStars } from '../types/GitHubStars';

export function getGitHubProjectID(project: Project): string | null {
  if (
    !project
    || !project?.gitHubRepo
    || !project?.gitHubRepo?.repo
    || !project?.gitHubRepo?.owner
  ) {
    return null;
  }
  return `${project.gitHubRepo.owner}/${project.gitHubRepo.repo}`;
}

export function getGitHubProjectStars(project: Project): number | null {
  const projectID: string | null = getGitHubProjectID(project);
  if (!projectID || !projectStars) {
    return null;
  }
  const projectStarsTyped: GitHubStars = projectStars;
  if (!(projectID in projectStarsTyped)) {
    return null;
  }
  return projectStarsTyped[projectID]?.stars || null;
}

export function getTotalGetHubProjectStars(projects: Project[]): number | null {
  return projects.reduce((totalStars: number, project: Project) => {
    const currentProjectStars = getGitHubProjectStars(project) || 0;
    return totalStars + currentProjectStars;
  }, 0);
}
