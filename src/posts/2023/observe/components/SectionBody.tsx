import React from 'react';

import { SectionHash } from '../types/section';
import { Reference } from './Reference';
import { SectionContext } from '../contexts/section';

type SectionBodyProps = {
  children: React.ReactNode,
}

export function SectionBody(props: SectionBodyProps): React.ReactElement {
  const { children } = props;

  const { deps, siblings } = React.useContext(SectionContext);

  const followsFromList = deps.length ? deps.map((depHash: SectionHash) => {
    return <Reference key={depHash} hash={depHash} />;
  }) : null;

  const followsFrom = followsFromList ? (
    <div><span className="italic">Follows from:</span> {followsFromList}</div>
  ) : null;

  const relatesToList = siblings.length ? siblings.map((depHash: SectionHash) => {
    return <Reference key={depHash} hash={depHash} />;
  }) : null;

  const relatesTo = relatesToList ? (
    <div><span className="italic">Relates to:</span> {relatesToList}</div>
  ) : null;

  return (
    <div className="text-sm">
      {followsFrom}
      {relatesTo}
      {children}
    </div>
  );
}
