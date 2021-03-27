// @see: https://habr.com/ru/post/458110/
// @see: https://avikdas.com/2019/05/14/real-world-dynamic-programming-seam-carving.html
// @see: https://stackoverflow.com/questions/5867723/javascript-image-manipulation-pixel-by-pixel

import { Color, getPixel, Coordinate } from './imageUtils';

export type Seam = Coordinate[][];
export type EnergyMap = number[][];

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
  for (let iteration = 0; iteration < (width - toWidth); iteration += 1) {
    const energyMap: EnergyMap = getEnergyMap(img);
    const seam: Seam = findSeam(img, energyMap);
    deleteSeam(img, seam);
    if (onIteration) {
      onIteration({
        iteration,
        img,
        energyMap,
        seam,
      });
    }
  }
};
