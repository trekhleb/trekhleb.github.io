import React from 'react';

import type { Tag as TagType } from '../../types/Tag';
import Tag from './Tag';

type TagsProps = {
  tags: TagType[],
};

const Tags = (props: TagsProps): React.ReactElement | null => {
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
    <div className="flex flex-row flex-wrap">
      {tagsElements}
    </div>
  );
};

export default Tags;
