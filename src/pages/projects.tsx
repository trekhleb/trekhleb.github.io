import React from 'react';
// import { PageProps } from 'gatsby';

// import { Projects as ProjectsType } from '../types/Project';
// import { ProjectsPageQuery } from './__generated__/ProjectsPageQuery';
import ProjectsScreen from '../components/screens/ProjectsScreen';
import { projects } from '../data/projects';

// interface ProjectsPageProps extends PageProps {
//   data: ProjectsPageQuery,
// }
//
// export const query = graphql`
//   query ProjectsPageQuery {
//     site {
//       siteMetadata {
//         projects {
//           name
//           archived
//           description
//           startDate
//           endDate
//           coverURL
//           srcURL
//           tags {
//             name
//           }
//         }
//       }
//     }
//   }
// `;

const Projects = (): React.ReactElement => {
  // const { data } = props;
  // const qlProjects: ProjectsType = data?.site?.siteMetadata?.projects || [];

  return (
    <ProjectsScreen projects={projects} />
  );
};

export default Projects;
