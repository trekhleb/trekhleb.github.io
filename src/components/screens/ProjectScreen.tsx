import React from 'react';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';

import { Project as ProjectType } from '../../types/Project';
import PageLayout from '../layouts/PageLayout';
import PageHeader from '../shared/PageHeader';
import SEO from '../shared/SEO';
import Alert, { ErrorAlert } from '../shared/Alert';
import Project from '../elements/Project';
import Badge from '../shared/Badge';
import HyperLink from '../shared/HyperLink';
import { routes } from '../../constants/routes';
import { useFluidCover } from '../../hooks/useFluidCover';

type ProjectScreenProps = {
  project: ProjectType | null,
};

const ProjectScreen = (props: ProjectScreenProps): React.ReactElement => {
  const { project } = props;

  // The project cover doubles as the share image of the page.
  const cover = useFluidCover({ imagePath: project?.cover?.srcPath });
  const coverImage = cover?.images?.fallback?.src;

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
        // Prefixed so a project page never shares its snippet with the blog post about it.
        description={`A project by Oleksii Trekhleb: ${project?.summary && project?.summary.length ? project.summary[0] : ''}`}
        image={coverImage || undefined}
        imageWidth={cover?.width}
        imageHeight={cover?.height}
      />
      <div className="mb-6">
        <HyperLink
          link={{ url: `${routes.projects.path}/` }}
          className="gap-1.5 text-sm font-medium text-muted"
          hoverClassName="hover:text-fg"
          startEnhancer={<FiArrowLeft size={15} aria-hidden="true" />}
        >
          All projects
        </HyperLink>
      </div>
      <div className="flex items-start gap-3">
        <PageHeader>{project.name}</PageHeader>
        <Badge className="mt-2">project</Badge>
      </div>
      <Project project={project} />
    </PageLayout>
  );
};

export default ProjectScreen;
