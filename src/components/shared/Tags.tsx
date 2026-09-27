import React from 'react';

import type { Tag as TagType } from '../../types/Tag';
import Tag from './Tag';
import Expander from './Expander';

type TagsProps = {
  tags: TagType[],
  className?: string,
  itemClassName?: string,
  numToShow?: number,
};

const Tags = (props: TagsProps): React.ReactElement | null => {
  const {
    tags,
    className = '',
    itemClassName = '',
    numToShow = Infinity,
  } = props;

  if (!tags) {
    return null;
  }

  const defaultClasses = '';
  const classes = `${defaultClasses} ${className}`;

  const onRender = (tag: TagType): React.ReactElement => {
    return (
      <Tag key={tag.name} tag={tag} />
    );
  };

  const toHide = (tag: TagType, index: number): boolean => {
    return index >= numToShow;
  };

  return (
    <div className={classes}>
      {/* Spacing comes from the list's gap only (16px between tags, 8px between wrapped rows):
          per-item margins would make the tags taller than the "+ more" button and push it off the
          tags' centre line. */}
      <Expander
        items={tags}
        toHide={toHide}
        onRender={onRender}
        className="gap-x-4"
        itemClassName={itemClassName}
      />
    </div>
  );
};

export default Tags;
