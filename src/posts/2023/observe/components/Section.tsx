import React from 'react';
import { Divider } from './Divider';
import { ContentType } from '../types/content';

type SectionProps = {
  type: ContentType,
  header: React.ReactNode,
  children: React.ReactNode,
}

export function Section(props: SectionProps): React.ReactElement {
  const { children, type, header } = props;

  return (
    <>
      <div className="flex items-start">
        <div className="flex bg-black text-xs text-white rounded-md px-2 py-1 mb-2 font-mono">{type}</div>
      </div>
      <div className="text-xl mb-8">{header}</div>
      <div className="text-sm">{children}</div>
      <Divider />
    </>
  );
}
