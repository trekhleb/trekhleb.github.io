import React from 'react';

export function Divider(): React.ReactElement {
  const margin = '100px';

  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: margin,
    marginBottom: margin,
  };

  const dividerStyle: React.CSSProperties = {
    borderBottom: '2px dotted #ccc',
    flex: 1,
  };

  return <div style={wrapperStyle}><div style={dividerStyle} /></div>;
}
