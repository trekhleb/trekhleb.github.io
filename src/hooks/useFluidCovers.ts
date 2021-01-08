import { graphql, useStaticQuery } from 'gatsby';
import { UseImagesQuery, UseImagesQuery_allFile_nodes } from './__generated__/UseImagesQuery';

export const useFluidCovers = (): UseImagesQuery_allFile_nodes[] => {
  // @see: https://www.npmjs.com/package/gatsby-image
  const images: UseImagesQuery = useStaticQuery(graphql`
    query UseImagesQuery {
      allFile(
        filter: {sourceInstanceName: {eq: "images"}}
      ) {
        nodes {
          base
          name
          relativePath
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
  `);
  return images.allFile.nodes;
};
