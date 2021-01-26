import React from 'react';
import { graphql, PageProps } from 'gatsby';

import BlogScreen from '../components/screens/BlogScreen';
import { BlogPageQuery } from './__generated__/BlogPageQuery';

interface BlogProps extends PageProps {
  data: BlogPageQuery,
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        id
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "MMM D, YYYY")
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
  }
`;

const Blog = (props: BlogProps): React.ReactElement => {
  const { data } = props;

  return (
    <BlogScreen posts={data} />
  );
};

export default Blog;
