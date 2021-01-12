import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import HyperLink from './HyperLink';
import { issuesURL } from '../../constants/links';
import { Link } from '../../types/Link';

const Footer = (): React.ReactElement => {
  const issuesLink: Link = {
    url: issuesURL,
  };

  return (
    <footer className="p-12">
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
