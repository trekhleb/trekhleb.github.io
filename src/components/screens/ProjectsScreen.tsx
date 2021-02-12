import React, { useEffect, useState } from 'react';

import { Project as ProjectType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import Row from '../shared/Row';
import SEO from '../shared/SEO';
import ProjectFilters, {
  sortByStarsDesc, sortByStartDateAsc,
  sortByStartDateDesc,
  SortOption,
} from '../elements/ProjectFilters';
import { getHitHubProjectStars } from '../../utils/project';

type ProjectsScreenProps = {
  projects: ProjectType[],
};

type ProjectSorter = {
  // Returns -1, 0, +1.
  sort: (a: ProjectType, b: ProjectType) => number,
};

type ProjectSorters = Record<SortOption, ProjectSorter>;

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
      const aStars = getHitHubProjectStars(a) || 0;
      const bStars = getHitHubProjectStars(b) || 0;
      if (aStars === bStars) {
        return 0;
      }
      return aStars > bStars ? -1 : 1;
    },
  },
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  const [sortBy, setSortBy] = useState<SortOption>(sortByStartDateDesc);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

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
        description="Projects and experiments that help people learn"
      />
      <Row>
        <PageHeader>Projects</PageHeader>
        <Badge className="ml-3 self-start">{projectsNum}</Badge>
      </Row>
      <Row className="mb-6">
        <ProjectFilters onSort={setSortBy} sortBy={sortBy} />
      </Row>
      <ProjectsList projects={filteredProjects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
