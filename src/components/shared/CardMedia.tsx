import React from 'react';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

type CardMediaMode = 'row' | 'column';

export const cardMediaModeRow: CardMediaMode = 'row';
export const cardMediaModeColumn: CardMediaMode = 'column';

type CardMediaProps = {
  children: React.ReactNode,
  className?: string,
  mode?: CardMediaMode,
  link?: Link,
};

// Card image area: 2:1 on top (column) or a side column on wide screens (row). 2:1 is the ratio
// the project covers are drawn at (median 2.00), so almost nothing gets cropped off the sides.
const CardMedia = (props: CardMediaProps): React.ReactElement | null => {
  const {
    children,
    className = '',
    mode = cardMediaModeColumn,
    link,
  } = props;

  const commonClasses = `relative block w-full shrink-0 overflow-hidden bg-subtle [&_img]:transition-opacity [&_img]:duration-300 group-hover:[&_img]:opacity-90 ${className}`;

  const classes = mode === cardMediaModeRow
    ? `${commonClasses} aspect-[2/1] rounded-t-xl2 sm:aspect-auto sm:w-2/5 sm:rounded-l-xl2 sm:rounded-tr-none lg:w-1/4`
    : `${commonClasses} aspect-[2/1] rounded-t-xl2`;

  const wrappedChildren = link && link.url ? (
    <HyperLink link={link} formatted={false} className="block h-full w-full">
      {children}
    </HyperLink>
  ) : children;

  return (
    <div className={classes}>
      {wrappedChildren}
    </div>
  );
};

export default CardMedia;
