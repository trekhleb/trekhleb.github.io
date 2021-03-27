import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';

import { resizeWidth, EnergyMap as EnergyMapType, OnIterationParams } from './contentAwareResizer';
import EnergyMap from './EnergyMap';

import testImg from '../assets/test.jpg';

const Resizer = (): React.ReactElement => {
  const [energyMap, setEnergyMap] = useState<EnergyMapType | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onResizeIteration = (params: OnIterationParams): void => {
    const {
      iteration,
      img,
      seam,
      energyMap: nrgMap,
    } = params;

    setEnergyMap(nrgMap);

    console.log({
      iteration,
      img,
      seam,
      nrgMap,
    });

    // ctx.putImageData(img, 0, 0);
  };

  const resizeImage = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
  ): void => {
    const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    resizeWidth(imgData, img.width - 1, onResizeIteration);
    // ctx.putImageData(imgData, 0, 0);
  };

  const resizeImageCallback = useCallback(resizeImage, []);

  useEffect(() => {
    const img: HTMLImageElement | null = imgRef.current;
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas || !img) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.addEventListener('load', () => resizeImageCallback(canvas, ctx, img));
  }, [resizeImageCallback]);

  return (
    <>
      <img src={testImg} alt="Test source" ref={imgRef} />
      <EnergyMap energyMap={energyMap} className="mb-3" />
      <canvas ref={canvasRef} style={{ width: '100%' }} />
    </>
  );
};

export default Resizer;
