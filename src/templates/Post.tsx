import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { PostTemplateQuery } from './__generated__/PostTemplateQuery';
import PostScreen from '../components/screens/PostScreen';
import type { PostNavItem } from '../types/Post';

interface BlogPostProps extends PageProps {
  data: PostTemplateQuery,
  pageContext: {
    slug: string,
    newerPost?: PostNavItem | null,
    olderPost?: PostNavItem | null,
  },
}

export const query = graphql`
  query PostTemplateQuery ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      tableOfContents(maxDepth: 3)
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
        isoDate: date(formatString: "YYYY-MM-DD")
        cover {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH,
              breakpoints: [1200],
              formats: [JPG],
              quality: 80,
              placeholder: NONE,
            )
          }
        }
      }
    }
  }
`;

const BlogPost = (props: BlogPostProps): React.ReactElement => {
  const { data, children, pageContext } = props;
  return (
    <PostScreen
      post={data}
      newerPost={pageContext?.newerPost}
      olderPost={pageContext?.olderPost}
    >
      {children}
    </PostScreen>
  );
};

export default BlogPost;
