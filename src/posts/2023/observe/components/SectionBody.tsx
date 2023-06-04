import React from 'react';
import { SectionContext } from './Section';
import { SectionHash } from '../types/section';
import { Reference } from './Reference';

type SectionBodyProps = {
  children: React.ReactNode,
}

export function SectionBody(props: SectionBodyProps): React.ReactElement {
  const { children } = props;

  const { deps = [] } = React.useContext(SectionContext);

  const followsFromList = deps.length ? deps.map((depHash: SectionHash) => {
    return <Reference key={depHash} hash={depHash} />;
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
