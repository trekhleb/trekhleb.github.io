import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';

import {
  resizeImageWidthByPixel,
  EnergyMap as EnergyMapType,
  Seam,
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
  const [startTime, setStartTime] = useState<number | null>(null);
  const [runTime, setRunTime] = useState<number | null>(null);
  const [iteration, setIteration] = useState<number>(0);

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

  const onResizeIteration = (): void => {
    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    const imgData: ImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const { seam, energyMap: nrgMap } = resizeImageWidthByPixel(imgData);

    canvas.width = imgData.width - 1;
    canvas.height = imgData.height;
    ctx.putImageData(imgData, 0, 0, 0, 0, imgData.width - 1, imgData.height);

    setEnergyMap(nrgMap);
    setSeams([seam]);
    setImgSize({
      w: imgData.width,
      h: imgData.height,
    });

    if ((iteration - 1) === 0) {
      onFinish();
    }

    setIteration(iteration - 1);
  };

  const onResizeIterationCallback = useCallback(onResizeIteration, [onResizeIteration]);

  const onResize = (): void => {
    const img: HTMLImageElement | null = imgRef.current;
    if (!img) {
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
    ctx.imageSmoothingEnabled = false;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Making a square image.
    const toWidth = Math.min(img.width, img.height);
    const numIterationsNeeded = canvas.width - toWidth;
    setIteration(numIterationsNeeded);
    setStartTime(Date.now());
  };

  // useEffect(() => {
  //   const img: HTMLImageElement | null = imgRef.current;
  //   if (!img) {
  //     return;
  //   }
  //   img.addEventListener('load', onResizeCallback);
  // }, [onResizeCallback]);

  useEffect(() => {
    if (!iteration) {
      return;
    }
    if (startTime) {
      setRunTime((Date.now() - startTime) / 1000);
    }
    onResizeIterationCallback();
  }, [iteration, onResizeIterationCallback]);

  const seamsCanvas = imgSize && seams ? (
    <div style={{ marginTop: `-${imgSize.h}px` }}>
      <Seams seams={seams} width={imgSize.w} height={imgSize.h} />
    </div>
  ) : null;

  const timer = runTime ? (
    <div>
      {runTime ? `Runtime: ${runTime}s` : null}
    </div>
  ) : null;

  const resultImage = resizedImgSrc ? (
    <img src={resizedImgSrc} alt="Resized" />
  ) : null;

  return (
    <div>
      <img src={testImg} alt="Test source" ref={imgRef} />
      <button type="button" onClick={onResize}>Resize</button>
      <canvas ref={canvasRef} className="mb-3" />
      <EnergyMap energyMap={energyMap} />
      {seamsCanvas}
      {timer}
      {resultImage}
    </div>
  );
};

export default ImageResizer;
