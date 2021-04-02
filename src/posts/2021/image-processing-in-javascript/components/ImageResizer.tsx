import React, { useRef, useState } from 'react';
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
import defaultImgSrc from '../assets/test.jpg';
import Button from '../../../../components/shared/Button';
import FileSelector from './FileSelector';
import Checkbox from '../../../../components/shared/Checkbox';
import Progress from '../../../../components/shared/Progress';

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
  const [imgSize, setImgSize] = useState<ImageSize | null>(null);
  const [seams, setSeams] = useState<Seam[] | null>(null);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [resizeToWidth, setResizeToWidth] = useState<number>(0);

  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onUseOriginalSizeChange = (state: boolean): void => {
    setUseNaturalSize(state);
  };

  const onReset = (): void => {
    setResizedImgSrc(null);
    setSeams(null);
    setImgSize(null);
    setEnergyMap(null);
    setProgress(0);
  };

  const onFileSelect = (files: FileList | null): void => {
    if (!files || !files.length) {
      return;
    }
    onReset();
    const imageURL = URL.createObjectURL(files[0]);
    setImageSrc(imageURL);
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
    setImgSize({ w, h });
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

    const w = useNaturalSize ? srcImg.naturalWidth : srcImg.width;
    const h = useNaturalSize ? srcImg.naturalHeight : srcImg.height;

    canvas.width = w;
    canvas.height = h;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.drawImage(srcImg, 0, 0, w, h);

    const img: ImageData = ctx.getImageData(0, 0, w, h);

    // Making a square image.
    const toWidth = Math.min(w, h);
    setResizeToWidth(toWidth);
    resizeImageWidth({ img, toWidth, onIteration }).then(() => {
      onFinish();
    });
  };

  const seamsCanvas = withSeam && imgSize && seams ? (
    <div style={{ marginTop: `-${imgSize.h}px` }}>
      <Seams seams={seams} width={imgSize.w} height={imgSize.h} />
    </div>
  ) : null;

  const originalImage = (
    <div>
      <div>Original image</div>
      <img src={imageSrc} alt="Original" ref={imgRef} style={{ margin: 0 }} />
    </div>
  );

  const workingImage = (
    <div className={`overflow-scroll mb-6 ${resizedImgSrc || !energyMap ? 'hidden' : ''}`}>
      <div>Resized image</div>
      <canvas ref={canvasRef} />
      {seamsCanvas}
    </div>
  );

  const resultImage = imgSize && resizedImgSrc ? (
    <div className="mb-6">
      <div>Resized image</div>
      <img src={resizedImgSrc} width={imgSize.w} height={imgSize.h} alt="Resized" style={{ margin: 0 }} />
    </div>
  ) : null;

  const debugEnergyMap = withEnergyMap && imgSize ? (
    <div className="mb-6">
      <div>Energy map</div>
      <EnergyMap energyMap={energyMap} width={imgSize.w} height={imgSize.h} />
      {seamsCanvas}
    </div>
  ) : null;

  const resizerControls = (
    <div className="flex flex-col sm:flex-row justify-start items-start">

      <div className="mr-2 mb-3">
        <FileSelector
          onSelect={onFileSelect}
          disabled={isResizing}
          accept="image/png,image/jpeg"
        >
          Choose image
        </FileSelector>
      </div>

      <div className="mr-4 mb-3">
        <Button
          onClick={onResize}
          disabled={isResizing}
          startEnhancer={<ImShrink2 size={14} />}
        >
          Resize
        </Button>
      </div>

      <div className="mb-3">
        <Checkbox disabled={isResizing} onChange={onUseOriginalSizeChange}>
          <span className="text-xs">
            Preserve original size <span className="text-gray-400">(takes longer)</span>
          </span>
        </Checkbox>
      </div>

    </div>
  );

  const progressBar = (
    <div className="mb-3">
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
