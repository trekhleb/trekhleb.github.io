import React from 'react';
import { FiStar } from '@react-icons/all-files/fi/FiStar';
import HyperLink from './HyperLink';
import { Link as LinkType } from '../../types/Link';
import { numberToConciseString } from '../../utils/numbers';

type StarsProps = {
  link?: LinkType,
  stars?: number | null | undefined,
  className?: string,
};

const Stars = (props: StarsProps): React.ReactElement | null => {
  const { stars = 0, className = '', link } = props;

  if (typeof stars !== 'number') {
    return null;
  }

  const starsElements = (
    <>
      <FiStar size={14} aria-hidden="true" />
      <span className="text-xs font-semibold tabular-nums">
        {numberToConciseString(stars)}
      </span>
    </>
  );

  const starsElementsWrapped = link ? (
    <HyperLink link={link} className="relative z-10 gap-1" hoverClassName="hover:text-fg">
      {starsElements}
    </HyperLink>
  ) : (
    <span className="inline-flex items-center gap-1">
      {starsElements}
    </span>
  );

  return (
    <span className={`inline-flex items-center ${className}`}>
      {starsElementsWrapped}
    </span>
  );
};

export default Stars;
