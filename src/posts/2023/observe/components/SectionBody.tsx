import React from 'react';
import { SectionContext } from './Section';
import { normalizeHash } from '../utils/hash';
import { SectionHash } from '../types/section';

type SectionBodyProps = {
  children: React.ReactNode,
}

export function SectionBody(props: SectionBodyProps): React.ReactElement {
  const { children } = props;

  const { deps = [] } = React.useContext(SectionContext);

  const followsFromList = deps.length ? deps.map((depHash: SectionHash) => {
    const normalizedHash = normalizeHash(depHash);
    return (
      <span key={normalizedHash} className="not-prose">
        <a
          href={`#${normalizedHash}`}
          // style={{ color: 'black', textDecoration: 'none' }}
          className="bg-slate-200 text-xs rounded-md px-2 py-1 font-mono font-medium no-underline hover:underline"
        >
          {depHash}
        </a>
      </span>
    );
  }) : null;

  const followsFrom = followsFromList ? (
    <div>Follows from: {followsFromList}</div>
  ) : null;

  return (
    <div className="text-sm">
      {followsFrom}
      {children}
    </div>
  );
}
