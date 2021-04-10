// Type that describes the image pixel's RGBA color.
export type Color = [
  r: number, // Red
  g: number, // Green
  b: number, // Blue
  a: number, // Alpha (transparency)
] | Uint8ClampedArray;

export type Coordinate = { x: number, y: number };

export const getPixel = (img: ImageData, { x, y }: Coordinate): Color => {
  const i = y * img.width + x;
  return img.data.subarray(i * 4, i * 4 + 4);
};

export const setPixel = (img: ImageData, { x, y }: Coordinate, color: Color): void => {
  const i = y * img.width + x;
  img.data.set(color, i * 4);
};
