// @flow
import React from 'react';
import type { Node } from 'react';

import type { ProjectType } from '../../types/ProjectType';
import ProjectPreview from './ProjectPreview';

type ProjectsProps = {
  projects: ProjectType[],
};

const Projects = (props: ProjectsProps): Node => {
  const { projects } = props;

  const projectsElements = projects.map((project: ProjectType) => {
    return <ProjectPreview project={project} key={project.name} />;
  });

  return (
    <div>
      {projectsElements}
    </div>
  );
};

export default Projects;
