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

  const followsFromList = deps?.length ? deps.map((depHash: SectionHash) => {
    return (
      <div className="mr-2 mb-2" key={depHash}>
        <Reference hash={depHash} />
      </div>
    );
  }) : null;

  const followsFrom = followsFromList ? (
    <div className="flex flex-wrap">
      <div className="italic mr-2 mb-2">Follows from:</div>
      {followsFromList}
    </div>
  ) : null;

  const relatesToList = siblings?.length ? siblings.map((depHash: SectionHash) => {
    return (
      <div className="mr-2 mb-2" key={depHash}>
        <Reference hash={depHash} />
      </div>
    );
  }) : null;

  const relatesTo = relatesToList ? (
    <div className="flex flex-wrap">
      <div className="italic mr-2 mb-2">Relates to:</div>
      {relatesToList}
    </div>
  ) : null;

  return (
    <div className="text-sm pb-4">
      {followsFrom}
      {relatesTo}
      {children}
    </div>
  );
}
