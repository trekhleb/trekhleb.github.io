import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there!
      I&apos;m Oleksii. I work as a full-time software engineer. In my spare time I do
      open-sourcing.
      Most of my open-source {projectsLinkElement} are focused
      on one thing &ndash; <i>to help people learn</i>. You may use these projects to
      learn about algorithms in JavaScript and get prepared for technical interviews, or
      to learn Python syntax and start experimenting with machine learning algorithms
      and math behind them, etc. I also write {blogLinkElement} about life, web-development
      and machine learning.
    </p>
  );
};

export default Greeting;
