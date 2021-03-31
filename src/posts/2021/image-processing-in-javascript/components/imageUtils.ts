export type Color = [r: number, g: number, b: number, a: number] | Uint8ClampedArray;

export type Coordinate = [x: number, y: number];

const xyToIndex = ([x, y]: Coordinate, imgWidth: number): number => {
  return y * imgWidth + x;
};

export const getPixel = (imgData: ImageData, xy: Coordinate): Color => {
  const index = xyToIndex(xy, imgData.width);
  return imgData.data.subarray(index * 4, index * 4 + 4);
};

export const setPixel = (imgData: ImageData, xy: Coordinate, color: Color): void => {
  const index = xyToIndex(xy, imgData.width);
  imgData.data.set(color, index * 4);
};
