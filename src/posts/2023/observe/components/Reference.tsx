import React from 'react';

import { getHashColor, normalizeHash } from '../utils/hash';
import { SectionHash } from '../types/section';

type ReferenceProps = {
  hash: SectionHash,
}

export function Reference(props: ReferenceProps): React.ReactElement {
  const { hash } = props;

  const normalizedHash = normalizeHash(hash);

  const tagColorClass = getHashColor(hash, false);

  return (
    <span className="not-prose">
      <a
        href={`#${normalizedHash}`}
        className={`text-xs rounded-md px-2 py-1 font-mono font-medium no-underline hover:underline ${tagColorClass}`}
      >
        {hash}
      </a>
    </span>
  );
}
