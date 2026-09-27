import React, { useEffect, useState } from 'react';

import { Project as ProjectType, Projects as ProjectsType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import SEO from '../shared/SEO';
import ProjectFilters, {
  sortByAchievementsDesc, sortByStarsDesc,
  sortByStartDateAsc, sortByStartDateDesc,
  SortOption, supportedSortOptions,
} from '../elements/ProjectFilters';
import { getGitHubProjectStars, getTotalGetHubProjectStars, projectMapToArray } from '../../utils/project';
import Stars from '../shared/Stars';
import { getStringSearchParam, setSearchParam } from '../../utils/url';

type ProjectsScreenProps = {
  projects: ProjectsType,
};

type ProjectSorter = {
  // Returns -1, 0, +1.
  sort: (a: ProjectType, b: ProjectType) => number,
};

type ProjectSorters = Record<SortOption, ProjectSorter>;

const SORT_PARAM_NAME = 'sort';

// @ts-ignore
const projectSorters: ProjectSorters = {
  [sortByStartDateDesc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      if (!a?.startDate || !b.startDate || a.startDate === b.startDate) {
        return 0;
      }
      return a.startDate > b.startDate ? -1 : 1;
    },
  },
  [sortByStartDateAsc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      if (!a?.startDate || !b.startDate || a.startDate === b.startDate) {
        return 0;
      }
      return a.startDate < b.startDate ? -1 : 1;
    },
  },
  [sortByStarsDesc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      const aStars = getGitHubProjectStars(a) || 0;
      const bStars = getGitHubProjectStars(b) || 0;
      if (aStars === bStars) {
        return 0;
      }
      return aStars > bStars ? -1 : 1;
    },
  },
  [sortByAchievementsDesc]: {
    sort: (a: ProjectType, b: ProjectType): number => {
      const aAchievements = a?.achievements?.length || 0;
      const bAchievements = b?.achievements?.length || 0;
      if (aAchievements === bAchievements) {
        return 0;
      }
      return aAchievements > bAchievements ? -1 : 1;
    },
  },
};

const getDefaultSortOption = (): SortOption => {
  const defaultOption = sortByStartDateDesc;
  // @ts-ignore
  const sortFromURL: SortOption = getStringSearchParam(SORT_PARAM_NAME, defaultOption);
  if (supportedSortOptions.includes(sortFromURL)) {
    return sortFromURL;
  }
  return defaultOption;
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  const [sortBy, setSortBy] = useState<SortOption>(getDefaultSortOption());
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(
    projectMapToArray(projects),
  );

  const onSort = (newSortOption: SortOption): void => {
    setSearchParam(SORT_PARAM_NAME, newSortOption);
    setSortBy(newSortOption);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const sortedProjects = [...filteredProjects].sort(projectSorters[sortBy].sort);
    setFilteredProjects(sortedProjects);
  }, [sortBy]);

  const projectsNum = filteredProjects.length;

  return (
    <PageLayout>
      <SEO
        title="Projects"
        description={`${projectsNum} open-source projects and experiments by Oleksii Trekhleb that help people learn: algorithms and data structures in JavaScript, machine learning from scratch, Python, and interactive browser demos.`}
      />
      <div className="mb-2 flex items-start gap-3">
        <PageHeader>Projects</PageHeader>
        <Badge className="mt-2">{projectsNum}</Badge>
      </div>
      {/* The toolbar belongs to the list: 32px below the title, 24px above the cards. */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <ProjectFilters onSort={onSort} sortBy={sortBy} />
        <div className="flex items-center gap-1.5 text-sm text-muted">
          <span>Total stars:</span>
          <Stars stars={getTotalGetHubProjectStars(projects)} className="text-fg" />
        </div>
      </div>
      <ProjectsList projects={filteredProjects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
