import React from 'react';

type CalculationStepProps = {
  children: React.ReactElement,
  fontSize?: string,
  color?: string,
};

export default function CalculationStep(props: CalculationStepProps): React.ReactElement {
  const { children, fontSize = '1em', color = 'black' } = props;

  const arrow = (
    <div
      style={{
        fontSize: '2rem',
        fontFamily: 'monospace',
        color,
      }}
    >
      ↓
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        fontFamily: 'monospace',
      }}
    >
      {arrow}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          fontSize,
          color,
        }}
      >
        {children}
      </div>
    </div>
  );
}
