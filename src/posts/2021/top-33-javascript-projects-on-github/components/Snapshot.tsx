import React from 'react';
import { Snapshot as SnapshotType } from '../types/Snapshots';

type SnapshotProps = {
  index: number
  snapshot: SnapshotType,
  kStarsHistory: (number | null)[],
};

const Snapshot = (props: SnapshotProps): React.ReactElement | null => {
  const { index, snapshot, kStarsHistory } = props;
  return (
    <div>
      <h2 style={{ marginBottom: '10px' }}>
        #{index}{' '}
        <a href={`https://github.com/${snapshot.id}`}>
          {snapshot.id}
        </a>
      </h2>
      <p style={{ marginBottom: '5px' }}>
        {snapshot.description}
      </p>
      <p style={{ marginTop: 0 }}>
        <em style={{ whiteSpace: 'nowrap' }}>
          ★ {snapshot.kStars}k
        </em>
      </p>
      <div>
        {kStarsHistory[0]},
        {kStarsHistory[2]},
        {kStarsHistory[3]},
      </div>
    </div>
  );
};

export default Snapshot;
