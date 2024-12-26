import React from 'react';
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { FiRss } from '@react-icons/all-files/fi/FiRss';

import HyperLink from './HyperLink';
import { rssPath, supportURL } from '../../constants/links';
import Row from './Row';
import SocialLinks from './SocialLinks';
import { PROFILE } from '../../data/profile';
import FooterMenu from './FooterMenu';
import { FOOTER_NAV } from '../../constants/routes';

type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;

  const withSupportLink = false;

  return (
    <footer className={`flex flex-col justify-center items-center ${className}`}>
      {!!FOOTER_NAV.length && (
      <Row className="mb-6">
        <FooterMenu />
      </Row>
      )}

      <Row className="mb-6">
        <HyperLink
          link={{ url: '/subscribe' }}
          className="text-xs mr-5"
          startEnhancer={<AiOutlineMail size={20} />}
        >
          Subscribe
        </HyperLink>

        {withSupportLink && (
        <HyperLink
          link={{ url: supportURL }}
          className="text-xs mr-5"
          startEnhancer={<FaRegHeart size={20} />}
        >
          Support
        </HyperLink>
        )}

        <HyperLink
          link={{ url: rssPath }}
          className="text-xs"
          startEnhancer={<FiRss size={20} />}
        >
          RSS
        </HyperLink>
      </Row>

      <div
        style={{ flex: 1 }}
        className="flex flex-row items-center justify-center"
      >
        <SocialLinks
          links={PROFILE?.socialLinks}
          expandable={false}
          iconClassName="w-5 h-5"
          itemClassName="mr-2 ml-2"
        />
        <div className="ml-3">
          <HyperLink
            className="text-2xl leading-4"
            link={{
              url: 'https://war.ukraine.ua/',
              caption: 'Help Ukraine to survive the russian invasion',
            }}
          >
            🇺🇦
          </HyperLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
