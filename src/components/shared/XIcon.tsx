import React from 'react';

type XIconProps = {
  className?: string,
  size?: number,
};

// The X (formerly Twitter) logo; the icon set in use predates the rebrand.
const XIcon = (props: XIconProps): React.ReactElement => {
  const { className = '', size = 20 } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
};

export default XIcon;
