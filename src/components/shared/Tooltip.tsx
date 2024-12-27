import React from 'react';

type TooltipProps = {
  content: React.ReactNode,
  children: React.ReactNode,
};

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const { children, content } = props;

  const [isVisible, setIsVisible] = React.useState(false);

  const popoverCommonClassName = 'absolute flex z-10 transition-all duration-200 w-screen sm:w-64 left-0 sm:left-auto sm:-translate-x-1/2';
  const popoverClassName = isVisible ? `${popoverCommonClassName} opacity-100` : `${popoverCommonClassName} invisible opacity-0`;

  return (
    <div
      className="shared-tooltip-container"
      onMouseEnter={(): void => setIsVisible(true)}
      onMouseLeave={(): void => setIsVisible(false)}
    >
      <div className="cursor-pointer">{children}</div>
      <div role="tooltip" className={popoverClassName}>
        <div className="shared-tooltip-content px-3 py-2 mx-2 text-sm text-white bg-black rounded-lg drop-shadow-md w-full">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
