import React from 'react';
import { FiArchive } from '@react-icons/all-files/fi/FiArchive';

const Archived = (): React.ReactElement => {
  return (
    <span
      title="Project has been archived and is currently not active"
      className="inline-flex h-10 items-center gap-2 rounded-lg border border-dashed border-line-strong px-3 text-sm font-medium text-muted"
    >
      <FiArchive size={15} aria-hidden="true" />
      <span>Archived</span>
    </span>
  );
};

export default Archived;
