import { useImages } from './useImages';
import {
  UseImagesQuery_allFile_nodes,
  UseImagesQuery_allFile_nodes_childImageSharp,
} from './__generated__/UseImagesQuery';

type UseProjectCoverProps = {
  coverImageName?: string | null | undefined,
};

export const useProjectCover = (
  props: UseProjectCoverProps,
): UseImagesQuery_allFile_nodes_childImageSharp | undefined | null => {
  const { coverImageName } = props;
  const allImages: UseImagesQuery_allFile_nodes[] = useImages();

  if (!coverImageName) {
    return undefined;
  }

  const foundNode: UseImagesQuery_allFile_nodes | undefined = allImages.find(
    (node: UseImagesQuery_allFile_nodes) => {
      return node.base === coverImageName;
    },
  );

  if (!foundNode) {
    return undefined;
  }

  return foundNode?.childImageSharp;
};
