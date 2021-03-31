import React, { useRef, useState } from 'react';

import {
  EnergyMap as EnergyMapType,
  Seam,
  OnIterationArgs,
  resizeImageWidth,
} from './contentAwareResizer';
import EnergyMap from './EnergyMap';
import Seams from './Seams';

import testImg from '../assets/test.jpg';

type ImageSize = {
  w: number,
  h: number,
};

const ImageResizer = (): React.ReactElement => {
  const [resizedImgSrc, setResizedImgSrc] = useState<string | null>(null);
  const [energyMap, setEnergyMap] = useState<EnergyMapType | null>(null);
  const [imgSize, setImgSize] = useState<ImageSize | null>(null);
  const [seams, setSeams] = useState<Seam[] | null>(null);

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onFinish = (): void => {
    if (!canvasRef.current) {
      return;
    }
    const imageType = 'image/png';
    canvasRef.current.toBlob((blob: Blob | null): void => {
      if (!blob) {
        return;
      }
      const imgUrl = URL.createObjectURL(blob);
      setResizedImgSrc(imgUrl);
    }, imageType);
  };

  const onIteration = async (args: OnIterationArgs): Promise<void> => {
    const {
      seam,
      img,
      energyMap: nrgMap,
      width,
      height,
    } = args;

    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.putImageData(img, 0, 0, 0, 0, width, height);

    setEnergyMap(nrgMap);
    setSeams([seam]);
    setImgSize({
      w: width,
      h: height,
    });
  };

  const onResize = (): void => {
    const srcImg: HTMLImageElement | null = imgRef.current;
    if (!srcImg) {
      return;
    }
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    setResizedImgSrc(null);

    ctx.imageSmoothingEnabled = false;
    canvas.width = srcImg.width;
    canvas.height = srcImg.height;
    ctx.drawImage(srcImg, 0, 0, canvas.width, canvas.height);

    const img: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // Making a square image.
    const toWidth = Math.min(img.width, img.height);
    // const toWidth = img.width - 50;
    resizeImageWidth({ img, toWidth, onIteration }).then(() => {
      onFinish();
    });
  };

  const seamsCanvas = imgSize && seams ? (
    <div style={{ marginTop: `-${imgSize.h}px` }}>
      <Seams seams={seams} width={imgSize.w} height={imgSize.h} />
    </div>
  ) : null;

  const originalImage = (
    <img src={testImg} alt="Test source" ref={imgRef} />
  );

  const debugImage = (
    <div>
      <canvas ref={canvasRef} />
      {seamsCanvas}
    </div>
  );

  const resultImage = resizedImgSrc ? (
    <img src={resizedImgSrc} alt="Resized" />
  ) : null;

  const debugEnergyMap = (
    <div>
      <EnergyMap energyMap={energyMap} />
      {seamsCanvas}
    </div>
  );

  return (
    <>
      <button type="button" onClick={onResize}>Resize</button>
      {originalImage}
      {debugImage}
      {resultImage}
      {debugEnergyMap}
    </>
  );
};

export default ImageResizer;
