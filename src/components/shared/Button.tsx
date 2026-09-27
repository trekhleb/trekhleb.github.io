import React, { CSSProperties } from 'react';

export type ButtonKind = 'primary' | 'secondary';

export const BUTTON_KIND_PRIMARY: ButtonKind = 'primary';
export const BUTTON_KIND_SECONDARY: ButtonKind = 'secondary';

export type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  title?: string | undefined,
  startEnhancer?: React.ReactNode,
  style?: CSSProperties,
  kind?: ButtonKind,
};

// Shared button look, also used by ButtonLink (anchor) and the newsletter submit input. The hover
// fill fades like on the previous site (200ms ease-in-out): quick, but visibly animated.
export const buttonBaseClasses = 'inline-flex h-10 select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 text-sm font-medium transition-colors duration-200 ease-in-out';

export const buttonKindClasses: Record<ButtonKind, string> = {
  [BUTTON_KIND_PRIMARY]: 'border border-transparent bg-fg text-bg hover:bg-fg/85',
  [BUTTON_KIND_SECONDARY]: 'border border-line-strong bg-bg text-fg hover:border-fg hover:bg-fg hover:text-bg',
};

const buttonDisabledClasses = 'cursor-not-allowed border border-line bg-subtle text-muted hover:bg-subtle hover:border-line';

const Button = (props: ButtonProps): React.ReactElement => {
  const {
    children,
    className = '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onClick = (): void => {},
    disabled = false,
    title = undefined,
    startEnhancer = null,
    style = {},
    kind = BUTTON_KIND_PRIMARY,
  } = props;

  const classes = `${buttonBaseClasses} ${disabled ? buttonDisabledClasses : buttonKindClasses[kind]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      type="button"
      disabled={disabled}
      title={title}
      style={style}
    >
      {startEnhancer}
      {children}
    </button>
  );
};

export default Button;
