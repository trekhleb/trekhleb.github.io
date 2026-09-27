import React from 'react';
import { graphql, PageProps } from 'gatsby';

import AboutScreen from '../components/screens/AboutScreen';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { IndexPageQuery } from './__generated__/IndexPageQuery';

interface IndexProps extends PageProps {
  data: IndexPageQuery,
}

// The newest three posts for "Latest writing" (the same rows as the blog page), the number of
// posts for the search/share description, and the build time the years of experience count to.
export const query = graphql`
  query IndexPageQuery {
    siteBuildMetadata {
      buildTime
    }
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/\\/src\\/posts\\//"}}},
      sort: {frontmatter: {date: DESC}},
      limit: 3,
    ) {
      totalCount
      nodes {
        ...PostPreviewFields
      }
    }
  }
`;

const Index = (props: IndexProps): React.ReactElement => {
  const { data } = props;

  return (
    <AboutScreen
      profile={profile}
      projects={projects}
      publications={publications}
      posts={data}
    />
  );
};

export default Index;
