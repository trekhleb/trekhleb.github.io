import * as React from 'react';

import PageHeader from '../shared/PageHeader';
import { Projects as ProjectsType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';

type ProjectsScreenProps = {
  projects: ProjectsType,
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  return (
    <React.Fragment>
      <PageHeader>Projects</PageHeader>
      <div>
        <ProjectsList projects={projects} />
      </div>
    </React.Fragment>
  );
}

export default ProjectsScreen;
