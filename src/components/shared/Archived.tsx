import React from 'react';
import { FiArchive } from '@react-icons/all-files/fi/FiArchive';

import Row from './Row';

const Archived = (): React.ReactElement => {
  return (
    <div
      title="Project has been archived and is currently not active"
      className="transition duration-200 ease-in-out py-2 px-3 text-red-500 border border-red-500 rounded border-solid hover:bg-red-500 hover:text-white rounded cursor-not-allowed"
    >
      <Row>
        <div className="mr-2">
          <FiArchive />
        </div>
        <div>
          Archived
        </div>
      </Row>
    </div>
  );
};

export default Archived;
