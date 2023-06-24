import React from 'react';

export function Divider(): React.ReactElement {
  return (
    <div className="flex flex-1 items-center justify-center mb-24 mt-24">
      <div className="flex flex-1 border-dotted border-b-2 border-slate-400" />
    </div>
  );
}
