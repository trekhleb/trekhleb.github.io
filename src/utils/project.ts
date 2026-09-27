import { Project, ProjectID, Projects } from '../types/Project';
import projectStars from '../data/__generated__/projectStars.json';
import { GitHubProjectStars, GitHubStars } from '../types/GitHubStars';
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

// Stars, forks and (for the highlighted projects) contributors and README translations.
export function getGitHubProjectStats(project: Project): GitHubProjectStars | null {
  const projectID: string | null = getGitHubProjectID(project);
  if (!projectID || !projectStars) {
    return null;
  }
  const projectStarsTyped: GitHubStars = projectStars;
  return projectStarsTyped[projectID] || null;
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

export function getProjectLink(projectID: ProjectID): Link {
  return {
    url: `${routes.projects.path}/${projectID}/`,
  };
}

// Home page selection: projects flagged with `featured` (in that order); when none are flagged,
// the most-starred projects first, then the newest ones (no duplicates, no archived projects).
export function selectFeaturedProjects(projects: Projects, limit = 6): Project[] {
  const active = projectMapToArray(projects).filter((project) => !project.archived);

  const flagged = active
    .filter((project) => typeof project.featured === 'number')
    .sort((a, b) => (a.featured || 0) - (b.featured || 0));
  if (flagged.length) {
    return flagged.slice(0, limit);
  }

  const byStars = [...active].sort(
    (a, b) => (getGitHubProjectStars(b) || 0) - (getGitHubProjectStars(a) || 0),
  );
  const byDate = [...active].sort(
    (a, b) => (b.startDate || '').localeCompare(a.startDate || ''),
  );

  const starsQuota = Math.ceil(limit / 2);
  const selected: Project[] = [];
  const pushUnique = (project: Project): void => {
    if (!selected.find((p) => p.id === project.id) && selected.length < limit) {
      selected.push(project);
    }
  };
  byStars.slice(0, starsQuota).forEach(pushUnique);
  byDate.forEach(pushUnique);

  return selected;
}
