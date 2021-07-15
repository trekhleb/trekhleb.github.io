export type Bit = 0 | 1;

export type Bits = Bit[];

export type PrecisionConfig = {
  signBitsCount: number,
  exponentBitsCount: number,
  fractionBitsCount: number,
};

type PrecisionConfigs = {
  half: PrecisionConfig,
  single: PrecisionConfig,
  double: PrecisionConfig
};

export const precisionConfigs: PrecisionConfigs = {
  // @see: https://en.wikipedia.org/wiki/Half-precision_floating-point_format
  half: {
    signBitsCount: 1,
    exponentBitsCount: 5,
    fractionBitsCount: 10,
  },
  // @see: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
  single: {
    signBitsCount: 1,
    exponentBitsCount: 8,
    fractionBitsCount: 23,
  },
  // @see: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
  double: {
    signBitsCount: 1,
    exponentBitsCount: 11,
    fractionBitsCount: 52,
  },
};

function bitsToFloat(bits: Bits, precisionConfig: PrecisionConfig): number {
  const { signBitsCount, exponentBitsCount } = precisionConfig;

  // Figuring out the sign.
  const sign = (-1) ** bits[0]; // -1^1 = -1, -1^0 = 1

  // Calculating the exponent value.
  const exponentBias = 2 ** (exponentBitsCount - 1) - 1;
  const exponentBits = bits.slice(signBitsCount, signBitsCount + exponentBitsCount);
  const exponentUnbiased = exponentBits.reduce(
    (exponentSoFar: number, currentBit: Bit, bitIndex: number) => {
      const bitPowerOfTwo = 2 ** (exponentBitsCount - bitIndex - 1);
      return exponentSoFar + currentBit * bitPowerOfTwo;
    },
    0,
  );
  const exponent = exponentUnbiased - exponentBias;

  // Calculating the fraction value.
  const fractionBits = bits.slice(signBitsCount + exponentBitsCount);
  const fraction = fractionBits.reduce(
    (fractionSoFar: number, currentBit: Bit, bitIndex: number) => {
      const bitPowerOfTwo = 2 ** -(bitIndex + 1);
      return fractionSoFar + currentBit * bitPowerOfTwo;
    },
    0,
  );

  // Putting all parts together to calculate the final number.
  return sign * (2 ** exponent) * (1 + fraction);
}

export function bitsToFloat16(bits: Bits): number {
  return bitsToFloat(bits, precisionConfigs.half);
}

export function bitsToFloat32(bits: Bits): number {
  return bitsToFloat(bits, precisionConfigs.single);
}

export function bitsToFloat64(bits: Bits): number {
  return bitsToFloat(bits, precisionConfigs.double);
}
