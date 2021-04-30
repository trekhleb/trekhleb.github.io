import { Project, ProjectID, Projects } from '../types/Project';
import projectStars from '../data/__generated__/projectStars.json';
import { GitHubStars } from '../types/GitHubStars';
import { Link } from '../types/Link';
import { routes } from '../constants/routes';

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

export function projectMapToArray(projects: Projects): Project[] {
  return Object.keys(projects)
    .map<Project>((projectID: ProjectID) => {
      const project: Project = { ...projects[projectID] };
      // Make sure that the project ID is the same as the project key in the projects map.
      project.id = projectID;
      return project;
    });
}

export function getTotalGetHubProjectStars(projects: Projects): number | null {
  return projectMapToArray(projects).reduce((totalStars: number, project: Project) => {
    const currentProjectStars = getGitHubProjectStars(project) || 0;
    return totalStars + currentProjectStars;
  }, 0);
}

export function getProjectAchievementsLink(projectID: ProjectID): Link {
  return {
    url: `${routes.projects.path}/${projectID}#achievements`,
  };
}
