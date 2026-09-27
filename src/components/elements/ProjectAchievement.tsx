import React from 'react';
import { FiLink } from '@react-icons/all-files/fi/FiLink';
import { useLocation } from '@gatsbyjs/reach-router';

import { Achievement } from '../../types/Achievement';
import Card from '../shared/Card';
import CardMedia from '../shared/CardMedia';
import { useFluidCover } from '../../hooks/useFluidCover';
import FluidImage from '../shared/FluidImage';
import CardContent from '../shared/CardContent';
import HyperLink from '../shared/HyperLink';
import { Link } from '../../types/Link';
import DateRange from '../shared/DateRange';
import { siteURL } from '../../constants/siteMeta';

type ProjectAchievementsProps = {
  achievement: Achievement | null | undefined,
};

const ProjectAchievement = (props: ProjectAchievementsProps): React.ReactElement | null => {
  const { achievement } = props;

  const location = useLocation();

  const imagePath = achievement?.image?.srcPath;
  const fluidImageFetched = useFluidCover({ imagePath });

  if (!achievement) {
    return null;
  }

  const date = achievement?.date ? (
    <div className="mt-2">
      <DateRange
        startDate={achievement.date}
        className="text-xs text-muted"
        withDay
      />
    </div>
  ) : null;

  const imageLink: Link = {
    url: `${location?.origin || siteURL}${fluidImageFetched?.images?.fallback?.src}`,
    caption: 'Open the screenshot',
  };

  const detailsLink = achievement.link ? (
    <div className="mt-3">
      <HyperLink
        link={achievement.link}
        className="gap-1.5 text-sm text-muted"
        hoverClassName="hover:text-fg"
        startEnhancer={(<FiLink size={14} aria-hidden="true" />)}
      >
        <span className="link-underline">{achievement.link?.caption || 'Details'}</span>
      </HyperLink>
    </div>
  ) : null;

  return (
    <Card key={achievement.title}>
      <CardMedia link={imageLink}>
        <FluidImage fluidImage={fluidImageFetched} className="h-full w-full" />
      </CardMedia>
      <CardContent>
        <HyperLink link={imageLink} className="text-[15px] font-semibold leading-snug text-fg" hoverClassName="hover:text-accent">
          {achievement.title}
        </HyperLink>
        {date}
        {detailsLink}
      </CardContent>
    </Card>
  );
};

export default ProjectAchievement;
