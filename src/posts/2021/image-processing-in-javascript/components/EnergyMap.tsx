import React, { useRef, useEffect } from 'react';
import { normalizeEnergyMap } from './imageResizerViz';
import { setPixel } from './imageUtils';

type EnergyMapProps = {
  energyMap: number[][] | null,
  className?: string,
};

const EnergyMap = (props: EnergyMapProps): React.ReactElement => {
  const { energyMap, className } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!energyMap || !energyMap.length || !energyMap[0].length) {
      return;
    }
    const energyCanvas: HTMLCanvasElement | null = canvasRef.current;
    if (!energyCanvas) {
      return;
    }
    const energyCtx: CanvasRenderingContext2D | null = energyCanvas.getContext('2d');
    if (!energyCtx) {
      return;
    }

    const height = energyMap.length;
    const width = energyMap[0].length;

    energyCanvas.width = width;
    energyCanvas.height = height;

    const imgData: ImageData = energyCtx.getImageData(0, 0, width, height);

    const normalizedEnergyMap = normalizeEnergyMap(energyMap);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const norm = normalizedEnergyMap[y][x];
        setPixel(imgData, [x, y], [norm, norm, norm, 255]);
      }
    }

    energyCtx.putImageData(imgData, 0, 0);
  }, [energyMap]);

  return (
    <canvas ref={canvasRef} style={{ width: '100%' }} className={className} />
  );
};

export default EnergyMap;
