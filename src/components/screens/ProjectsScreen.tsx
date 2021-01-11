import React from 'react';

import { Project as ProjectType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import ScreenTitle from '../shared/ScreenTitle';
import H, { hLevel } from '../shared/H';

type ProjectsScreenProps = {
  projects: ProjectType[],
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  return (
    <PageLayout>
      <ScreenTitle title="Projects" />
      <H level={hLevel.h1}>Projects</H>
      <ProjectsList projects={projects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
