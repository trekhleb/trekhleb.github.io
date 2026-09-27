import React, { ChangeEvent } from 'react';

// Any native <input> attribute (type, min, max, aria-label, ...) can be passed through.
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export type InputProps = NativeInputProps & {
  onChange?: (value: string) => void,
  className?: string,
  disabled?: boolean,
  value?: string | ReadonlyArray<string> | number,
};

export const inputClasses = 'h-10 rounded-lg border border-line-strong bg-bg px-3 text-sm text-fg transition-colors duration-150 ease-out placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30';

const Input = (props: InputProps): React.ReactElement => {
  const {
    disabled = false,
    className = '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onChange = (): void => {},
    value,
    ...rest
  } = props;

  const disabledClasses = disabled ? 'cursor-not-allowed border-line text-muted' : '';
  const classes = `${inputClasses} ${disabledClasses} ${className}`;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <input
        disabled={disabled}
        onChange={onInputChange}
        className={classes}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
