import React from 'react';

import { Project } from '../../types/Project';
import ProjectPreview from './ProjectPreview';
import Cards from '../shared/Cards';

type ProjectsListProps = {
  projects: Project[],
};

const ProjectsList = (props: ProjectsListProps): React.ReactElement => {
  const { projects } = props;

  const projectsElements = projects.map((project) => {
    return <ProjectPreview project={project} key={project.id} />;
  });

  return (
    <Cards>
      {projectsElements}
    </Cards>
  );
};

export default ProjectsList;
