import React, { SyntheticEvent, useState } from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaDev } from '@react-icons/all-files/fa/FaDev';

import { socialLinkTypes } from '../../types/SocialLink';

import type { SocialLink as SocialLinkType } from '../../types/SocialLink';
import type { Link as LinkType } from '../../types/Link';
import HyperLink from './HyperLink';
import { activeLinkColor } from '../../constants/style';

type SocialLinksProps = {
  links: SocialLinkType[] | null | undefined,
};

const linkToIcon = {
  [socialLinkTypes.twitter]: FaTwitter,
  [socialLinkTypes.instagram]: FaInstagram,
  [socialLinkTypes.gitHub]: FaGithub,
  [socialLinkTypes.stackOverflow]: FaStackOverflow,
  [socialLinkTypes.linkedIn]: FaLinkedin,
  [socialLinkTypes.medium]: FaMedium,
  [socialLinkTypes.facebook]: FaFacebookSquare,
  [socialLinkTypes.devTo]: FaDev,
  [socialLinkTypes.youTube]: FaYoutube,
};

const SocialLinks = (props: SocialLinksProps): React.ReactElement | null => {
  const { links = [] } = props;

  const [showSecondary, setShowSecondary] = useState(false);

  if (!links) {
    return null;
  }

  const toggleSecondary = (event: SyntheticEvent): void => {
    event.preventDefault();
    setShowSecondary(!showSecondary);
  };

  let somethingToHide = false;

  const linksElements = (links || [])
    .filter((socialLink: SocialLinkType) => {
      if (typeof socialLink.secondary === 'boolean' && socialLink.secondary === false) {
        somethingToHide = true;
      }
      if (showSecondary) {
        return true;
      }
      return !socialLink?.secondary;
    })
    .map((socialLink: SocialLinkType) => {
      let linkIcon = null;
      const linkType = socialLink?.type || '';
      if (linkType in linkToIcon) {
        const Icon = linkToIcon[linkType];
        linkIcon = <Icon className="w-6 h-6" />;
      }
      const link: LinkType = {
        url: socialLink.url,
      };
      return (
        <li key={socialLink?.type} className="mr-4 mb-2 flex flex-row items-center last:mr-0">
          <HyperLink link={link}>
            {linkIcon || socialLink.url}
          </HyperLink>
        </li>
      );
    });

  /* eslint-disable jsx-a11y/anchor-is-valid */
  const moreLessButton = somethingToHide ? (
    <li className="flex flex-row items-center mb-2">
      <a
        href="#"
        className={`cursor-pointer text-xs font-light hover:${activeLinkColor}`}
        onClick={toggleSecondary}
      >
        {showSecondary ? '- less' : '+ more'}
      </a>
    </li>
  ) : null;

  return (
    <nav>
      <ul className="flex flex-row flex-wrap">
        {linksElements}
        {moreLessButton}
      </ul>
    </nav>
  );
};

export default SocialLinks;
