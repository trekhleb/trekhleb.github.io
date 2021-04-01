import React from 'react';

export type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  title?: string | undefined,
  startEnhancer?: React.ReactNode,
};

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    className = '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onClick = (): void => {},
    disabled = false,
    title = undefined,
    startEnhancer = null,
  } = props;

  const disabledClasses = disabled ? 'cursor-not-allowed bg-white text-gray-500 hover:bg-white hover:text-gray-500 border-gray-300' : '';
  const defaultClasses = 'hover:bg-white hover:text-black py-2 px-3 rounded shadow-sm border border-solid border-white hover:border-gray-300 bg-black text-white transition duration-200 ease-in-out flex flex-row items-center uppercase font-medium text-xs tracking-wider';
  const classes = `${defaultClasses} ${disabledClasses} ${className}`;

  const separator = startEnhancer ? (
    <span className="w-2" />
  ) : null;

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      disabled={disabled}
      title={title}
    >
      {startEnhancer}
      {separator}
      {children}
    </button>
  );
};

export default Button;
