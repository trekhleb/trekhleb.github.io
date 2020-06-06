// @flow
import React from 'react';
import type { Node } from 'react';
import type { SocialLinkType } from '../../types/SocialLinkType';
import Link from './Link';
import Icon from './Icon';
import { iconKeys } from '../../icons';
import { socialLinkTypes } from '../../types/SocialLinkType';

type SocialLinksProps = {
  links: ?(SocialLinkType[]),
};

const linkToIcon = {
  [socialLinkTypes.twitter]: iconKeys.twitter,
  [socialLinkTypes.instagram]: iconKeys.instagram,
  [socialLinkTypes.gitHub]: iconKeys.github,
  [socialLinkTypes.stackOverflow]: iconKeys.stackoverflow,
  [socialLinkTypes.linkedIn]: iconKeys.linkedin,
  [socialLinkTypes.medium]: iconKeys.medium,
  [socialLinkTypes.facebook]: iconKeys.facebook,
  [socialLinkTypes.devTo]: iconKeys.devto,
};

const SocialLinks = (props: SocialLinksProps): Node => {
  const { links } = props;

  const linksElements = (links || [])
    .filter((socialLink: SocialLinkType) => {
      return !socialLink?.hidden;
    })
    .map((socialLink: SocialLinkType) => {
      let linkIcon = socialLink.type;

      if (Object.prototype.hasOwnProperty.call(linkToIcon, socialLink.type)) {
        const iconKey = linkToIcon[socialLink.type];
        linkIcon = <Icon iconKey={iconKey} className="w-8 h-8" />;
      }

      return (
        <li key={socialLink?.type} className="mr-4 flex flex-row items-center last:mr-0">
          <Link to={socialLink.url}>
            {linkIcon}
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <ul className="flex flex-row">
        {linksElements}
      </ul>
    </nav>
  );
};

export default SocialLinks;
