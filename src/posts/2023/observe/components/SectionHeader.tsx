import React from 'react';
import { VscLink } from '@react-icons/all-files/vsc/VscLink';
import { SectionContext } from './Section';
import { getHashColor } from '../utils/hash';

type SectionHeaderProps = {
  children: React.ReactNode,
}

export function SectionHeader(props: SectionHeaderProps): React.ReactElement {
  const { children } = props;

  const ctx = React.useContext(SectionContext);

  const tagColorClass = getHashColor(ctx.hash);

  return (
    <div className="flex-1">
      <div className="flex items-start mb-3" id={ctx.normalizedHash}>
        <div className={`flex text-xs rounded-md px-2 py-1 font-mono font-medium ${tagColorClass}`}>
          {ctx.hash}
        </div>
      </div>

      <div className="text-xl mb-6 group [&>p]:m-0 [&>p]:inline">
        {children}
        <a
          href={`#${ctx.normalizedHash}`}
          aria-label="Link"
          className="absolute text-black ml-3 mt-1 hidden group-hover:inline-block"
        >
          <VscLink className="text-black" />
        </a>
      </div>
    </div>
  );
}
