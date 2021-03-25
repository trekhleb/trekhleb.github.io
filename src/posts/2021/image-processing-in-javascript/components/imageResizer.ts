// @see: https://habr.com/ru/post/458110/
// @see: https://avikdas.com/2019/05/14/real-world-dynamic-programming-seam-carving.html
// @see: https://stackoverflow.com/questions/5867723/javascript-image-manipulation-pixel-by-pixel

import { Color, getPixel } from './imageUtils';

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

export const getEnergyMap = (img: ImageData): number[][] => {
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
