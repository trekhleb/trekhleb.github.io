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
      id
      timeToRead
      html
      excerpt(pruneLength: 300, format: PLAIN)
      fields {
        slug
      }
      frontmatter {
        title
        summary
        date(formatString: "DD MMMM, YYYY")
        cover {
          childImageSharp {
            fluid(
              fit: COVER,
              cropFocus: CENTER,
              grayscale: false,
              quality: 90,
              maxWidth: 1000
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
