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

export type AchievementsStats = {
  achievementsNum: number,
  // Projects carrying at least one achievement, out of `projectsNum` in total. Both are reported
  // so the smaller one can be shown as the subset it is, rather than as a second grand total.
  projectsWithAchievementsNum: number,
  projectsNum: number,
};

/*
  How much is on record across the whole site: achievement entries, and how many projects they
  come from. Entries, not pictures — one entry may carry several screenshots — so this total is
  the sum of the counts shown beside each project's "Achievements" heading and can be checked
  against them.
*/
export function getAchievementsStats(projects: Projects): AchievementsStats {
  return projectMapToArray(projects).reduce(
    (stats: AchievementsStats, project: Project) => {
      const achievementsNum = project?.achievements?.length || 0;
      return {
        achievementsNum: stats.achievementsNum + achievementsNum,
        projectsWithAchievementsNum: stats.projectsWithAchievementsNum + (achievementsNum ? 1 : 0),
        projectsNum: stats.projectsNum + 1,
      };
    },
    { achievementsNum: 0, projectsWithAchievementsNum: 0, projectsNum: 0 },
  );
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
