import React from 'react';
import { graphql, PageProps } from 'gatsby';

import BlogScreen from '../components/screens/BlogScreen';
import { BlogPageQuery } from './__generated__/BlogPageQuery';

interface BlogProps extends PageProps {
  data: BlogPageQuery,
}

export const query = graphql`
  query BlogPageQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      totalCount
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          summary
          date(formatString: "MMM D, YYYY")
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
  }
`;

const Blog = (props: BlogProps): React.ReactElement => {
  const { data } = props;

  return (
    <BlogScreen posts={data} />
  );
};

export default Blog;
