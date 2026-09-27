import React from 'react';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FiExternalLink } from '@react-icons/all-files/fi/FiExternalLink';

import { Project as ProjectType } from '../../types/Project';
import DateRange from '../shared/DateRange';
import Tags from '../shared/Tags';
import FluidImage from '../shared/FluidImage';
import ButtonLink from '../shared/ButtonLink';
import Archived from '../shared/Archived';
import Stars from '../shared/Stars';
import { getGitHubProjectStars } from '../../utils/project';
import { Link } from '../../types/Link';
import HyperLink from '../shared/HyperLink';
import ProjectAchievements from './ProjectAchievements';
import { useFluidCover } from '../../hooks/useFluidCover';

type ProjectProps = {
  project: ProjectType | null,
};

const tagsPerProject = 5;

const Project = (props: ProjectProps): React.ReactElement | null => {
  const { project } = props;

  // Hooks run before the early return (rules of hooks).
  const coverData = useFluidCover({ imagePath: project?.cover?.srcPath });

  if (!project) {
    return null;
  }

  const projectTags = project?.tags ? (
    <div className="mt-5">
      <Tags tags={project.tags} numToShow={tagsPerProject} />
    </div>
  ) : null;

  const projectDates = (
    <DateRange
      startDate={project.startDate}
      endDate={project.endDate}
      className="text-sm text-muted"
      withIcon
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
      className="text-sm text-muted"
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
    <div className="mt-6 max-w-prose text-lg leading-relaxed text-fg/90">
      {projectSummaryLines}
    </div>
  ) : null;

  const defaultProjectUrl = project.archived ? undefined : project.demoURL || project.srcURL;

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

  // Portrait covers (book covers, long screenshots) are shown whole inside a 36rem frame instead
  // of taking over the page; landscape covers keep their natural aspect ratio.
  const isPortraitCover = !!coverData && coverData.height / coverData.width > 0.9;

  const projectCover = project.cover ? (
    <FluidImage
      image={project.cover}
      className="h-full w-full"
      objectFit={isPortraitCover ? 'contain' : 'cover'}
    />
  ) : null;

  const coverInner = defaultProjectUrl?.url ? (
    <HyperLink
      link={{ ...defaultProjectUrl, caption: defaultProjectUrl.caption || project.name }}
      formatted={false}
      className="block h-full"
    >
      {projectCover}
    </HyperLink>
  ) : projectCover;

  const coverFrameClasses = isPortraitCover ? 'h-[36rem]' : '';

  const projectCoverCard = projectCover ? (
    <div className={`overflow-hidden rounded-xl2 border border-line bg-subtle ${coverFrameClasses}`}>
      {coverInner}
    </div>
  ) : null;

  const archivedStamp = project?.archived ? (
    <div className="mt-6">
      <Archived />
    </div>
  ) : null;

  const actions = demoLink || sourceCodeLink ? (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      {demoLink}
      {sourceCodeLink}
    </div>
  ) : null;

  const extraLinksList = project?.links && project?.links.length
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

  const externalLinks = extraLinksList ? (
    <ul className="mt-5 flex flex-col gap-2">
      {extraLinksList}
    </ul>
  ) : null;

  const projectDatesAndStars = (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
      {projectDates}
      {stars}
    </div>
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
