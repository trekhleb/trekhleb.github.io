import React from 'react';
import Bit from './Bit';

import {
  Bit as BitType,
  Bits as BitsType,
  PrecisionConfig,
} from './bitsToFloat';
import { exponentColor, fractionColor, signColor } from './constants';

type BitsProps = {
  bits: BitsType,
  precision: PrecisionConfig,
  onChange?: (bits: BitsType) => void,
};

const Bits = (props: BitsProps): React.ReactElement => {
  const { precision, onChange, bits } = props;

  const bitsButtons = bits.map((bit: BitType, bitIndex: number): React.ReactElement => {
    let bitColor = fractionColor;
    if (bitIndex < precision.signBitsCount) {
      bitColor = signColor;
    } else if (bitIndex < (precision.signBitsCount + precision.exponentBitsCount)) {
      bitColor = exponentColor;
    }

    let detached = false;
    if (
      bitIndex === (precision.signBitsCount - 1)
      || bitIndex === (precision.signBitsCount + precision.exponentBitsCount - 1)
    ) {
      detached = true;
    }

    const onClick = (): void => {
      const updatedBits: BitsType = [...bits];
      updatedBits[bitIndex] = updatedBits[bitIndex] ? 0 : 1;
      if (onChange) {
        onChange(updatedBits);
      }
    };

    /* eslint-disable react/no-array-index-key */
    return (
      <Bit
        key={bitIndex}
        bit={bit}
        onClick={onClick}
        color={bitColor}
        detached={detached}
      />
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {bitsButtons}
    </div>
  );
};

export default Bits;
