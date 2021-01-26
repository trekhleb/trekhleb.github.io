import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import HyperLink from './HyperLink';
import { issuesURL } from '../../constants/links';
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
    url: issuesURL,
  };

  return (
    <footer className={`${className}`}>
      <Row>
        <div>
          <HyperLink
            link={issuesLink}
            className="text-xs"
            startEnhancer={(<FaGithub size={20} />)}
          >
            Feedback
          </HyperLink>
        </div>

        <div
          style={{ flex: 1 }}
          className="flex flex-row items-center justify-center"
        >
          <SocialLinks
            links={profile?.socialLinks}
            expandable={false}
            iconClassName="w-5 h-5"
            itemClassName="mr-4"
          />
        </div>

        <div>
          &nbsp;
        </div>
      </Row>
    </footer>
  );
};

export default Footer;
