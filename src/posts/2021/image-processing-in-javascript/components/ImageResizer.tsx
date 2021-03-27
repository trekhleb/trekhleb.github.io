import React, {
  useRef,
  useEffect,
  useState,
} from 'react';

import {
  resizeImageWidth,
  EnergyMap as EnergyMapType,
  OnIterationParams,
  Seam,
} from './contentAwareResizer';
import EnergyMap from './EnergyMap';
import Seams from './Seams';

import testImg from '../assets/test-small.jpg';

type ImageSize = {
  w: number,
  h: number,
};

const ImageResizer = (): React.ReactElement => {
  const [energyMap, setEnergyMap] = useState<EnergyMapType | null>(null);
  const [imgSize, setImgSize] = useState<ImageSize | null>(null);
  const [seams, setSeams] = useState<Seam[] | null>(null);

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
    setSeams([seam]);
    setImgSize({
      w: img.width,
      h: img.height,
    });

    console.log({
      iteration,
      img,
      seam,
      nrgMap,
    });

    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.putImageData(img, 0, 0);
  };

  const onResizeDone = (params: OnIterationParams): void => {

  };

  useEffect(() => {
    // Get canvas and image references.
    const img: HTMLImageElement | null = imgRef.current;
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas || !img) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    img.addEventListener('load', () => {
      // Initial draw on the canvas.
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Launch the resizing loop on image load event.
      resizeImageWidth({
        img: imgData,
        toWidth: img.width - 1,
        onIteration: onResizeIteration,
        onDone: onResizeDone,
      });
    });
  }, []);

  const seamsCanvas = imgSize && seams ? (
    <div style={{ marginTop: `-${imgSize.h}px` }}>
      <Seams seams={seams} width={imgSize.w} height={imgSize.h} />
    </div>
  ) : null;

  return (
    <>
      <img src={testImg} alt="Test source" ref={imgRef} className="hidden" />
      <canvas ref={canvasRef} className="mb-3" />
      <EnergyMap energyMap={energyMap} />
      {seamsCanvas}
    </>
  );
};

export default ImageResizer;
