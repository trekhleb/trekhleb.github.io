import React from 'react';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Card from '../shared/Card';
import CardContent from '../shared/CardContent';
import CardMedia from '../shared/CardMedia';
import Tags from '../shared/Tags';
import FluidImage from '../shared/FluidImage';
import CardTitle from '../shared/CardTitle';
import HyperLink from '../shared/HyperLink';
import CardActions from '../shared/CardActions';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  if (!project) {
    return null;
  }

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
        className="text-sm text-gray-600 font-light"
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
    <div className="mb-3 font-light">
      {projectSummaryLines}
    </div>
  ) : null;

  const demoLink = project.demoURL ? (
    <HyperLink link={project.demoURL} startEnhancer={<IoPlay />}>
      Launch
    </HyperLink>
  ) : null;

  const sourceCodeLink = project.srcURL ? (
    <HyperLink link={project.srcURL} startEnhancer={<FaGithub />}>
      Source Code
    </HyperLink>
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
        <CardTitle link={project.demoURL || project.srcURL}>
          {project.name}
        </CardTitle>
        {projectSummary}
        <CardActions>
          {demoLink}
          {sourceCodeLink}
        </CardActions>
        {projectTags}
        {projectDates}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
