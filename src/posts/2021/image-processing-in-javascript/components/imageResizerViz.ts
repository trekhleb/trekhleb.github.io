const normalizeEnergy = (
  energy: number,
  maxEnergy: number,
  maxNormalizedEnergy: number,
): number => {
  return Math.floor((energy / maxEnergy) * maxNormalizedEnergy);
};

const getMaxEnergy = (energyMap: number[][]): number => {
  const height = energyMap.length;
  const width = energyMap[0].length;

  let maxEnergy = 0;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      maxEnergy = Math.max(maxEnergy, energyMap[y][x]);
    }
  }

  return maxEnergy;
};

export const normalizeEnergyMap = (
  energyMap: number[][],
  maxNormalizedEnergy = 255,
): number[][] => {
  const height = energyMap.length;
  const width = energyMap[0].length;

  const maxEnergy = getMaxEnergy(energyMap);

  const normalizedMap = new Array(height)
    .fill(null)
    .map(() => {
      return new Array(width).fill(Infinity);
    });

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      normalizedMap[y][x] = normalizeEnergy(energyMap[y][x], maxEnergy, maxNormalizedEnergy);
    }
  }

  return normalizedMap;
};
