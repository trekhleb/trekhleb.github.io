import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { getShareImage, ShareImage } from '../utils/shareImage';

type ShareImagesQuery = {
  allFile: {
    nodes: {
      relativePath: string,
      childImageSharp: { gatsbyImageData: IGatsbyImageData } | null,
    }[],
  },
};

type UseShareImageProps = {
  imagePath?: string | null,
};

// The link-preview image of a project page, made from the project cover.
export const useShareImage = (props: UseShareImageProps): ShareImage | undefined => {
  const { imagePath } = props;

  // Only project covers (files named "*cover*" right in a project's folder) get a share image.
  const images: ShareImagesQuery = useStaticQuery(graphql`
    query ShareImagesQuery {
      allFile(
        filter: {
          sourceInstanceName: {eq: "images"},
          relativeDirectory: {glob: "projects/*"},
          name: {glob: "*cover*"},
        }
      ) {
        nodes {
          relativePath
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
  `);

  if (!imagePath) {
    return undefined;
  }

  const node = images.allFile.nodes.find(
    (image): boolean => image.relativePath === imagePath,
  );

  return getShareImage(node?.childImageSharp?.gatsbyImageData);
};
