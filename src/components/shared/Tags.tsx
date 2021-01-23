import React from 'react';

import type { Tag as TagType } from '../../types/Tag';
import Tag from './Tag';

type TagsProps = {
  tags: TagType[],
  className?: string,
};

const Tags = (props: TagsProps): React.ReactElement | null => {
  const { tags, className = '' } = props;

  if (!tags) {
    return null;
  }

  const tagsElements = tags.map(
    (tag: TagType) => (
      <Tag key={tag.name} tag={tag} />
    ),
  );

  const defaultClasses = 'flex flex-row flex-wrap';
  const classes = `${defaultClasses} ${className}`;

  return (
    <div className={classes}>
      {tagsElements}
    </div>
  );
};

export default Tags;
