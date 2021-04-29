import React from 'react';

import { Project as ProjectType } from '../../types/Project';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import SEO from '../shared/SEO';
import Alert, { ErrorAlert } from '../shared/Alert';
import Project from '../elements/Project';
import Row from '../shared/Row';
import Badge from '../shared/Badge';

type ProjectScreenProps = {
  project: ProjectType | null,
};

const ProjectScreen = (props: ProjectScreenProps): React.ReactElement => {
  const { project } = props;

  if (!project) {
    return (
      <Alert type={ErrorAlert}>
        Project not found
      </Alert>
    );
  }

  return (
    <PageLayout>
      <SEO
        title={project?.name || ''}
        description={project?.summary && project?.summary.length ? project.summary[0] : ''}
      />
      <Row>
        <PageHeader>{project.name}</PageHeader>
        <Badge className="ml-3 self-start">project</Badge>
      </Row>
      <Project project={project} />
    </PageLayout>
  );
};

export default ProjectScreen;
