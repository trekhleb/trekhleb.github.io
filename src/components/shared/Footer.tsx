import React from 'react';
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiRss } from '@react-icons/all-files/fi/FiRss';

import HyperLink from './HyperLink';
import { rssPath, supportURL } from '../../constants/links';
import SocialLinks from './SocialLinks';
import { profile } from '../../data/profile';
import FooterMenu from './FooterMenu';
import { FOOTER_NAV } from '../../constants/routes';
import { authorName } from '../../constants/siteMeta';

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;

  const withSupportLink = false;

  const year = new Date().getFullYear();

  const linkClasses = 'inline-flex h-10 items-center gap-1.5 text-sm font-medium text-fg';

  return (
    <footer className={`mt-auto border-t border-line ${className}`}>
      <div className="container-page flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:py-10 sm:text-left">
        <div className="text-sm font-medium text-fg">
          © {year} {authorName}
        </div>

        {!!FOOTER_NAV.length && (
          <FooterMenu />
        )}

        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-8">
          <HyperLink
            link={{ url: '/subscribe' }}
            className={linkClasses}
            hoverClassName="hover:text-fg"
            startEnhancer={<FiMail size={16} aria-hidden="true" />}
          >
            Subscribe
          </HyperLink>

          {withSupportLink && (
            <HyperLink
              link={{ url: supportURL }}
              className={linkClasses}
              hoverClassName="hover:text-fg"
              startEnhancer={<FaRegHeart size={16} aria-hidden="true" />}
            >
              Support
            </HyperLink>
          )}

          <HyperLink
            link={{ url: rssPath }}
            className={linkClasses}
            hoverClassName="hover:text-fg"
            startEnhancer={<FiRss size={16} aria-hidden="true" />}
          >
            RSS
          </HyperLink>
        </nav>

        <div className="flex flex-row items-center justify-center gap-1">
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            variant="plain"
          />
          <HyperLink
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xl leading-none transition-colors hover:bg-subtle"
            hoverClassName="hover:text-fg"
            link={{
              url: 'https://war.ukraine.ua/',
              caption: 'Help Ukraine to survive the russian invasion',
            }}
          >
            <span role="img" aria-label="Flag of Ukraine">🇺🇦</span>
          </HyperLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
