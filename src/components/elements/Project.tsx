import React from 'react';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { BiInfoCircle } from '@react-icons/all-files/bi/BiInfoCircle';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Card from '../shared/Card';
import CardMedia from '../shared/CardMedia';
import Tags from '../shared/Tags';
import FluidImage from '../shared/FluidImage';
import ButtonLink from '../shared/ButtonLink';
import Archived from '../shared/Archived';
import Stars from '../shared/Stars';
import Row from '../shared/Row';
import { getGitHubProjectStars } from '../../utils/project';
import { Link } from '../../types/Link';
import HyperLink from '../shared/HyperLink';
import ProjectAchievements from './ProjectAchievements';

type ProjectProps = {
  project: ProjectType | null,
};

const tagsPerProject = 5;

const Project = (props: ProjectProps): React.ReactElement | null => {
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
      className="text-xs text-gray-500"
    />
  );

  const projectStars = getGitHubProjectStars(project);
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

  const projectCoverCard = (
    <div className="mb-6">
      <Card>
        <CardMedia link={defaultProjectUrl} className="h-96">
          {projectCover}
        </CardMedia>
      </Card>
    </div>
  );

  const archivedStamp = project?.archived ? (
    <Row className="py-6">
      <Archived />
    </Row>
  ) : null;

  const actions = demoLink || sourceCodeLink ? (
    <Row className="py-6">
      {demoLink}
      {sourceCodeLink}
    </Row>
  ) : null;

  const extraLinksList = project?.links && project?.links.length
    ? project?.links.map((extraLink: Link, linkIndex) => {
      return (
        <li key={linkIndex}>
          <HyperLink
            link={extraLink}
            className="text-sm underline"
            startEnhancer={(<BiInfoCircle size={14} />)}
          >
            {extraLink?.caption || 'Read more'}
          </HyperLink>
        </li>
      );
    })
    : null;

  const externalLinks = extraLinksList ? (
    <ul className="mt-3">
      {extraLinksList}
    </ul>
  ) : null;

  const projectDatesAndStars = (
    <Row className="mb-3 justify-between">
      <div>
        {projectDates}
      </div>
      <div>
        {stars}
      </div>
    </Row>
  );

  const projectAchievements = (
    <ProjectAchievements
      achievements={project?.achievements}
    />
  );

  return (
    <>
      {projectCoverCard}
      {projectDatesAndStars}
      {projectSummary}
      {projectTags}
      {externalLinks}
      {actions}
      {archivedStamp}
      {projectAchievements}
    </>
  );
};

export default Project;
