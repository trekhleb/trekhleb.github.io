import React from 'react';

import H1 from '../shared/H1';
import { Project as ProjectType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';

type ProjectsScreenProps = {
  projects: ProjectType[],
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  return (
    <PageLayout>
      <ScreenTitle>Projects</ScreenTitle>
      <H1>Projects</H1>
      <ProjectsList projects={projects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
