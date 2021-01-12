import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostTemplateQuery } from './__generated__/PostTemplateQuery';
import PostScreen from '../components/screens/PostScreen';

interface BlogPostProps extends PageProps {
  data: PostTemplateQuery,
}

export const query = graphql`
  query PostTemplateQuery ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const BlogPost = (props: BlogPostProps): React.ReactElement => {
  const { data } = props;
  return (
    <PostScreen post={data} />
  );
};

export default BlogPost;
