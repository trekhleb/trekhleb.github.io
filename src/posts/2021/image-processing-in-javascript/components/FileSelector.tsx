import React, { ChangeEvent } from 'react';

type FileSelectorProps = {
  onSelect: (files: FileList | null) => void;
  accept?: string,
  capture?: 'user' | 'environment',
  multiple?: boolean,
};

const FileSelector = (props: FileSelectorProps): React.ReactElement => {
  const {
    onSelect,
    accept,
    capture,
    multiple = false,
  } = props;

  const onChange = (event: ChangeEvent): void => {
    const { files } = (event.target as HTMLInputElement);
    onSelect(files);
  };

  return (
    <button
      className="bg-black hover:bg-gray-800 text-white rounded transition-all duration-300 inline-block"
      type="button"
    >
      <label className="cursor-pointer py-2 px-4 flex">
        <input
          type="file"
          accept={accept}
          capture={capture}
          onChange={onChange}
          multiple={multiple}
          className="hidden"
        />
        Choose files
      </label>
    </button>
  );
};

export default FileSelector;
