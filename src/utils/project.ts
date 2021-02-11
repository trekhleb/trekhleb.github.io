import { Project } from '../types/Project';

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
