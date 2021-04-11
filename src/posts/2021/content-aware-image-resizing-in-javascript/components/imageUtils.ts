// Type that describes the image pixel's RGBA color.
export type Color = [
  r: number, // Red
  g: number, // Green
  b: number, // Blue
  a: number, // Alpha (transparency)
] | Uint8ClampedArray;

// The coordinate of the pixel.
export type Coordinate = { x: number, y: number };

// Helper function that returns the color of the pixel.
export const getPixel = (img: ImageData, { x, y }: Coordinate): Color => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  // For better efficiency, instead of creating a new sub-array we return
  // a pointer to the part of the ImageData array.
  return img.data.subarray(i * cellsPerColor, i * cellsPerColor + cellsPerColor);
};

// Helper function that sets the color of the pixel.
export const setPixel = (img: ImageData, { x, y }: Coordinate, color: Color): void => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  img.data.set(color, i * cellsPerColor);
};
