import { IGatsbyImageData } from 'gatsby-plugin-image';
import { useFluidCovers } from './useFluidCovers';
import {
  UseImagesQuery_allFile_nodes,
} from './__generated__/UseImagesQuery';

type UseFluidCoversByPathsProps = {
  imagePaths?: (string | null | undefined)[] | null | undefined,
};

/*
  Looks up several pictures at once and hands them back in the order they were asked for, with a
  hole (`undefined`) wherever a path matches no file. One static query serves them all, so this
  stays a single hook call no matter how many pictures an entry carries.
*/
export const useFluidCoversByPaths = (
  props: UseFluidCoversByPathsProps,
): (IGatsbyImageData | undefined)[] => {
  const { imagePaths } = props;
  const allImages: UseImagesQuery_allFile_nodes[] = useFluidCovers();

  if (!imagePaths || !imagePaths.length) {
    return [];
  }

  return imagePaths.map((imagePath: string | null | undefined) => {
    if (!imagePath) {
      return undefined;
    }

    const foundNode: UseImagesQuery_allFile_nodes | undefined = allImages.find(
      (node: UseImagesQuery_allFile_nodes) => {
        return node.relativePath === imagePath;
      },
    );

    return foundNode?.childImageSharp?.gatsbyImageData || undefined;
  });
};
