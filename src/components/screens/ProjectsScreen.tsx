import React from 'react';

import PageHeader from '../shared/PageHeader';
import { Projects as ProjectsType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

type ProjectsScreenProps = {
  projects: ProjectsType,
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  return (
    <PageLayout>
      <ScreenTitle>Projects</ScreenTitle>
      <PageHeader>Projects</PageHeader>
      <ProjectsList projects={projects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
