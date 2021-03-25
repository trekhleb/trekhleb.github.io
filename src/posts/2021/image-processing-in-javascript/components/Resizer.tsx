import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { getEnergyMap } from './imageResizer';
import EnergyMap from './EnergyMap';
import { getPixel, setPixel } from './imageUtils';

import testImg from '../assets/test.jpg';

const Resizer = (): React.ReactElement => {
  const [energyMap, setEnergyMap] = useState<number[][] | null>(null);

  const testImgRef = useRef<HTMLImageElement>(null);
  const resultCanvasRef = useRef<HTMLCanvasElement>(null);

  const processImage = (): void => {
    const image: HTMLImageElement | null = testImgRef.current;
    const resultCanvas: HTMLCanvasElement | null = resultCanvasRef.current;
    if (!resultCanvas || !image) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = resultCanvas.getContext('2d');
    if (!ctx) {
      return;
    }

    resultCanvas.width = image.width;
    resultCanvas.height = image.height;

    ctx.drawImage(image, 0, 0, resultCanvas.width, resultCanvas.height);
    const imgData: ImageData = ctx.getImageData(0, 0, resultCanvas.width, resultCanvas.height);

    const nrgMap = getEnergyMap(imgData);
    setEnergyMap(nrgMap);

    for (let x = 0; x < imgData.width; x += 1) {
      for (let y = 0; y < imgData.height; y += 1) {
        const [r, g, b, a] = getPixel(imgData, [x, y]);
        const avg = (r + g + b) / 3;
        setPixel(imgData, [x, y], [avg, avg, avg, a]);
      }
    }

    ctx.putImageData(imgData, 0, 0);
  };

  const processImageCallback = useCallback(processImage, []);

  useEffect(() => {
    const image: HTMLImageElement | null = testImgRef.current;
    if (!image) {
      return;
    }
    image.addEventListener('load', processImageCallback);
  }, [processImageCallback]);

  return (
    <>
      <img src={testImg} alt="Test source" ref={testImgRef} />
      <EnergyMap energyMap={energyMap} className="mb-3" />
      <canvas ref={resultCanvasRef} style={{ width: '100%' }} />
    </>
  );
};

export default Resizer;
