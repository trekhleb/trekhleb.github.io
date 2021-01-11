import React from 'react';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import CardMedia from '../shared/CardMedia';
import Tags from '../shared/Tags';
import FluidImage from '../shared/FluidImage';
import H, { hLevel } from '../shared/H';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  if (!project) {
    return null;
  }

  const projectName = (
    <H level={hLevel.h3}>
      {project.name}
    </H>
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

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} />
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
