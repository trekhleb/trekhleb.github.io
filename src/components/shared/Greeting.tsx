import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

type GreetingProps = {
  // Years since the career started; the phrase is left out when unknown.
  experienceYears?: number,
};

const Greeting = (props: GreetingProps): React.ReactElement => {
  const { experienceYears } = props;

  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const linkClasses = 'inline underline decoration-fg decoration-1 underline-offset-[3px] transition-colors hover:text-accent hover:decoration-accent';

  const projectsLinkElement = (
    <HyperLink link={projectsLink} className={linkClasses} formatted={false}>projects</HyperLink>
  );

  const blogLinkElement = (
    <HyperLink link={blogLink} className={linkClasses} formatted={false}>articles</HyperLink>
  );

  const experience = experienceYears
    ? ` with more than ${experienceYears} years of experience`
    : '';

  return (
    <p>
      Hi there! I&apos;m Oleksii, a full-stack software engineer{experience} and a lifelong
      learner. What I enjoy most is taking a complex technical idea, digging into it until it feels
      simple, and then distilling it into something minimal, visual, and interactive that makes it
      click for others too. That&apos;s the thread running through most of my open-source
      {' '}
      {projectsLinkElement}
      : algorithms and data structures in JavaScript, machine learning built from scratch, a neural
      network in a handful of functions, a self-parking car that learns through a genetic
      algorithm, and more. I&apos;m drawn to the hidden connections between ideas and to clean code
      and interfaces where less is more. I also write {blogLinkElement} about learning, life, web
      development, and machine learning.
    </p>
  );
};

export default Greeting;
