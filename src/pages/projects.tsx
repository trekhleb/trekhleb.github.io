import React from 'react';

import ProjectsScreen from '../components/screens/ProjectsScreen';
import { PROJECTS } from '../data/projects';

const Projects = (): React.ReactElement => {
  return (
    <ProjectsScreen projects={PROJECTS} />
  );
};

export default Projects;
