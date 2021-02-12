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
import CardActions from '../shared/CardActions';
import ButtonLink from '../shared/ButtonLink';
import Archived from '../shared/Archived';
import Stars from '../shared/Stars';
import Row from '../shared/Row';
import { getHitHubProjectStars } from '../../utils/project';
import { Link } from '../../types/Link';

type ProjectPreviewProps = {
  project: ProjectType | null,
};

const tagsPerProject = 3;

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const { project } = props;

  if (!project) {
    return null;
  }

  const projectTags = project?.tags ? (
    <div>
      <Tags tags={project.tags} numToShow={tagsPerProject} />
    </div>
  ) : null;

  const projectDates = (
    <DateRange
      startDate={project.startDate}
      endDate={project.endDate}
      className="text-xs text-gray-500 font-light"
    />
  );

  const projectStars = getHitHubProjectStars(project);
  const projectStarsLink: Link = {
    url: project?.srcURL?.url,
    caption: 'Stars on GitHub',
  };
  const stars = typeof projectStars === 'number' ? (
    <Stars
      stars={projectStars}
      link={projectStarsLink}
      className="text-xs text-gray-500 font-light"
    />
  ) : null;

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
    <ButtonLink
      link={project.demoURL}
      startEnhancer={<IoPlay />}
      className="mr-4"
    >
      Demo
    </ButtonLink>
  ) : null;

  const sourceCodeLink = project.srcURL && !project.archived ? (
    <ButtonLink
      link={project.srcURL}
      startEnhancer={<FaGithub />}
    >
      Source Code
    </ButtonLink>
  ) : null;

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} />
  ) : null;

  const archivedStamp = project?.archived ? (
    <CardActions>
      <Archived />
    </CardActions>
  ) : null;

  const actions = demoLink || sourceCodeLink ? (
    <CardActions>
      {demoLink}
      {sourceCodeLink}
    </CardActions>
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
        <Row className="mb-3 justify-between">
          <div>
            {projectDates}
          </div>
          <div>
            {stars}
          </div>
        </Row>
        {projectSummary}
        {projectTags}
      </CardContent>
      {actions}
      {archivedStamp}
    </Card>
  );
};

export default ProjectPreview;
