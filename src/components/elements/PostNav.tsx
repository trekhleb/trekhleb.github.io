import React from 'react';
import { FiArrowLeft } from '@react-icons/all-files/fi/FiArrowLeft';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';

import type { PostNavItem } from '../../types/Post';
import HyperLink from '../shared/HyperLink';

type PostNavProps = {
  newerPost?: PostNavItem | null,
  olderPost?: PostNavItem | null,
};

// Previous / next article links at the end of a post.
const PostNav = (props: PostNavProps): React.ReactElement | null => {
  const { newerPost, olderPost } = props;

  if (!newerPost && !olderPost) {
    return null;
  }

  const cardClasses = 'card card-hover flex h-full flex-col gap-1.5 p-5 !items-start';

  const older = olderPost ? (
    <HyperLink link={{ url: olderPost.slug }} className={cardClasses} hoverClassName="hover:text-fg">
      <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted">
        <FiArrowLeft size={14} aria-hidden="true" />
        Older post
      </span>
      <span className="text-[15px] font-semibold leading-snug">{olderPost.title}</span>
    </HyperLink>
  ) : <div />;

  const newer = newerPost ? (
    <HyperLink link={{ url: newerPost.slug }} className={`${cardClasses} sm:!items-end sm:text-right`} hoverClassName="hover:text-fg">
      <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted">
        Newer post
        <FiArrowRight size={14} aria-hidden="true" />
      </span>
      <span className="text-[15px] font-semibold leading-snug">{newerPost.title}</span>
    </HyperLink>
  ) : <div />;

  return (
    <nav aria-label="More articles" className="grid gap-4 sm:grid-cols-2">
      {older}
      {newer}
    </nav>
  );
};

export default PostNav;
