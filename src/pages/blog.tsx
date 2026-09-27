import React from 'react';
import { graphql, PageProps } from 'gatsby';

import BlogScreen from '../components/screens/BlogScreen';
import { BlogPageQuery } from './__generated__/BlogPageQuery';

interface BlogProps extends PageProps {
  data: BlogPageQuery,
}

export const query = graphql`
  query BlogPageQuery {
    allMdx(
      filter: {internal: {contentFilePath: {regex: "/\\/src\\/posts\\//"}}},
      sort: {frontmatter: {date: DESC}},
    ) {
      totalCount
      nodes {
        ...PostPreviewFields
      }
    }
  }
`;

const Blog = (props: BlogProps): React.ReactElement => {
  const { data } = props;

  return (
    <BlogScreen posts={data} />
  );
};

export default Blog;
