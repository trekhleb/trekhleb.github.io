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
  previous: Coordinate | null,
};

export type ImageSize = { w: number, h: number };

export type OnIterationArgs = {
  seam: Seam,
  img: ImageData,
  size: ImageSize,
  energyMap: EnergyMap,
};

const matrix = <T>(w: number, h: number, filler: T): T[][] => {
  return new Array(h)
    .fill(null)
    .map(() => {
      return new Array(w).fill(filler);
    });
};

const getPixelEnergy = (left: Color | null, middle: Color, right: Color | null): number => {
  const [mR, mG, mB] = middle;

  let lEnergy = 0;
  if (left) {
    const [lR, lG, lB] = left;
    lEnergy = (lR - mR) ** 2 + (lG - mG) ** 2 + (lB - mB) ** 2;
  }

  let rEnergy = 0;
  if (right) {
    const [rR, rG, rB] = right;
    rEnergy = (rR - mR) ** 2 + (rG - mG) ** 2 + (rB - mB) ** 2;
  }

  return lEnergy + rEnergy;
};

const calculateEnergyMap = (img: ImageData, { w, h }: ImageSize): EnergyMap => {
  const energyMap: number[][] = matrix<number>(w, h, Infinity);

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const left = (x - 1) >= 0 ? getPixel(img, [x - 1, y]) : null;
      const middle = getPixel(img, [x, y]);
      const right = (x + 1) < w ? getPixel(img, [x + 1, y]) : null;
      energyMap[y][x] = getPixelEnergy(left, middle, right);
    }
  }

  return energyMap;
};

const findLowEnergySeam = (energyMap: EnergyMap): Seam => {
  const w = energyMap[0].length;
  const h = energyMap.length;

  const seamsMap: (SeamMeta | null)[][] = matrix<SeamMeta | null>(w, h, null);

  // Populate the first row of the map.
  for (let x = 0; x < w; x += 1) {
    const y = 0;
    seamsMap[y][x] = {
      energy: energyMap[y][x],
      coordinate: [x, y],
      previous: null,
    };
  }

  // Populate the rest of the rows.
  for (let y = 1; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      // Find top adjacent cell with minimum energy.
      let minPrevEnergy = Infinity;
      let minPrevX: number = x;
      for (let i = (x - 1); i <= (x + 1); i += 1) {
        if (i >= 0 && i < w && seamsMap[y - 1][i].energy < minPrevEnergy) {
          minPrevEnergy = seamsMap[y - 1][i].energy;
          minPrevX = i;
        }
      }

      // Update the current cell.
      seamsMap[y][x] = {
        energy: minPrevEnergy + energyMap[y][x],
        coordinate: [x, y],
        previous: [minPrevX, y - 1],
      };
    }
  }

  // Find where the minimum energy seam ends.
  let lastMinCoordinate: Coordinate | null = null;
  let minSeamEnergy = Infinity;
  for (let x = 0; x < w; x += 1) {
    const y = h - 1;
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
    const prevMinCoordinates = currentSeam.previous;
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

const deleteSeam = (img: ImageData, seam: Seam, { w }: ImageSize): void => {
  seam.forEach(([seamX, seamY]: Coordinate) => {
    for (let x = seamX; x < (w - 1); x += 1) {
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

  const size: ImageSize = { w: img.width, h: img.height };

  for (let i = 0; i < pxToRemove; i += 1) {
    const energyMap: EnergyMap = calculateEnergyMap(img, size);
    const seam: Seam = findLowEnergySeam(energyMap);
    deleteSeam(img, seam, size);

    await onIteration({ energyMap, seam, img, size });

    size.w -= 1;

    await wait(1);
  }

  console.timeEnd('resizeImageWidth');
};
