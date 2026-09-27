import React, { useRef } from 'react';

export type CheckboxProps = {
  children: React.ReactNode,
  onChange?: (state: boolean) => void,
  className?: string,
  disabled?: boolean,
};

const Checkbox = (props: CheckboxProps): React.ReactElement => {
  const {
    children,
    className = '',
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onChange = (): void => {},
    disabled = false,
  } = props;

  const checkboxRef = useRef<HTMLInputElement>(null);

  const disabledClasses = disabled ? 'cursor-not-allowed text-muted' : 'cursor-pointer';
  const defaultClasses = 'inline-flex items-center gap-2 text-sm';
  const classes = `${defaultClasses} ${disabledClasses} ${className}`;

  const onCheckboxChange = (): void => {
    if (!checkboxRef.current) {
      return;
    }
    onChange(checkboxRef.current.checked);
  };

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <label className={classes}>
      <input
        type="checkbox"
        disabled={disabled}
        onChange={onCheckboxChange}
        ref={checkboxRef}
        className="h-4 w-4 rounded border-line-strong accent-accent"
      />
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
