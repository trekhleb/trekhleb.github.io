import React, { useRef, useEffect } from 'react';
import { Seam } from './contentAwareResizer';
import { Coordinate } from './imageUtils';

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
    const seamsCtx: CanvasRenderingContext2D | null = seamsCanvas.getContext('2d');
    if (!seamsCtx) {
      return;
    }

    seamsCanvas.width = width;
    seamsCanvas.height = height;

    // const imgData: ImageData = seamsCtx.getImageData(0, 0, width, height);

    seamsCtx.fillStyle = 'rgba(255, 0, 0, 1)';
    seams[0].forEach((seam: Coordinate) => {
      seamsCtx.fillRect(seam[0], seam[1], 1, 1);
    });
  }, [seams, width, height]);

  return (
    <canvas ref={canvasRef} className={className} />
  );
};

export default Seams;
