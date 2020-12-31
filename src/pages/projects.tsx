import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Projects as ProjectsType } from '../types/Project';
import PageHeader from '../components/shared/PageHeader';
import ProjectsList from '../components/elements/ProjectsList';

export const query = graphql`
  {
    site {
      siteMetadata {
        projects {
          name
          tags {
            name
          }
        }
      }
    }
  }
`;

const Projects = (props: PageProps): React.ReactElement => {
  const {data} = props;

  const projects: ProjectsType = data.site.siteMetadata.projects;

  return (
    <React.Fragment>
      <PageHeader>Projects</PageHeader>
      <div>
        <ProjectsList projects={projects} />
      </div>
    </React.Fragment>
  );
}

export default Projects;
