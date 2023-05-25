import React from 'react';
import { FiStar } from '@react-icons/all-files/fi/FiStar';
import Row from './Row';
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
      <FiStar size={14} />
      <div className="ml-1 text-xs font-bold">
        {numberToConciseString(stars)}
      </div>
    </>
  );

  const starsElementsWrapped = link ? (
    <HyperLink link={link}>
      {starsElements}
    </HyperLink>
  ) : starsElements;

  return (
    <Row className={className}>
      {starsElementsWrapped}
    </Row>
  );
};

export default Stars;
