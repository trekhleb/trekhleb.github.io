import React, { useState } from 'react';
import { FiLink } from '@react-icons/all-files/fi/FiLink';
import { useLocation } from '@gatsbyjs/reach-router';

import { Achievement } from '../../types/Achievement';
import Card from '../shared/Card';
import CardMedia from '../shared/CardMedia';
import { useFluidCoversByPaths } from '../../hooks/useFluidCoversByPaths';
import FluidImage from '../shared/FluidImage';
import CardMediaCarousel from '../shared/CardMediaCarousel';
import CardContent from '../shared/CardContent';
import HyperLink from '../shared/HyperLink';
import { Link } from '../../types/Link';
import { Image } from '../../types/Image';
import DateRange from '../shared/DateRange';
import { siteURL } from '../../constants/siteMeta';
import { fullSizeImageURL, toImageList } from '../../utils/image';

type ProjectAchievementsProps = {
  achievement: Achievement | null | undefined,
};

const ProjectAchievement = (props: ProjectAchievementsProps): React.ReactElement | null => {
  const { achievement } = props;

  const location = useLocation();

  // Nearly every achievement is told by one screenshot; a few need a couple of them.
  const images: Image[] = toImageList(achievement?.image);
  const fluidImages = useFluidCoversByPaths({
    imagePaths: images.map((image: Image) => image.srcPath),
  });

  // Which screenshot is on show, so the title opens that one rather than always the first.
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

  const origin = location?.origin || siteURL;

  const imageLinkAt = (index: number): Link | undefined => {
    const url = fullSizeImageURL(fluidImages[index], origin);
    return url ? { url, caption: 'Open the screenshot' } : undefined;
  };

  const imageLink = imageLinkAt(activeIndex) || imageLinkAt(0);

  // More than one screenshot turns the picture area into something you can flip through. Nothing
  // below it moves: the dots and chevrons ride on the picture, so the card keeps its usual shape.
  const media = fluidImages.length > 1 ? (
    <CardMediaCarousel
      images={images}
      fluidImages={fluidImages}
      slideLink={imageLinkAt}
      onActiveIndexChange={setActiveIndex}
      label={achievement.title}
    />
  ) : (
    <CardMedia link={imageLink}>
      <FluidImage image={images[0]} fluidImage={fluidImages[0]} className="h-full w-full" />
    </CardMedia>
  );

  const titleClasses = 'text-[15px] font-semibold leading-snug text-fg';

  const title = imageLink ? (
    <HyperLink link={imageLink} className={titleClasses} hoverClassName="hover:text-accent">
      {achievement.title}
    </HyperLink>
  ) : (
    <span className={titleClasses}>{achievement.title}</span>
  );

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
      {media}
      <CardContent>
        {title}
        {date}
        {detailsLink}
      </CardContent>
    </Card>
  );
};

export default ProjectAchievement;
