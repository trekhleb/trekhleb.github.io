import React from 'react';
import { VscLink } from '@react-icons/all-files/vsc/VscLink';

import { Divider } from './Divider';

type SectionProps = {
  header: React.ReactNode,
  children: React.ReactNode,
  hash: string,
}

export function Section(props: SectionProps): React.ReactElement {
  const {
    children,
    header,
    hash,
  } = props;

  const normalizedHash = hash.trim().toLowerCase().replace(/ /g, '-');

  return (
    <>
      <div className="flex items-start mb-3" id={normalizedHash}>
        <div className="flex bg-black text-xs text-white rounded-md px-2 py-1 font-mono">{hash}</div>
      </div>

      <div className="text-xl mb-8 group">
        {header}
        <a href={`#${normalizedHash}`} aria-label="Link" className="absolute text-black ml-3 mt-1 hidden group-hover:inline-block">
          <VscLink className="text-black" />
        </a>
      </div>

      <div className="text-sm">{children}</div>

      <Divider />
    </>
  );
}
