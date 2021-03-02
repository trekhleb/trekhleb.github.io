import React, { useState } from 'react';

import { useDeviceOrientation } from './useDeviceOrientation';
import Toggle from '../../../../components/shared/Toggle';
import Alert, { ErrorAlert } from '../../../../components/shared/Alert';

type OrientationSwitcherProps = {
  onToggle: (toggleState: boolean) => void,
  labelOn?: string,
  labelOff?: string,
};

const OrientationSwitcher = (props: OrientationSwitcherProps): React.ReactElement => {
  const { onToggle: onSwitchToggle, labelOn = 'Using orientation', labelOff = 'Use orientation' } = props;

  const {
    error,
    requestAccess,
    revokeAccess,
  } = useDeviceOrientation();

  const [orientationAvailable, setOrientationAvailable] = useState(false);

  const onToggle = (toggleState: boolean): void => {
    if (toggleState) {
      requestAccess().then((granted: boolean) => {
        if (granted) {
          setOrientationAvailable(true);
        } else {
          setOrientationAvailable(false);
        }
      });
    } else {
      revokeAccess().then(() => {
        setOrientationAvailable(false);
      });
    }
    onSwitchToggle(toggleState);
  };

  const errorElement = error ? (
    <div className="mt-6">
      <Alert type={ErrorAlert}>{error.message}</Alert>
    </div>
  ) : null;

  return (
    <div>
      <Toggle
        onChange={onToggle}
        isOn={orientationAvailable}
        labelOff={labelOff}
        labelOn={labelOn}
      />
      {errorElement}
    </div>
  );
};

export default OrientationSwitcher;
