/* eslint-disable no-await-in-loop, no-param-reassign, object-curly-newline */
import {
  Color,
  Coordinate,
  getPixel,
  setPixel,
} from './imageUtils';
import { wait } from '../../../../utils/time';

export type Seam = Coordinate[];

// Energy map is a 2D array that has the same width and height
// as the image the map is being calculated for.
export type EnergyMap = number[][];

type SeamMeta = {
  energy: number,
  coordinate: Coordinate,
  previous: Coordinate | null,
};

// Type that describes the image size (width and height)
export type ImageSize = { w: number, h: number };

export type OnIterationArgs = {
  seam: Seam,
  img: ImageData,
  size: ImageSize,
  energyMap: EnergyMap,
  step: number,
  steps: number,
};

// Helper function that creates a matrix (2D array) of specific
// size (w x h) and fills it with specified value.
const matrix = <T>(w: number, h: number, filler: T): T[][] => {
  return new Array(h)
    .fill(null)
    .map(() => {
      return new Array(w).fill(filler);
    });
};

// Calculates the energy of a pixel.
const getPixelEnergy = (left: Color | null, middle: Color, right: Color | null): number => {
  // Middle pixel is the pixel we're calculating the energy for.
  const [mR, mG, mB] = middle;

  // Energy from the left pixel (if it exists).
  let lEnergy = 0;
  if (left) {
    const [lR, lG, lB] = left;
    lEnergy = (lR - mR) ** 2 + (lG - mG) ** 2 + (lB - mB) ** 2;
  }

  // Energy from the right pixel (if it exists).
  let rEnergy = 0;
  if (right) {
    const [rR, rG, rB] = right;
    rEnergy = (rR - mR) ** 2 + (rG - mG) ** 2 + (rB - mB) ** 2;
  }

  // Resulting pixel energy.
  return lEnergy + rEnergy;
};

// Calculates the energy of each pixel of the image.
const calculateEnergyMap = (img: ImageData, { w, h }: ImageSize): EnergyMap => {
  // Create an empty energy map where each pixel has infinitely high energy.
  // We will update the energy of each pixel.
  const energyMap: number[][] = matrix<number>(w, h, Infinity);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      // Left pixel might not exist if we're on the very left edge of the image.
      const left = (x - 1) >= 0 ? getPixel(img, { x: x - 1, y }) : null;
      // The color of the middle pixel that we're calculating the energy for.
      const middle = getPixel(img, { x, y });
      // Right pixel might not exist if we're on the very right edge of the image.
      const right = (x + 1) < w ? getPixel(img, { x: x + 1, y }) : null;
      energyMap[y][x] = getPixelEnergy(left, middle, right);
    }
  }
  return energyMap;
};

const findLowEnergySeam = (energyMap: EnergyMap, { w, h }: ImageSize): Seam => {
  const seamsMap: (SeamMeta | null)[][] = matrix<SeamMeta | null>(w, h, null);

  // Populate the first row of the map.
  for (let x = 0; x < w; x += 1) {
    const y = 0;
    seamsMap[y][x] = {
      energy: energyMap[y][x],
      coordinate: { x, y },
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
        // @ts-ignore
        if (i >= 0 && i < w && seamsMap[y - 1][i].energy < minPrevEnergy) {
          // @ts-ignore
          minPrevEnergy = seamsMap[y - 1][i].energy;
          minPrevX = i;
        }
      }

      // Update the current cell.
      seamsMap[y][x] = {
        energy: minPrevEnergy + energyMap[y][x],
        coordinate: { x, y },
        previous: { x: minPrevX, y: y - 1 },
      };
    }
  }

  // Find where the minimum energy seam ends.
  let lastMinCoordinate: Coordinate | null = null;
  let minSeamEnergy = Infinity;
  for (let x = 0; x < w; x += 1) {
    const y = h - 1;
    // @ts-ignore
    if (seamsMap[y][x].energy < minSeamEnergy) {
      // @ts-ignore
      minSeamEnergy = seamsMap[y][x].energy;
      lastMinCoordinate = { x, y };
    }
  }

  // Find the minimal energy seam.
  const seam: Seam = [];
  if (!lastMinCoordinate) {
    return seam;
  }

  const { x: lastMinX, y: lastMinY } = lastMinCoordinate;

  let currentSeam = seamsMap[lastMinY][lastMinX];
  while (currentSeam) {
    seam.push(currentSeam.coordinate);
    const prevMinCoordinates = currentSeam.previous;
    if (!prevMinCoordinates) {
      currentSeam = null;
    } else {
      const { x: prevMinX, y: prevMinY } = prevMinCoordinates;
      currentSeam = seamsMap[prevMinY][prevMinX];
    }
  }

  return seam;
};

const deleteSeam = (img: ImageData, seam: Seam, { w }: ImageSize): void => {
  seam.forEach(({ x: seamX, y: seamY }: Coordinate) => {
    for (let x = seamX; x < (w - 1); x += 1) {
      const nextPixel = getPixel(img, { x: x + 1, y: seamY });
      setPixel(img, { x, y: seamY }, nextPixel);
    }
  });
};

type ResizeAxisArgs = {
  img: ImageData,
  toWidth: number,
  onIteration?: (args: OnIterationArgs) => Promise<void>,
};

export const resizeImageWidth = async (args: ResizeAxisArgs): Promise<void> => {
  const { img, toWidth, onIteration } = args;

  const size: ImageSize = { w: img.width, h: img.height };

  const pxToRemove = img.width - toWidth;
  if (pxToRemove < 0) {
    throw new Error('Upsizing is not supported');
  }

  let energyMap: EnergyMap | null = null;
  let seam: Seam | null = null;

  for (let i = 0; i < pxToRemove; i += 1) {
    energyMap = calculateEnergyMap(img, size);

    seam = findLowEnergySeam(energyMap, size);

    deleteSeam(img, seam, size);

    if (onIteration) {
      await onIteration({
        energyMap,
        seam,
        img,
        size,
        step: i,
        steps: pxToRemove,
      });
    }

    size.w -= 1;

    await wait(1);
  }
};
