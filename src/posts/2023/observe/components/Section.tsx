import React from 'react';
import { Divider } from './Divider';

type SectionProps = {
  children: React.ReactNode
}

export function Section(props: SectionProps): React.ReactElement {
  const { children } = props;

  const sectionStyle: React.CSSProperties = {};

  return (
    <>
      <div style={sectionStyle}>{children}</div>
      <Divider />
    </>
  );
}
