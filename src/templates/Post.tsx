import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostTemplateQuery } from './__generated__/PostTemplateQuery';

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
  const post = data.markdownRemark;
  return (
    <div>
      <div>
        <h1>{post?.frontmatter?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
      </div>
    </div>
  );
};

export default BlogPost;
