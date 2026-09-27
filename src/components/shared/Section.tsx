import React from 'react';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';

import H, { hLevel } from './H';
import HyperLink from './HyperLink';
import { Link } from '../../types/Link';

type SectionProps = {
  title: string,
  children: React.ReactNode,
  // "See all" style link rendered next to the title.
  moreLink?: Link,
  moreLabel?: string,
  description?: React.ReactNode,
  className?: string,
  id?: string,
};

// A titled block of the home page (featured projects, latest writing, ...).
const Section = (props: SectionProps): React.ReactElement | null => {
  const {
    title,
    children,
    moreLink,
    moreLabel = 'See all',
    description,
    className = '',
    id,
  } = props;

  if (!children) {
    return null;
  }

  const more = moreLink?.url ? (
    <HyperLink
      link={moreLink}
      className="group/more shrink-0 gap-1 text-sm font-medium text-muted"
      hoverClassName="hover:text-fg"
    >
      <span className="link-underline">{moreLabel}</span>
      <FiArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover/more:translate-x-0.5"
      />
    </HyperLink>
  ) : null;

  return (
    <section id={id} className={`mt-16 sm:mt-24 ${className}`} aria-labelledby={id ? `${id}-title` : undefined}>
      <div className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
        <div className="min-w-0">
          <H level={hLevel.h2} id={id ? `${id}-title` : undefined}>{title}</H>
          {description && (
            <p className="mt-1 text-sm text-muted">{description}</p>
          )}
        </div>
        {more}
      </div>
      {children}
    </section>
  );
};

export default Section;
