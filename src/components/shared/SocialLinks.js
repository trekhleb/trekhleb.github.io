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
    <li key={socialLink?.type} className="mr-3">
      <a href={socialLink?.url}>
        {socialLink?.type}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul className="flex flex-row">
        {linksElements}
      </ul>
    </nav>
  );
};

export default SocialLinks;
