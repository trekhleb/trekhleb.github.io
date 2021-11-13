import React from 'react';

import { Snapshot as SnapshotType } from '../types/Snapshots';

type SnapshotProps = {
  index: number
  snapshot: SnapshotType,
  kStarsHistory: (number | null)[],
};

const Snapshot = (props: SnapshotProps): React.ReactElement | null => {
  const { index, snapshot, kStarsHistory } = props;

  const starsNow = (
    <span>
      ★ {Math.floor(snapshot.kStars)}k
    </span>
  );

  const delta = (
    <sup style={{ color: 'darkgreen', paddingLeft: '5px' }}>
      +{Math.floor((kStarsHistory[2] || 0) - (kStarsHistory[1] || 0))}k
    </sup>
  );

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
          {starsNow}{' '}
          {delta}
        </em>
      </p>
    </div>
  );
};

export default Snapshot;
