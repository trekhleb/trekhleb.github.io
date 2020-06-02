// @flow
import React from 'react';
import type { Node } from 'react';
import type { SocialLinkType } from '../../types/SocialLinkType';

type SocialLinksProps = {
  links: SocialLinkType[],
};

const SocialLinks = (props: SocialLinksProps): Node => {
  const { links } = props;

  const linksElements = links.map((socialLink: SocialLinkType) => (
    <li key={socialLink?.type}>
      <a href={socialLink?.url}>
        {socialLink?.type}
      </a>
    </li>
  ));

  return (
    <ul>
      {linksElements}
    </ul>
  );
};

export default SocialLinks;
