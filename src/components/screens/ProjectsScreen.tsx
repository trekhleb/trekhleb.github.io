import React from 'react';

import { Project as ProjectType } from '../../types/Project';
import ProjectsList from '../elements/ProjectsList';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import Badge from '../shared/Badge';
import Row from '../shared/Row';
import SEO from '../shared/SEO';

type ProjectsScreenProps = {
  projects: ProjectType[],
};

const ProjectsScreen = (props: ProjectsScreenProps): React.ReactElement => {
  const { projects } = props;

  const projectsNum = projects.length;

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
      <ProjectsList projects={projects} />
    </PageLayout>
  );
};

export default ProjectsScreen;
