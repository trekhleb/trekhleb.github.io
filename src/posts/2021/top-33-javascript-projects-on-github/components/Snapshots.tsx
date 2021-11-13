import React from 'react';

import { Snapshot as SnapshotType } from '../types/Snapshots';
import Snapshot from './Snapshot';
import snapshot2018 from '../data/2018';
import snapshot2020 from '../data/2020';
import snapshot2021 from '../data/2021';

const Snapshots = (): React.ReactElement | null => {
  const list = Object.values(snapshot2021).map((snapshot: SnapshotType, index: number) => {
    const kStarsHistory: (number | null)[] = [
      snapshot2018[snapshot.id] ? snapshot2018[snapshot.id].kStars : null, // 2018
      snapshot2020[snapshot.id] ? snapshot2020[snapshot.id].kStars : null, // 2020
      snapshot.kStars, // 2021
    ];
    return (
      <Snapshot
        snapshot={snapshot}
        key={snapshot.id}
        index={index + 1}
        kStarsHistory={kStarsHistory}
      />
    );
  });

  return (
    <div>
      {list}
    </div>
  );
};

export default Snapshots;
