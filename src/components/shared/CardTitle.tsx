import React from 'react';
import H, { hLevel } from './H';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

type CardTitleProps = {
  children: React.ReactNode,
  link?: Link,
};

const CardTitle = (props: CardTitleProps): React.ReactElement | null => {
  const { children, link } = props;

  if (!children) {
    return null;
  }

  const headerElement = (
    <H level={hLevel.h3}>
      {children}
    </H>
  );

  const linkElement = link ? (
    <HyperLink link={link}>
      {headerElement}
    </HyperLink>
  ) : null;

  return (
    <div className="mb-3">
      {linkElement || headerElement}
    </div>
  );
};

export default CardTitle;
