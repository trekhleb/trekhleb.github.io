// @flow
import React from 'react';
import type { Node } from 'react';
import type { SocialLinkType } from '../../types/SocialLinkType';
import ExternalLink from './ExternalLink';

type SocialLinksProps = {
  links: SocialLinkType[],
};

const SocialLinks = (props: SocialLinksProps): Node => {
  const { links } = props;

  const linksElements = links.map((socialLink: SocialLinkType) => (
    <li key={socialLink?.type} className="mr-3">
      <ExternalLink to={socialLink?.url}>
        {socialLink?.type}
      </ExternalLink>
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
