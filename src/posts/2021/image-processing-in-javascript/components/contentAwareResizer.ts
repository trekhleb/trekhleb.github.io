/* eslint-disable no-await-in-loop */
import {
  Color,
  Coordinate,
  getPixel,
  setPixel,
} from './imageUtils';
import { wait } from '../../../../utils/time';

export type Seam = Coordinate[];
export type EnergyMap = number[][];

type SeamMeta = {
  energy: number,
  coordinate: Coordinate,
  minPreviousCoordinate: Coordinate | null,
};

export type OnIterationArgs = {
  seam: Seam,
  img: ImageData,
  width: number,
  height: number,
  energyMap: EnergyMap,
};

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

  return energyLeft + energyRight;
};

const getEnergyMap = (img: ImageData, width: number, height: number): EnergyMap => {
  const energyMap: number[][] = new Array(height)
    .fill(null)
    .map(() => {
      return new Array(width).fill(Infinity);
    });

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const leftPixel = (x - 1) >= 0 ? getPixel(img, [x - 1, y]) : null;
      const middlePixel = getPixel(img, [x, y]);
      const rightPixel = (x + 1) < width ? getPixel(img, [x + 1, y]) : null;
      energyMap[y][x] = getPixelEnergy(leftPixel, middlePixel, rightPixel);
    }
  }

  return energyMap;
};

const findSeam = (energyMap: EnergyMap): Seam => {
  const width = energyMap[0].length;
  const height = energyMap.length;

  const seamsMap: (SeamMeta | null)[][] = new Array(height)
    .fill(null)
    .map(() => {
      return new Array(width).fill(null);
    });

  // Calculate the seams map.
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
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
          if (i >= 0 && i < width && seamsMap[y - 1][i] !== null) {
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
  const y = height - 1;
  for (let x = 0; x < width; x += 1) {
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

const deleteSeam = (img: ImageData, seam: Seam, width: number, height: number): void => {
  // Shift pixels in a row.
  seam.forEach(([seamX, seamY]: Coordinate) => {
    for (let x = seamX; x < (width - 1); x += 1) {
      const nextPixel = getPixel(img, [x + 1, seamY]);
      setPixel(img, [x, seamY], nextPixel);
    }
  });
};

type ResizeImageWidthArgs = {
  img: ImageData,
  toWidth: number,
  onIteration?: (args: OnIterationArgs) => Promise<void>,
};

export const resizeImageWidth = async (args: ResizeImageWidthArgs): Promise<void> => {
  const {
    img,
    toWidth,
    onIteration = (): Promise<void> => Promise.resolve(),
  } = args;
  console.time('resizeImageWidth');

  const pxToRemove = img.width - toWidth;
  if (pxToRemove < 0) {
    throw new Error('Upsizing is not supported');
  }

  let { width, height } = img;

  for (let i = 0; i < pxToRemove; i += 1) {
    const energyMap: EnergyMap = getEnergyMap(img, width, height);
    const seam: Seam = findSeam(energyMap);
    deleteSeam(img, seam, width, height);

    await onIteration({
      energyMap,
      seam,
      img,
      width,
      height,
    });
    await wait(1);

    width -= 1;
  }

  console.timeEnd('resizeImageWidth');
};
