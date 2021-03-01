import React, { CSSProperties } from 'react';
import { useDeviceOrientation } from './useDeviceOrientation';
import OrientationSwitcher from './OrientationSwitcher';
import bullImage from '../assets/03-bull.jpg';

const textContainerStyles: CSSProperties = {
  perspective: '800px',
  perspectiveOrigin: 'center center',
};

const GyroText = (): React.ReactElement | null => {
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
    <div>
      <OrientationSwitcher
        onToggle={onToggle}
        labelOff="Turn gyro text on"
        labelOn="Turn gyro text off"
      />
      <div className="mt-6 p-6" style={textContainerStyles}>
        <div className="mb-3 p-6 bg-yellow-200" style={cssTransformInverse}>
          After you toggle the Gyro text, this text block along with the image below
          will try to preserve their original position in 3D space while you are rotating
          you device.
        </div>
        <div style={cssTransformInverse}>
          <img src={bullImage} width="100%" alt="Bull" />
        </div>
      </div>
    </div>
  );
};

export default GyroText;
