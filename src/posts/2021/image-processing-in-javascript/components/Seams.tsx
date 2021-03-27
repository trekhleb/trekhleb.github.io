import React, { useRef, useEffect } from 'react';
import { Seam } from './contentAwareResizer';

type SeamProps = {
  seams: Seam[],
  width: number,
  height: number,
  className?: string,
};

const Seams = (props: SeamProps): React.ReactElement => {
  const {
    seams,
    width,
    height,
    className = '',
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!seams || !seams.length || !seams[0]) {
      return;
    }
    const seamsCanvas: HTMLCanvasElement | null = canvasRef.current;
    if (!seamsCanvas) {
      return;
    }
    const energyCtx: CanvasRenderingContext2D | null = seamsCanvas.getContext('2d');
    if (!energyCtx) {
      return;
    }

    seamsCanvas.width = width;
    seamsCanvas.height = height;

    const imgData: ImageData = energyCtx.getImageData(0, 0, width, height);
  }, [seams, width, height]);

  return (
    <canvas ref={canvasRef} style={{ width: '100%' }} className={className} />
  );
};

export default Seams;
