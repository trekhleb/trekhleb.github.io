import React from 'react';
import { useDeviceOrientation } from './useDeviceOrientation';
import OrientationSwitcher from './OrientationSwitcher';
import './GyroCube.css';

const GyroCube = (): React.ReactElement | null => {
  const {
    requestAccess,
    revokeAccess,
    cssTransformInverse,
  } = useDeviceOrientation();

  const onToggle = (toggleState: boolean): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = toggleState ? requestAccess() : revokeAccess();
  };

  return (
    <div className="post--2021--water-line--gyro-cube">
      <OrientationSwitcher
        onToggle={onToggle}
        labelOff="Turn the Gyro-Cube ON"
        labelOn="Turn the Gyro-Cube OFF"
      />

      <div className="gyro-cube-container">
        <div className="gyro-cube" style={cssTransformInverse}>
          <div className="gyro-cube-side gyro-cube-front">1</div>
          <div className="gyro-cube-side gyro-cube-back">2</div>
          <div className="gyro-cube-side gyro-cube-left">3</div>
          <div className="gyro-cube-side gyro-cube-right">4</div>
          <div className="gyro-cube-side gyro-cube-top">5</div>
          <div className="gyro-cube-side gyro-cube-bottom">6</div>
        </div>
      </div>

    </div>
  );
};

export default GyroCube;
