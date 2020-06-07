// @flow
import React from 'react';
import type { TagType } from '../../types/TagType';
import Tag from './Tag';

type TagsProps = {
  tags: ?TagType[],
};

const Tags = (props: TagsProps) => {
  const { tags } = props;

  if (!tags) {
    return null;
  }

  const tagsElements = tags.map(
    (tag: TagType) => (
      <Tag key={tag.name} tag={tag} />
    ),
  );

  return (
    <div className="flex flex-row">
      {tagsElements}
    </div>
  );
};

export default Tags;
