// @flow
import React from 'react';
import type { Node } from 'react';

import { activeLinkColor } from '../../constants/style';

type ExternalLinkProps = {
  to: string,
  children: Node,
};

const ExternalLink = (props: ExternalLinkProps): Node => {
  const { children, to } = props;

  return (
    <a
      href={to}
      className={`hover:${activeLinkColor}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
