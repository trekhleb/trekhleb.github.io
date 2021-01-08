import React from 'react';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';

import HyperLink from './HyperLink';
import { issuesURL } from '../../constants/links';

const Footer = (): React.ReactElement => {
  return (
    <footer className="p-6">
      <HyperLink
        to={issuesURL}
        className="text-xs"
        startEnhancer={(<FaGithub size={16} />)}
      >
        Feedback
      </HyperLink>
    </footer>
  );
};

export default Footer;
