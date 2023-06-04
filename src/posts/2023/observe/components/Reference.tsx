import React from 'react';
import { normalizeHash } from '../utils/hash';
import { SectionHash } from '../types/section';

type ReferenceProps = {
  hash: SectionHash,
}

export function Reference(props: ReferenceProps): React.ReactElement {
  const { hash } = props;

  const normalizedHash = normalizeHash(hash);

  return (
    <span className="not-prose">
      <a
        href={`#${normalizedHash}`}
        className="bg-slate-200 text-xs rounded-md px-2 py-1 font-mono font-medium no-underline hover:underline"
      >
        {hash}
      </a>
    </span>
  );
}
