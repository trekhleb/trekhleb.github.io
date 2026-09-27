import React from 'react';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';
import { GiAchievement } from '@react-icons/all-files/gi/GiAchievement';

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
import { getGitHubProjectStars, getProjectAchievementsLink } from '../../utils/project';
import { Link } from '../../types/Link';
import HyperLink from '../shared/HyperLink';
import Badge from '../shared/Badge';

// Parts of the card that can be switched off; every part is shown unless set to false.
export type ProjectCardSections = {
  dates?: boolean,
  tags?: boolean,
  achievements?: boolean,
  links?: boolean,
};

type ProjectPreviewProps = {
  project: ProjectType | null,
  sections?: ProjectCardSections,
  // Clamp the summary to three lines (home page).
  clampSummary?: boolean,
  // Heading level of the card title (h2 on the projects page, h3 inside a home page section).
  titleLevel?: 'h2' | 'h3',
};

const tagsPerProject = 3;

const withAchievements = true;

const ProjectPreview = (props: ProjectPreviewProps): React.ReactElement | null => {
  const {
    project, sections = {}, clampSummary = false, titleLevel = 'h3',
  } = props;

  if (!project) {
    return null;
  }

  const show = {
    dates: sections.dates !== false,
    tags: sections.tags !== false,
    achievements: sections.achievements !== false,
    links: sections.links !== false,
  };

  const projectTags = show.tags && project?.tags ? (
    <div className="mt-4">
      <Tags tags={project.tags} numToShow={tagsPerProject} />
    </div>
  ) : null;

  const projectDates = show.dates ? (
    <DateRange
      startDate={project.startDate}
      endDate={project.endDate}
      className="text-xs text-muted"
    />
  ) : null;

  const projectStars = getGitHubProjectStars(project);
  const projectStarsLink: Link = {
    url: project?.srcURL?.url,
    caption: 'Stars on GitHub',
  };
  const stars = typeof projectStars === 'number' ? (
    <Stars
      stars={projectStars}
      link={projectStarsLink}
      className="text-muted"
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
    <div className={`mt-3 text-[15px] leading-relaxed text-fg/80 ${clampSummary ? 'line-clamp-3' : ''}`}>
      {projectSummaryLines}
    </div>
  ) : null;

  const defaultProjectUrl = project.archived ? undefined : project.demoURL || project.srcURL;
  // The cover link has no text, so it gets the project name as its accessible name.
  const coverLink = defaultProjectUrl
    ? { ...defaultProjectUrl, caption: defaultProjectUrl.caption || project.name }
    : undefined;

  const demoLink = project.demoURL && !project.archived ? (
    <ButtonLink
      link={project.demoURL}
      startEnhancer={<IoPlay size={15} aria-hidden="true" />}
    >
      Demo
    </ButtonLink>
  ) : null;

  const sourceCodeLink = project.srcURL && !project.archived ? (
    <ButtonLink
      link={project.srcURL}
      startEnhancer={<FaGithub size={15} aria-hidden="true" />}
    >
      Source Code
    </ButtonLink>
  ) : null;

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} className="h-full w-full" />
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

  const extraLinksList = show.links && project?.links && project?.links.length
    ? project?.links.map((extraLink: Link, linkIndex) => {
      return (
        <li key={linkIndex}>
          <HyperLink
            link={extraLink}
            className="gap-1.5 text-sm text-muted"
            hoverClassName="hover:text-fg"
            startEnhancer={(<FiExternalLink size={14} aria-hidden="true" />)}
          >
            <span className="link-underline">{extraLink?.caption || 'Read more'}</span>
          </HyperLink>
        </li>
      );
    })
    : null;

  const achievementsLink = show.achievements
    && withAchievements
    && project?.achievements
    && project.achievements.length
    ? (
      <div className="mt-4 flex items-center gap-2">
        {/* Underlined like the links in the home page introduction: black at rest, blue on
            hover (the underline and the medal icon, as on the previous site, follow the text). */}
        <HyperLink
          link={getProjectAchievementsLink(project.id)}
          className="gap-1.5 text-sm text-fg"
          hoverClassName="hover:text-accent"
          startEnhancer={(<GiAchievement size={18} aria-hidden="true" />)}
        >
          <span className="underline decoration-current decoration-1 underline-offset-[3px]">Achievements</span>
        </HyperLink>
        <Badge>{project.achievements.length}</Badge>
      </div>
    )
    : null;

  const externalLinks = extraLinksList ? (
    <ul className="mt-3 flex flex-col gap-1.5">
      {extraLinksList}
    </ul>
  ) : null;

  return (
    <Card>
      <CardMedia link={coverLink}>
        {projectCover}
      </CardMedia>
      <CardContent>
        <CardTitle link={defaultProjectUrl} level={titleLevel}>
          {project.name}
        </CardTitle>
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          {projectDates}
          {stars}
        </div>
        {projectSummary}
        {projectTags}
        {achievementsLink}
        {externalLinks}
      </CardContent>
      {actions}
      {archivedStamp}
    </Card>
  );
};

export default ProjectPreview;
