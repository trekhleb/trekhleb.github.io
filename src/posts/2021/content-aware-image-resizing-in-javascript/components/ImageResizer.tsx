import React, { useEffect, useRef, useState } from 'react';
import { ImShrink2 } from '@react-icons/all-files/im/ImShrink2';

import {
  EnergyMap as EnergyMapType,
  Seam,
  OnIterationArgs,
  resizeImageWidth,
  ImageSize,
} from './contentAwareResizer';
import EnergyMap from './EnergyMap';
import Seams from './Seams';
import defaultImgSrc from '../assets/02-default-test-image.jpg';
import Button from '../../../../components/shared/Button';
import FileSelector from './FileSelector';
import Checkbox from '../../../../components/shared/Checkbox';
import Progress from '../../../../components/shared/Progress';
import Input from '../../../../components/shared/Input';

const defaultScale = 60;
const minScale = 1;
const maxScale = 99;

const maxWidthLimit = 1000;

type ImageResizerProps = {
  withSeam?: boolean,
  withEnergyMap?: boolean,
};

const ImageResizer = (props: ImageResizerProps): React.ReactElement => {
  const {
    withSeam = false,
    withEnergyMap = false,
  } = props;

  const [useNaturalSize, setUseNaturalSize] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string>(defaultImgSrc);
  const [resizedImgSrc, setResizedImgSrc] = useState<string | null>(null);
  const [energyMap, setEnergyMap] = useState<EnergyMapType | null>(null);
  const [originalImgSize, setOriginalImgSize] = useState<ImageSize | null>(null);
  const [originalImgViewSize, setOriginalImgViewSize] = useState<ImageSize | null>(null);
  const [workingImgSize, setWorkingImgSize] = useState<ImageSize | null>(null);
  const [seams, setSeams] = useState<Seam[] | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [toWidthScale, setToWidthScale] = useState<number>(defaultScale);
  const [toWidthScaleString, setToWidthScaleString] = useState<string | null | undefined>(`${defaultScale}`);

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onUseOriginalSizeChange = (state: boolean): void => {
    setUseNaturalSize(state);
  };

  const onReset = (): void => {
    setResizedImgSrc(null);
    setSeams(null);
    setWorkingImgSize(null);
    setEnergyMap(null);
    setProgress(0);
    setOriginalImgViewSize(null);
  };

  const onFileSelect = (files: FileList | null): void => {
    if (!files || !files.length) {
      return;
    }
    onReset();
    const imageURL = URL.createObjectURL(files[0]);
    setImageSrc(imageURL);
  };

  const onSizeChange = (size: string | null | undefined): void => {
    const radix = 10;
    const scale = Math.max(Math.min(parseInt(size || '0', radix), maxScale), minScale);

    if (size) {
      setToWidthScaleString(`${scale}`);
    } else {
      setToWidthScaleString(size);
    }

    setToWidthScale(scale);
  };

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
      setIsResizing(false);
    }, imageType);
  };

  const onIteration = async (args: OnIterationArgs): Promise<void> => {
    const {
      seam,
      img,
      energyMap: nrgMap,
      size: { w, h },
      step,
      steps,
    } = args;

    const canvas: HTMLCanvasElement | null = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.width = w;
    canvas.height = h;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.putImageData(img, 0, 0, 0, 0, w, h);

    setEnergyMap(nrgMap);
    setSeams([seam]);
    setWorkingImgSize({ w, h });
    setProgress(step / steps);
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

    onReset();
    setIsResizing(true);

    let w = useNaturalSize ? srcImg.naturalWidth : srcImg.width;
    let h = useNaturalSize ? srcImg.naturalHeight : srcImg.height;
    const ratio = w / h;

    setOriginalImgViewSize({
      w: srcImg.width,
      h: srcImg.height,
    });

    if (w > maxWidthLimit) {
      w = maxWidthLimit;
      h = Math.floor(w / ratio);
    }

    canvas.width = w;
    canvas.height = h;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.drawImage(srcImg, 0, 0, w, h);

    const img: ImageData = ctx.getImageData(0, 0, w, h);

    const toWidth = Math.floor((toWidthScale * w) / 100);
    resizeImageWidth({ img, toWidth, onIteration }).then(() => {
      onFinish();
    });
  };

  useEffect(() => {
    const srcImg: HTMLImageElement | null = imgRef.current;
    if (!srcImg) {
      return;
    }
    srcImg.addEventListener('load', () => {
      if (!imgRef.current) {
        return;
      }
      setOriginalImgSize({
        w: imgRef.current.naturalWidth,
        h: imgRef.current.naturalHeight,
      });
    });
  }, []);

  const seamsCanvas = withSeam && workingImgSize && seams ? (
    <div style={{ marginTop: `-${workingImgSize.h}px` }}>
      <Seams seams={seams} width={workingImgSize.w} height={workingImgSize.h} />
    </div>
  ) : null;

  const originalImageSizeText = originalImgSize ? (
    <sup className="text-xs text-gray-400">
      {`${originalImgSize.w} x ${originalImgSize.h} px`}
    </sup>
  ) : null;

  const originalImage = (
    <div>
      <div><b>Original image</b> {originalImageSizeText}</div>
      <img src={imageSrc} alt="Original" ref={imgRef} style={{ margin: 0 }} />
    </div>
  );

  const workingImageScrollableText = (
    workingImgSize?.w && originalImgViewSize?.w && workingImgSize.w > originalImgViewSize.w
  ) ? <span className="text-xs text-gray-400 ml-4">↔︎ scrollable</span> : null;

  const workingImageSizeText = workingImgSize ? (
    <sup className="text-xs text-gray-400">
      {`${workingImgSize.w} x ${workingImgSize.h} px`}
    </sup>
  ) : null;

  const workingImage = (
    <div className={`mb-6 ${resizedImgSrc || !energyMap ? 'hidden' : ''}`}>
      <div><b>Resized image</b> {workingImageSizeText} {workingImageScrollableText}</div>
      <div className="overflow-scroll">
        <canvas ref={canvasRef} />
        {seamsCanvas}
      </div>
    </div>
  );

  const resultImageSizeText = workingImgSize ? (
    <sup className="text-xs text-gray-400">
      {`${workingImgSize.w} x ${workingImgSize.h} px`}
    </sup>
  ) : null;

  const resultImage = workingImgSize && resizedImgSrc ? (
    <div className="mb-6">
      <div><b>Resized image</b> {resultImageSizeText}</div>
      <img src={resizedImgSrc} width={workingImgSize.w} height={workingImgSize.h} alt="Resized" style={{ margin: 0 }} />
    </div>
  ) : null;

  const debugEnergyMap = withEnergyMap && workingImgSize ? (
    <div className="mb-6">
      <div><b>Energy map</b></div>
      <EnergyMap energyMap={energyMap} width={workingImgSize.w} height={workingImgSize.h} />
      {seamsCanvas}
    </div>
  ) : null;

  const resizerControls = (
    <div className="flex flex-col justify-start items-start mb-1">

      <div className="mb-3 flex flex-row">
        <div className="mr-2">
          <FileSelector
            onSelect={onFileSelect}
            disabled={isResizing}
            accept="image/png,image/jpeg"
          >
            Choose image
          </FileSelector>
        </div>

        <div>
          <Button
            onClick={onResize}
            disabled={isResizing || !toWidthScaleString}
            startEnhancer={<ImShrink2 size={14} />}
          >
            Resize
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row">
        <div className="mb-2 mr-6 flex flex-row items-center">
          <div className="text-xs mr-1">Resize to width of</div>
          <Input
            onChange={onSizeChange}
            disabled={isResizing}
            type="number"
            min={minScale}
            max={maxScale}
            className="w-14 mr-1"
            value={toWidthScaleString}
          />
          <div className="text-xs">%</div>
        </div>

        <div className="mb-2">
          <Checkbox disabled={isResizing} onChange={onUseOriginalSizeChange}>
          <span className="text-xs">
            Preserve quality <span className="text-gray-400">(takes longer)</span>
          </span>
          </Checkbox>
        </div>
      </div>

    </div>
  );

  const progressBar = (
    <div className="mb-6">
      <Progress progress={progress} />
    </div>
  );

  return (
    <>
      {resizerControls}
      {progressBar}
      {workingImage}
      {resultImage}
      {debugEnergyMap}
      {originalImage}
    </>
  );
};

export default ImageResizer;
