import { useFluidCovers } from './useFluidCovers';
import {
  UseImagesQuery_allFile_nodes,
  UseImagesQuery_allFile_nodes_childImageSharp,
} from './__generated__/UseImagesQuery';

type UseFluidCoverProps = {
  imagePath?: string | null | undefined,
};

export const useFluidCover = (
  props: UseFluidCoverProps,
): UseImagesQuery_allFile_nodes_childImageSharp | undefined | null => {
  const { imagePath } = props;
  const allImages: UseImagesQuery_allFile_nodes[] = useFluidCovers();

  if (!imagePath) {
    return undefined;
  }

  const foundNode: UseImagesQuery_allFile_nodes | undefined = allImages.find(
    (node: UseImagesQuery_allFile_nodes) => {
      return node.relativePath === imagePath;
    },
  );

  if (!foundNode) {
    return undefined;
  }

  return foundNode?.childImageSharp;
};
