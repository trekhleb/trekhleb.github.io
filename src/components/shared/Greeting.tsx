import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const projectsLinkElement = (
    <div className="inline-block">
      <HyperLink link={projectsLink} className="underline">projects</HyperLink>
    </div>
  );

  return (
    <>
      <p className="font-light">
        Hi there!
        I&apos;m Oleksii. I work as a full-time software engineer. In my spare time I do
        open-sourcing <i>(normally it is about 1-2 hours in the morning before the work)</i>.
        Most of my open-source {projectsLinkElement} are focused
        on one thing &ndash; <b>to help people learn</b>. You may use these projects to
        learn about algorithms in JavaScript and get prepared for technical interviews, or
        to learn Python syntax and start experimenting with machine learning algorithms
        and math behind them, etc.
      </p>
    </>
  );
};

export default Greeting;
