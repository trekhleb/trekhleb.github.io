import React from 'react';
import { useDeviceOrientation } from './useDeviceOrientation';
import OrientationSwitcher from './OrientationSwitcher';

const OrientationInfo = (): React.ReactElement | null => {
  const { orientation, requestAccess, revokeAccess } = useDeviceOrientation();

  const onToggle = (toggleState: boolean): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = toggleState ? requestAccess() : revokeAccess();
  };

  const orientationInfo = (
    <div className="mt-6">
      <ul style={{ margin: 0, padding: 0 }}>
        <li>ɑ: {orientation && <code className="language-text">{orientation.alpha}</code>}</li>
        <li>β: {orientation && <code className="language-text">{orientation.beta}</code>}</li>
        <li>γ: {orientation && <code className="language-text">{orientation.gamma}</code>}</li>
      </ul>
    </div>
  );

  return (
    <div>
      <OrientationSwitcher
        onToggle={onToggle}
        labelOff="Show orientation angles"
        labelOn="Hide orientation angles"
      />
      {orientationInfo}
    </div>
  );
};

export default OrientationInfo;
