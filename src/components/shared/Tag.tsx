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
      className="inline-flex items-center rounded-md bg-subtle px-2 py-1 text-xs font-medium leading-none text-fg/80"
    >
      {tag.name}
    </span>
  );
};

export default Tag;
