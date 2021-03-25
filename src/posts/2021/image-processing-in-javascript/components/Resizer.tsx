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

  const testImgRef = useRef<HTMLImageElement>(null);
  const resultCanvasRef = useRef<HTMLCanvasElement>(null);

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
  };

  const resizeImage = (): void => {
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

    resizeWidth(imgData, image.width - 1, onResizeIteration);

    ctx.putImageData(imgData, 0, 0);
  };

  const resizeImageCallback = useCallback(resizeImage, []);

  useEffect(() => {
    const image: HTMLImageElement | null = testImgRef.current;
    if (!image) {
      return;
    }
    image.addEventListener('load', resizeImageCallback);
  }, [resizeImageCallback]);

  return (
    <>
      <img src={testImg} alt="Test source" ref={testImgRef} />
      <EnergyMap energyMap={energyMap} className="mb-3" />
      <canvas ref={resultCanvasRef} style={{ width: '100%' }} />
    </>
  );
};

export default Resizer;
