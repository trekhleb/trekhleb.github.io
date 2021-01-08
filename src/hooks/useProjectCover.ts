import { useImages } from './useImages';
import {
  UseImagesQuery_allFile_nodes,
  UseImagesQuery_allFile_nodes_childImageSharp,
} from './__generated__/UseImagesQuery';

type UseProjectCoverProps = {
  coverPath?: string | null | undefined,
};

export const useProjectCover = (
  props: UseProjectCoverProps,
): UseImagesQuery_allFile_nodes_childImageSharp | undefined | null => {
  const { coverPath } = props;
  const allImages: UseImagesQuery_allFile_nodes[] = useImages();

  if (!coverPath) {
    return undefined;
  }

  const foundNode: UseImagesQuery_allFile_nodes | undefined = allImages.find(
    (node: UseImagesQuery_allFile_nodes) => {
      return node.relativePath === coverPath;
    },
  );

  if (!foundNode) {
    return undefined;
  }

  return foundNode?.childImageSharp;
};
