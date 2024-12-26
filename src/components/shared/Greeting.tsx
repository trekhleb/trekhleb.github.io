import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { ROUTES } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${ROUTES.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${ROUTES.blog.path}/`,
  };

  const projectsLinkElement = (
    <span className="inline-block">
      <HyperLink link={projectsLink} className="underline underline-offset-2">projects</HyperLink>
    </span>
  );

  const blogLinkElement = (
    <span className="inline-block">
      <HyperLink link={blogLink} className="underline underline-offset-2">articles</HyperLink>
    </span>
  );

  return (
    <p className="font-light">
      Hi there! I&apos;m Oleksii, a full-stack software engineer. In my spare time, I do
      open-sourcing. Most of my open-source {projectsLinkElement} focus on a single
      goal &ndash; helping people learn. These projects can help you explore algorithms
      in JavaScript and prepare for technical interviews, or learn Python syntax and
      start experimenting with machine learning algorithms and the math behind them,
      among other topics. I also write {blogLinkElement} about life, web development,
      and machine learning.
    </p>
  );
};

export default Greeting;
