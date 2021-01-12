import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import HyperLink from './HyperLink';
import { issuesURL } from '../../constants/links';
import { Link } from '../../types/Link';

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
      <HyperLink
        link={issuesLink}
        className="text-xs"
        startEnhancer={(<FaGithub size={16} />)}
      >
        Feedback
      </HyperLink>
    </footer>
  );
};

export default Footer;
