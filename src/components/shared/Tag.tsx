import React from 'react';

import type { Tag as TagType } from '../../types/Tag';

type TagProps = {
  tag: TagType,
};

const Tag = (props: TagProps): React.ReactElement => {
  const { tag } = props;

  return (
    <span
      key={tag.name}
      className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0"
    >
      {tag.name}
    </span>
  );
};

export default Tag;
