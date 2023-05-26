import { graphql, useStaticQuery } from 'gatsby';
import { UseImagesQuery, UseImagesQuery_allFile_nodes } from './__generated__/UseImagesQuery';

export const useFluidCovers = (): UseImagesQuery_allFile_nodes[] => {
  // @see: https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
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
  `);
  return images.allFile.nodes;
};
