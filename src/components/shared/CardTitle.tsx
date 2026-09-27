import React from 'react';
import { Link } from '../../types/Link';
import HyperLink from './HyperLink';

type CardTitleLevel = 'h2' | 'h3';

type CardTitleProps = {
  children: React.ReactNode,
  link?: Link,
  // Makes the whole card clickable (see .stretched-link in global.css). Other links inside the
  // card must be `relative z-10` to stay reachable.
  stretched?: boolean,
  // Heading level for the document outline (h2 on list pages directly under the page title,
  // h3 inside a titled section such as "Featured projects"). The look is the same.
  level?: CardTitleLevel,
};

const CardTitle = (props: CardTitleProps): React.ReactElement | null => {
  const {
    children, link, stretched = false, level = 'h3',
  } = props;

  if (!children) {
    return null;
  }

  const headingClasses = 'text-h3 break-words text-fg';

  const headerElement = level === 'h2'
    ? <h2 className={headingClasses}>{children}</h2>
    : <h3 className={headingClasses}>{children}</h3>;

  const linkElement = link ? (
    <HyperLink
      link={link}
      className={stretched ? 'stretched-link' : ''}
      hoverClassName="hover:text-accent"
    >
      {headerElement}
    </HyperLink>
  ) : null;

  return (
    <div className="mb-2">
      {linkElement || headerElement}
    </div>
  );
};

export default CardTitle;
