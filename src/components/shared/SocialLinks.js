// @flow
import React, { useState } from 'react';
import type { Node } from 'react';
import type { SocialLinkType } from '../../types/SocialLinkType';
import Link from './Link';
import Icon from './Icon';
import { iconKeys } from '../../icons';
import { socialLinkTypes } from '../../types/SocialLinkType';
import { activeLinkColor } from '../../constants/style';

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
  [socialLinkTypes.youTube]: iconKeys.youtube,
};

const SocialLinks = (props: SocialLinksProps): Node => {
  const { links } = props;

  const [showSecondary, setShowSecondary] = useState(false);

  const toggleSecondary = () => {
    setShowSecondary(!showSecondary);
  };

  const linksElements = (links || [])
    .filter((socialLink: SocialLinkType) => {
      if (showSecondary) {
        return true;
      }
      return !socialLink?.secondary;
    })
    .map((socialLink: SocialLinkType) => {
      let linkIcon = socialLink.type;

      if (Object.prototype.hasOwnProperty.call(linkToIcon, socialLink.type)) {
        const iconKey = linkToIcon[socialLink.type];
        linkIcon = <Icon iconKey={iconKey} className="w-6 h-6" />;
      }

      return (
        <li key={socialLink?.type} className="mr-4 mb-2 flex flex-row items-center last:mr-0">
          <Link to={socialLink.url}>
            {linkIcon}
          </Link>
        </li>
      );
    });

  return (
    <nav>
      <ul className="flex flex-row flex-wrap">
        {linksElements}
        <li className="flex flex-row items-center mb-2">
          <div
            role="button"
            className={`cursor-pointer text-xs font-light hover:${activeLinkColor}`}
            onClick={toggleSecondary}
          >
            {showSecondary ? '- less' : '+ more'}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
