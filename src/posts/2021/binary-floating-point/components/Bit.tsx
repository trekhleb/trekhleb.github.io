import React, { CSSProperties } from 'react';

import { Bit as BitType } from './bitsToFloat';
import './Bit.css';

type BitProps = {
  bit: BitType,
  color: string,
  onClick: () => void,
  detached?: boolean,
};

const Bit = (props: BitProps): React.ReactElement => {
  const {
    bit,
    onClick,
    color = '#000000',
    detached = false,
  } = props;

  const borderWidth = 1;

  const bitStyle: CSSProperties = {
    fontSize: '2rem',
    fontFamily: 'monospace',
    marginTop: '0px',
    marginRight: detached ? '7px' : '0px',
    marginBottom: '10px',
    marginLeft: `-${borderWidth}px`,
    padding: '0px 7px 0px 7px',
    borderStyle: 'solid',
    borderWidth: `${borderWidth}px`,
    borderColor: color,
    color,
    lineHeight: 'normal',
    outline: '0',
    display: 'block',
    boxSizing: 'border-box',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={bitStyle}
      className="post--2021--binary-floating-point--bit-button"
    >
      {bit}
    </button>
  );
};

export default Bit;
