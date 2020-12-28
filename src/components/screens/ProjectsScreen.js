// @flow
import React from 'react';
import type { Node } from 'react';
import Projects from '../elements/Projects';
import { projects } from '../../database/projects';
import PageHeader from '../shared/PageHeader';
import type { NavigationType } from '../../types/NavigationType';

type ProjectsScreenProps = {
  navigation: NavigationType,
};

const ProjectsScreen = (props: ProjectsScreenProps): Node => {
  const { navigation } = props;

  return (
    <div className="flex flex-col">
      <PageHeader>{navigation.pageTitle}</PageHeader>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsScreen;
