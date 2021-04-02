import React from 'react';

type ImageListProps = {
  images: FileList | null,
};

const ImageList = (props: ImageListProps): React.ReactElement | null => {
  const { images } = props;

  if (!images || !images.length) {
    return null;
  }

  const imageRows = Array.from(images).map((file: File) => {
    const imageURL = URL.createObjectURL(file);
    return (
      <div key={file.name} className="mb-3 flex flex-row">
        <a href={imageURL} target="_blank" rel="noreferrer" className="mr-3">
          <img src={imageURL} alt={file.name} className="w-16" style={{ margin: 0 }} />
        </a>
      </div>
    );
  });

  return (
    <div className="flex flex-col mt-6">
      {imageRows}
    </div>
  );
};

export default ImageList;
