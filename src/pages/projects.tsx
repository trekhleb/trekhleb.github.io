import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Projects as ProjectsType } from '../types/Project';
import ProjectsScreen from '../components/screens/ProjectsScreen';

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
  const { data } = props;

  const projects: ProjectsType = data.site.siteMetadata.projects;

  return (
    <ProjectsScreen projects={projects} />
  );
}

export default Projects;
