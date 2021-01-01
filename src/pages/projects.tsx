import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Projects as ProjectsType } from '../types/Project';
import ProjectsScreen from '../components/screens/ProjectsScreen';
import { ProjectsPageQuery } from './__generated__/ProjectsPageQuery';

interface ProjectsPageProps extends PageProps {
  data: ProjectsPageQuery,
}

export const query = graphql`
  query ProjectsPageQuery {
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

const Projects = (props: ProjectsPageProps): React.ReactElement => {
  const { data } = props;

  const projects: ProjectsType = data?.site?.siteMetadata?.projects || [];

  return (
    <ProjectsScreen projects={projects} />
  );
};

export default Projects;
