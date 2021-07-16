import React, { useEffect, useState } from 'react';

import Bits from './Bits';
import {
  Bits as BitsType,
  Bit as BitType,
  bitsToFloat16,
  PrecisionConfig,
  precisionConfigs,
} from './bitsToFloat';
import { exponentColor, fractionColor, signColor } from './constants';
import CalculationStep from './CalculationStep';

type FormulaProps = {
  precision?: PrecisionConfig,
};

const Formula = (props: FormulaProps): React.ReactElement => {
  const { precision = precisionConfigs.half } = props;

  const [bits, setBits] = useState<BitsType>([
    1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0,
  ]);
  const [float16, setFloat16] = useState<number | null>(null);

  useEffect(() => {
    setFloat16(bitsToFloat16(bits));
  }, [bits]);

  const onBitsChange = (updatedBits: BitsType): void => {
    setBits(updatedBits);
    setFloat16(bitsToFloat16(updatedBits));
  };

  const bitsElement = (
    <Bits
      onChange={onBitsChange}
      bits={bits}
      precision={precision}
    />
  );

  const space = (<>&nbsp;</>);

  const sign = (-1) ** bits[0];

  const signElement = float16 ? (
    <CalculationStep color={signColor}>
      <div>sign = -1<sup>{bits[0]}</sup> = {sign}</div>
    </CalculationStep>
  ) : null;

  const exponentBits = bits
    .slice(precision.signBitsCount, precision.signBitsCount + precision.exponentBitsCount);

  const fractionBits = bits.slice(precision.signBitsCount + precision.exponentBitsCount);

  const exponentBias = 2 ** (precision.exponentBitsCount - 1) - 1;

  const exponentOneBitsNum = exponentBits.reduce((bitsTotal: number, bit: BitType) => {
    return bitsTotal + bit;
  }, 0);

  const fractionOneBitsNum = fractionBits.reduce((bitsTotal: number, bit: BitType) => {
    return bitsTotal + bit;
  }, 0);

  const exponentFormula = exponentBits
    .map((bit: BitType, bitIndex: number) => {
      if (!bit) {
        return null;
      }
      return (
        /* eslint-disable-next-line */
        <span key={bitIndex}>
          2<sup>{precision.exponentBitsCount - bitIndex - 1}</sup>
        </span>
      );
    })
    .filter((formulaElement: React.ReactNode | null) => formulaElement !== null)
    .map((formulaElement: React.ReactNode, elementIndex: number) => {
      const plusSign = elementIndex < (exponentOneBitsNum - 1) ? (
        <span>{space}+{space}</span>
      ) : null;
      return (
        /* eslint-disable-next-line */
        <span key={elementIndex}>
          {formulaElement}
          {plusSign}
        </span>
      );
    });

  const fractionFormula = fractionBits
    .map((bit: BitType, bitIndex: number) => {
      if (!bit) {
        return null;
      }
      return (
        /* eslint-disable-next-line */
        <span key={bitIndex}>
          2<sup>{-(bitIndex + 1)}</sup>
        </span>
      );
    })
    .filter((formulaElement: React.ReactNode | null) => formulaElement !== null)
    .map((formulaElement: React.ReactNode, elementIndex: number) => {
      const plusSign = elementIndex < (fractionOneBitsNum - 1) ? (
        <span>{space}+{space}</span>
      ) : null;
      return (
        /* eslint-disable-next-line */
        <span key={elementIndex}>
          {formulaElement}
          {plusSign}
        </span>
      );
    });

  const exponentValue = bits ? exponentBits.reduce(
    (exponent: number, bit: BitType, bitIndex: number) => {
      if (!bit) {
        return exponent;
      }
      return exponent + 2 ** (precision.exponentBitsCount - bitIndex - 1);
    },
    0,
  ) : null;

  const fractionValue = bits ? fractionBits.reduce(
    (fraction: number, bit: BitType, bitIndex: number) => {
      if (!bit) {
        return fraction;
      }
      return fraction + 2 ** (-(bitIndex + 1));
    },
    0,
  ) : null;

  const biasedExponentValue = bits && exponentValue !== null ? exponentValue - exponentBias : null;

  const exponentElement = float16 ? (
    <CalculationStep color={exponentColor}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          { /* eslint-disable-next-line */ }
          bias = 2<sup>k-1</sup> - 1 = 2<sup>{precision.exponentBitsCount}-1</sup> - 1 = {exponentBias}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <div>exponent</div>
          <div>{space}={space}</div>
          {exponentFormula}
          {exponentValue !== 0 ? (<div>{space}={space}</div>) : null}
          {exponentValue}
        </div>
        <div>
          {/* eslint-disable-next-line */}
          biased_exponent = exponent - bias = {exponentValue} - {exponentBias} = {biasedExponentValue}
        </div>
      </div>
    </CalculationStep>
  ) : null;

  const fractionElement = float16 ? (
    <CalculationStep color={fractionColor}>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div>fraction</div>
        <div>{space}={space}</div>
        {fractionFormula}
        {fractionValue !== 0 ? (<div>{space}={space}</div>) : null}
        {fractionValue}
      </div>
    </CalculationStep>
  ) : null;

  const resultElement = float16 ? (
    <>
      <CalculationStep>
        <div>
          result
          {space}={space}
          <span style={{ color: signColor }}>{sign}</span>
          {space}×{space}
          2<sup><span style={{ color: exponentColor }}>{biasedExponentValue}</span></sup>
          {space}×{space}
          (2<sup>0</sup> + <span style={{ color: fractionColor }}>{fractionValue}</span>)
        </div>
      </CalculationStep>
      <CalculationStep fontSize="2rem">
        <div>{float16}</div>
      </CalculationStep>
    </>
  ) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {bitsElement}
      {signElement}
      {exponentElement}
      {fractionElement}
      {resultElement}
    </div>
  );
};

export default Formula;
