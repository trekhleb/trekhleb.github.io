import React from 'react';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube';
import { FaStackOverflow } from '@react-icons/all-files/fa/FaStackOverflow';
import { FaMedium } from '@react-icons/all-files/fa/FaMedium';
import { FaDev } from '@react-icons/all-files/fa/FaDev';

import { socialLinkTypes } from '../../types/SocialLink';
import type { SocialLink as SocialLinkType } from '../../types/SocialLink';
import HyperLink from './HyperLink';
import Expander from './Expander';
import XIcon from './XIcon';

type SocialLinksVariant = 'button' | 'plain';

type SocialLinksProps = {
  links: SocialLinkType[] | null | undefined,
  expandable?: boolean,
  forceShowingSecondaryLinks?: boolean,
  iconClassName?: string,
  itemClassName?: string,
  // "button": outlined round buttons (profile); "plain": bare icons (footer).
  variant?: SocialLinksVariant,
};

type IconComponent = React.ComponentType<{ className?: string, size?: number }>;

// One family (solid FontAwesome brand marks, as on the previous site) so every icon has the same
// weight and contrast; X gets its current logo, which the icon set predates.
const linkToIcon: Record<string, IconComponent> = {
  [socialLinkTypes.twitter]: XIcon,
  [socialLinkTypes.instagram]: FaInstagram,
  [socialLinkTypes.gitHub]: FaGithub,
  [socialLinkTypes.stackOverflow]: FaStackOverflow,
  [socialLinkTypes.linkedIn]: FaLinkedin,
  [socialLinkTypes.medium]: FaMedium,
  [socialLinkTypes.facebook]: FaFacebookSquare,
  [socialLinkTypes.devTo]: FaDev,
  [socialLinkTypes.youTube]: FaYoutube,
};

const variantClasses: Record<SocialLinksVariant, string> = {
  button: 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors duration-150 hover:border-line-strong hover:bg-subtle',
  plain: 'inline-flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors duration-150 hover:bg-subtle',
};

const SocialLinks = (props: SocialLinksProps): React.ReactElement | null => {
  const {
    links = [],
    expandable = true,
    forceShowingSecondaryLinks = false,
    iconClassName = 'h-[18px] w-[18px]',
    itemClassName = '',
    variant = 'button',
  } = props;

  if (!links) {
    return null;
  }

  const filteredLinks = links.filter((link) => !link?.hidden);

  const onRender = (socialLink: SocialLinkType): React.ReactElement => {
    let linkIcon = null;
    const linkType = socialLink?.type || '';
    if (linkType in linkToIcon) {
      const Icon = linkToIcon[linkType];
      linkIcon = <Icon className={iconClassName} />;
    }
    return (
      <HyperLink
        link={socialLink}
        className={variantClasses[variant]}
        hoverClassName="hover:text-fg"
      >
        <span className="sr-only">{socialLink.caption || linkType}</span>
        {linkIcon || socialLink.url}
      </HyperLink>
    );
  };

  const toHide = (socialLink: SocialLinkType): boolean => {
    if (forceShowingSecondaryLinks) {
      return false;
    }
    return typeof socialLink.secondary !== 'boolean' || socialLink.secondary;
  };

  return (
    <Expander
      items={filteredLinks}
      onRender={onRender}
      toHide={toHide}
      expandable={expandable}
      itemClassName={itemClassName}
      className={variant === 'plain' ? 'gap-0.5' : 'gap-2'}
    />
  );
};

export default SocialLinks;
