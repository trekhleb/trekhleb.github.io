import React from 'react';

import { Project } from '../../types/Project';
import ProjectPreview, { ProjectCardSections } from './ProjectPreview';

type FeaturedProjectsProps = {
  projects: Project[],
};

// Home page cards stay short: cover, title, stars, a three-line summary and the Demo / Source
// buttons. Dates, tags, achievements and extra links live on the projects page.
const homeCardSections: ProjectCardSections = {
  dates: false,
  tags: false,
  achievements: false,
  links: false,
};

const FeaturedProjects = (props: FeaturedProjectsProps): React.ReactElement | null => {
  const { projects } = props;

  if (!projects || !projects.length) {
    return null;
  }

  // The same projects on every screen: one column on phones, two on tablets, three on desktops
  // (six cards fill every one of those grids completely).
  const cards = projects.map((project: Project) => (
    <div key={project.id} className="h-full">
      <ProjectPreview project={project} sections={homeCardSections} clampSummary />
    </div>
  ));

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 [&>div>div]:h-full">
      {cards}
    </div>
  );
};

export default FeaturedProjects;
