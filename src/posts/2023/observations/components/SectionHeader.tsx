import React from 'react';
import { VscLink } from '@react-icons/all-files/vsc/VscLink';

import { getHashClasses, normalizeHash } from '../utils/hash';
import { SectionContext } from '../contexts/section';

type SectionHeaderProps = {
  children: React.ReactNode,
}

export function SectionHeader(props: SectionHeaderProps): React.ReactElement {
  const { children } = props;

  const { hash } = React.useContext(SectionContext);

  const normalizedHash = normalizeHash(hash);

  const tagColorClass = getHashClasses(hash);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-start mb-4 pt-4" id={normalizedHash}>
        <div className={`flex text-xs rounded-md px-2 py-1 font-mono font-medium ${tagColorClass}`}>
          {hash}
        </div>
      </div>

      <div
        className="text-xl group [&>p]:m-0 [&>p]:inline [&>h2]:inline [&>h2>a]:overflow-hidden [&>h2>a]:hidden [&>h2>a]:invisible [&>h2>a]:w-0 [&>h2>a]:h-0 [&>h2>a]:opacity-0 not-prose"
      >
        {children}
        <a
          href={`#${normalizedHash}`}
          aria-label="Link"
          className="absolute text-black ml-0 mt-1 hidden group-hover:inline-block"
        >
          <VscLink className="text-black" />
        </a>
      </div>
    </div>
  );
}
