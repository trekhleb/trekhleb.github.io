// @flow
import React from 'react';
import type { TagType } from '../../types/TagType';

type TagProps = {
  tag: TagType,
};

const Tag = (props: TagProps) => {
  const { tag } = props;

  return (
    <span
      key={tag.name}
      className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal mr-2 last:mr-0"
    >
      {tag.name}
    </span>
  );
};

export default Tag;
