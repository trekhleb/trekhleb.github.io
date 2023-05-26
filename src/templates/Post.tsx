import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostTemplateQuery } from './__generated__/PostTemplateQuery';
import PostScreen from '../components/screens/PostScreen';

interface BlogPostProps extends PageProps {
  data: PostTemplateQuery,
}

export const query = graphql`
  query PostTemplateQuery ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      fields {
        slug
      }
      internal {
        contentFilePath
      }
      frontmatter {
        title
        summary
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH,
              quality: 95,
              transformOptions: {
                fit: COVER,
                cropFocus: CENTER,
                grayscale: false,
              },
            )
          }
        }
      }
    }
  }
`;

const BlogPost = (props: BlogPostProps): React.ReactElement => {
  const { data, children } = props;
  return (
    <PostScreen post={data}>{children}</PostScreen>
  );
};

export default BlogPost;
