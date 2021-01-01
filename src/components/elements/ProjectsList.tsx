import React from 'react';

import { Projects } from '../../types/Project';
import ProjectPreview from './ProjectPreview';

type ProjectsListProps = {
  projects: Projects,
};

const ProjectsList = (props: ProjectsListProps): React.ReactElement => {
  const { projects } = props;

  const projectsElements = projects.map((project) => {
    return <ProjectPreview project={project} key={project?.name} />;
  });

  return (
    <div>
      {projectsElements}
    </div>
  );
};

export default ProjectsList;
