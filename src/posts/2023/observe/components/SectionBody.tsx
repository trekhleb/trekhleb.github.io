import React from 'react';
import { TiFlowParallel } from '@react-icons/all-files/ti/TiFlowParallel';
import { TiFlowMerge } from '@react-icons/all-files/ti/TiFlowMerge';

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
    <div className="flex flex-wrap mt-4">
      <div className="flex justify-items-center items-center">
        <div className="mr-1 mb-2"><TiFlowMerge /></div>
        <div className="italic mr-2 mb-2">Follows from:</div>
      </div>
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
    <div className="flex flex-wrap mt-4">
      <div className="flex justify-items-center items-center">
        <div className="mr-1 mb-2"><TiFlowParallel /></div>
        <div className="italic mr-2 mb-2">Relates to:</div>
      </div>
      {relatesToList}
    </div>
  ) : null;

  return (
    <div className="text-sm">
      {followsFrom}
      {relatesTo}
      {children}
    </div>
  );
}
