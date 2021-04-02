import React, { useState } from 'react';
import FileSelector from './FileSelector';
import ImageList from './ImageList';

const Images = (): React.ReactElement => {
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null);

  const onFilesSelect = (files: FileList | null): void => {
    setSelectedImages(files);
  };

  return (
    <>
      <FileSelector
        onSelect={onFilesSelect}
        accept="image/png,image/jpeg"
        multiple
      >
        Choose images
      </FileSelector>
      <ImageList images={selectedImages} />
    </>
  );
};

export default Images;
