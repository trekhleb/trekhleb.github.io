import React from 'react';

import { Snapshot as SnapshotType } from '../types/Snapshots';
import Snapshot from './Snapshot';
import snapshot2021 from '../data/2021';
// import snapshot2020 from '../data/2020';

const Snapshots = (): React.ReactElement | null => {
  const list = Object.values(snapshot2021).map((snapshot: SnapshotType, index: number) => {
    return (
      <Snapshot
        snapshot={snapshot}
        key={snapshot.id}
        index={index + 1}
      />
    );
  });

  return (
    <div>{list}</div>
  );
};

export default Snapshots;
