import React, { CSSProperties, useState } from 'react';

import './Toggle.css';

type ToggleProps = {
  isOn?: boolean,
  labelOn?: string,
  labelOff?: string,
  onChange?: (isOn: boolean) => void,
};

const Toggle = (props: ToggleProps): React.ReactElement => {
  const {
    isOn: isOnDefault = false,
    labelOn,
    labelOff,
    onChange,
  } = props;

  const [isOn, setIsOn] = useState(isOnDefault);

  const onToggle = (): void => {
    if (onChange) {
      onChange(!isOn);
    }
    setIsOn(!isOn);
  };

  const toggleRandomId = `toggle-${Math.random().toString(36).substring(2)}`;

  const toggleDotStyles: CSSProperties = {
    top: '-.25rem',
    left: '-.25rem',
    transition: 'all 0.3s ease-in-out',
  };

  const labelElement = labelOn && labelOff ? (
    <div className="ml-3 text-gray-700">
      {isOn ? labelOn : labelOff}
    </div>
  ) : null;

  return (
    <div className="flex items-center justify-start ml-1">
      <label htmlFor={toggleRandomId} className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id={toggleRandomId}
            type="checkbox"
            className="hidden"
            onChange={onToggle}
            checked={isOn}
          />
          <div
            className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
          />
          <div
            style={toggleDotStyles}
            className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
          />
        </div>
        {labelElement}
      </label>
    </div>
  );
};

export default Toggle;
