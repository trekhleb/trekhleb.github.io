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
import Row from '../shared/Row';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  if (!project) {
    return null;
  }

  const projectTags = project?.tags ? (
    <div className="mb-3">
      <Tags tags={project.tags} />
    </div>
  ) : null;

  const projectDates = (
    <div>
      <DateRange
        startDate={project.startDate}
        endDate={project.endDate}
        className="text-xs text-gray-500 font-light"
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

  const defaultProjectUrl = project.archived ? undefined : project.demoURL || project.srcURL;

  const demoLink = project.demoURL && !project.archived ? (
    <HyperLink
      link={project.demoURL}
      startEnhancer={<IoPlay />}
      className="mr-6"
    >
      Launch Demo
    </HyperLink>
  ) : null;

  const sourceCodeLink = project.srcURL && !project.archived ? (
    <HyperLink link={project.srcURL} startEnhancer={<FaGithub />}>
      Source Code
    </HyperLink>
  ) : null;

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} />
  ) : null;

  return (
    <Card>
      <CardMedia link={defaultProjectUrl}>
        {projectCover}
      </CardMedia>
      <CardContent>
        <CardTitle link={defaultProjectUrl}>
          {project.name}
        </CardTitle>
        {projectSummary}
        <CardActions>
          <Row>
            {demoLink}
            {sourceCodeLink}
          </Row>
        </CardActions>
        {projectTags}
        {projectDates}
      </CardContent>
    </Card>
  );
};

export default ProjectPreview;
