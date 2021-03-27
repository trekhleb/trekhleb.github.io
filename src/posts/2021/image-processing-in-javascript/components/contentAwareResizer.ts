// @see: https://habr.com/ru/post/458110/
// @see: https://avikdas.com/2019/05/14/real-world-dynamic-programming-seam-carving.html
// @see: https://stackoverflow.com/questions/5867723/javascript-image-manipulation-pixel-by-pixel

import { Color, getPixel, Coordinate } from './imageUtils';

export type Seam = Coordinate[];
export type EnergyMap = number[][];

type SeamMeta = {
  energy: number,
  coordinate: Coordinate,
  minPreviousCoordinate: Coordinate | null,
};

export type OnIterationParams = {
  iteration: number,
  img: ImageData,
  energyMap: EnergyMap,
  seam: Seam,
};
export type OnIteration = (params: OnIterationParams) => void;
export type OnDone = (params: OnIterationParams) => void;

const getPixelEnergy = (
  leftPixel: Color | null,
  middlePixel: Color,
  rightPixel: Color | null,
): number => {
  const [mR, mG, mB] = middlePixel;

  let energyLeft = 0;
  if (leftPixel) {
    const [lR, lG, lB] = leftPixel;
    energyLeft = (lR - mR) ** 2 + (lG - mG) ** 2 + (lB - mB) ** 2;
  }

  let energyRight = 0;
  if (rightPixel) {
    const [rR, rG, rB] = rightPixel;
    energyRight = (rR - mR) ** 2 + (rG - mG) ** 2 + (rB - mB) ** 2;
  }

  return Math.sqrt(energyLeft + energyRight);
};

const getEnergyMap = (img: ImageData): EnergyMap => {
  const energyMap: number[][] = new Array(img.height)
    .fill(null)
    .map(() => {
      return new Array(img.width).fill(Infinity);
    });

  for (let y = 0; y < img.height; y += 1) {
    for (let x = 0; x < img.width; x += 1) {
      const leftPixel = (x - 1) >= 0 ? getPixel(img, [x - 1, y]) : null;
      const middlePixel = getPixel(img, [x, y]);
      const rightPixel = (x + 1) < img.width ? getPixel(img, [x + 1, y]) : null;
      energyMap[y][x] = getPixelEnergy(leftPixel, middlePixel, rightPixel);
    }
  }

  return energyMap;
};

const findSeam = (img: ImageData, energyMap: EnergyMap): Seam => {
  const seamsMap: (SeamMeta | null)[][] = new Array(img.height)
    .fill(null)
    .map(() => {
      return new Array(img.width).fill(null);
    });

  // Calculate the seams map.
  for (let y = 0; y < img.height; y += 1) {
    for (let x = 0; x < img.width; x += 1) {
      if (y === 0) {
        // First row.
        seamsMap[y][x] = {
          energy: energyMap[y][x],
          coordinate: [x, y],
          minPreviousCoordinate: null,
        };
      } else {
        // Non-first rows.

        // Find top adjacent cell with minimum energy.
        let minPrevEnergy = Infinity;
        let minPrevX: number = x;
        for (let i = (x - 1); i <= (x + 1); i += 1) {
          if (i >= 0 && i < img.width && seamsMap[y - 1][i] !== null) {
            if (seamsMap[y - 1][i].energy < minPrevEnergy) {
              minPrevEnergy = seamsMap[y - 1][i].energy;
              minPrevX = i;
            }
          }
        }

        // Update the current cell.
        seamsMap[y][x] = {
          energy: minPrevEnergy + energyMap[y][x],
          coordinate: [x, y],
          minPreviousCoordinate: [minPrevX, y - 1],
        };
      }
    }
  }

  // Find where the minimum energy seam ends.
  let lastMinCoordinate: Coordinate | null = null;
  let minSeamEnergy = Infinity;
  const y = img.height - 1;
  for (let x = 0; x < img.width; x += 1) {
    if (seamsMap[y][x].energy < minSeamEnergy) {
      minSeamEnergy = seamsMap[y][x].energy;
      lastMinCoordinate = [x, y];
    }
  }

  // Find the minimal energy seam.
  const seam: Seam = [];
  if (!lastMinCoordinate) {
    return seam;
  }

  const lastMinX: number = lastMinCoordinate[0];
  const lastMinY: number = lastMinCoordinate[1];
  let currentSeam = seamsMap[lastMinY][lastMinX];
  while (currentSeam) {
    seam.push(currentSeam.coordinate);
    const prevMinCoordinates = currentSeam.minPreviousCoordinate;
    if (!prevMinCoordinates) {
      currentSeam = null;
    } else {
      const prevMinX: number = prevMinCoordinates[0];
      const prevMinY: number = prevMinCoordinates[1];
      currentSeam = seamsMap[prevMinY][prevMinX];
    }
  }

  return seam;
};

const deleteSeam = (img: ImageData, seam: Seam): void => {
};

type ResizeImageWidthProps = {
  img: ImageData,
  toWidth: number,
  onIteration?: OnIteration,
  onDone?: OnDone,
};

export const resizeImageWidth = (props: ResizeImageWidthProps): void => {
  const {
    img,
    toWidth,
    onIteration,
    onDone,
  } = props;
  const { width } = img;
  if (toWidth >= width) {
    throw new Error('Upsizing is not supported');
  }
  const iterationsNum = width - toWidth;
  for (let iteration = 0; iteration < iterationsNum; iteration += 1) {
    const energyMap: EnergyMap = getEnergyMap(img);
    const seam: Seam = findSeam(img, energyMap);
    deleteSeam(img, seam);
    const callbackParams: OnIterationParams = {
      iteration,
      img,
      energyMap,
      seam,
    };
    if (onIteration) {
      onIteration(callbackParams);
    }
    if (onDone && iteration === (iterationsNum - 1)) {
      onDone(callbackParams);
    }
  }
};
