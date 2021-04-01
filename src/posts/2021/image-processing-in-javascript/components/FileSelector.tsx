import React, { ChangeEvent } from 'react';
import { FaFileImage } from '@react-icons/all-files/fa/FaFileImage';
import Button from '../../../../components/shared/Button';

type FileSelectorProps = {
  onSelect: (files: FileList | null) => void;
  accept?: string, // i.e. 'image/png,image/jpeg'
  capture?: 'user' | 'environment',
  multiple?: boolean,
  children: React.ReactNode,
};

const FileSelector = (props: FileSelectorProps): React.ReactElement => {
  const {
    onSelect,
    accept,
    capture,
    multiple = false,
    children,
  } = props;

  const onChange = (event: ChangeEvent): void => {
    const { files } = (event.target as HTMLInputElement);
    onSelect(files);
  };

  const icon = (
    <div className="mr-2">
      <FaFileImage size={14} />
    </div>
  );

  return (
    <Button style={{ padding: 0 }}>
      <label className="cursor-pointer py-2 px-3 flex uppercase font-medium text-xs tracking-wider">
        <input
          type="file"
          accept={accept}
          capture={capture}
          onChange={onChange}
          multiple={multiple}
          className="hidden"
        />
        {icon}
        {children}
      </label>
    </Button>
  );
};

export default FileSelector;
