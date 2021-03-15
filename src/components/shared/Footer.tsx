import React from 'react';
import { GoCommentDiscussion } from '@react-icons/all-files/go/GoCommentDiscussion';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { FiRss } from '@react-icons/all-files/fi/FiRss';

import HyperLink from './HyperLink';
import { discussionsURL, rssPath } from '../../constants/links';
import { Link } from '../../types/Link';
import Row from './Row';
import SocialLinks from './SocialLinks';
import { profile } from '../../data/profile';

type FooterProps = {
  className?: string,
};

const Footer = (props: FooterProps): React.ReactElement => {
  const { className = '' } = props;

  const issuesLink: Link = {
    url: discussionsURL,
  };

  const subscribeLink: Link = {
    url: '/subscribe',
  };

  const rssLink: Link = {
    url: rssPath,
  };

  return (
    <footer className={`${className}`}>
      <Row responsive>
        <Row style={{ flex: 1 }} className="mb-6 sm:mb-0">
          <HyperLink
            link={subscribeLink}
            className="text-xs mr-5"
            startEnhancer={(<AiOutlineMail size={20} />)}
          >
            Subscribe
          </HyperLink>

          <HyperLink
            link={issuesLink}
            className="text-xs mr-5"
            startEnhancer={(<GoCommentDiscussion size={20} />)}
          >
            Feedback
          </HyperLink>

          <HyperLink
            link={rssLink}
            className="text-xs"
            startEnhancer={(<FiRss size={20} />)}
          >
            RSS
          </HyperLink>
        </Row>

        <div
          style={{ flex: 1 }}
          className="flex flex-row items-center justify-center"
        >
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-5 h-5"
            itemClassName="mr-2 ml-2"
          />
        </div>

        <div style={{ flex: 1 }} className="hidden sm:flex">
          &nbsp;
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
