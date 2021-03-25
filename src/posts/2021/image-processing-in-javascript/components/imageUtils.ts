export type Color = [r: number, g: number, b: number, a: number];

export type Coordinate = [x: number, y: number];

const xyToIndex = ([x, y]: Coordinate, width: number): number => {
  return y * width + x;
};

const getPixelByIndex = (img: ImageData, index: number): Color => {
  const i = index * 4;
  const d = img.data;
  return [d[i], d[i + 1], d[i + 2], d[i + 3]];
};

const setPixelByIndex = (img: ImageData, index: number, color: Color): void => {
  const i = index * 4;
  const d = img.data;
  const [r, g, b, a] = color;
  d[i] = r;
  d[i + 1] = g;
  d[i + 2] = b;
  d[i + 3] = a;
};

export const getPixel = (img: ImageData, xy: Coordinate): Color => {
  return getPixelByIndex(img, xyToIndex(xy, img.width));
};

export const setPixel = (img: ImageData, xy: Coordinate, color: Color): void => {
  setPixelByIndex(img, xyToIndex(xy, img.width), color);
};
