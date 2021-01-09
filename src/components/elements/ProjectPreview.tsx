import React from 'react';
import Img from 'gatsby-image';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import CardMedia from '../shared/CardMedia';
import H3 from '../shared/H3';
import { useFluidCover } from '../../hooks/useFluidCover';
import Tags from '../shared/Tags';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  const cover = useFluidCover({
    imagePath: project && project.cover && project.cover.srcPath,
  });

  if (!project) {
    return null;
  }

  const projectName = (
    <H3>
      {project.name}
    </H3>
  );

  const projectTags = project?.tags ? (
    <div>
      <Tags tags={project.tags} />
    </div>
  ) : null;

  const projectDates = (
    <div className="mb-3">
      <DateRange
        startDate={project.startDate}
        endDate={project.endDate}
        className='className="text-sm text-gray-600 font-light"'
      />
    </div>
  );

  /* eslint-disable react/no-array-index-key */
  const projectSummaryLines = project.summary ? project.summary.map(
    (summaryLine: string | null, index: number) => (
      <p key={index}>
        {summaryLine}
      </p>
    ),
  ) : null;

  const projectSummary = projectSummaryLines ? (
    <div className="mb-3">
      {projectSummaryLines}
    </div>
  ) : null;

  const projectCover = cover && cover.fluid ? (
    <Img
      // @ts-ignore
      fluid={cover.fluid}
      style={{ height: '100%' }}
      alt={project?.name || ''}
      title={project?.name || ''}
      durationFadeIn={500}
      fadeIn
    />
  ) : null;

  return (
    <Card>
      <CardMedia>
        {projectCover}
      </CardMedia>
      <CardContent>
        {projectName}
        {projectDates}
        {projectSummary}
        {projectTags}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
