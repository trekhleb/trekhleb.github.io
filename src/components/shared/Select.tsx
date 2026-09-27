import React, { ChangeEvent } from 'react';
import { FiChevronDown } from '@react-icons/all-files/fi/FiChevronDown';

export type SelectOption = {
  value: string,
  label: string,
};

export type SelectProps = {
  options: SelectOption[],
  onChange?: (value: string) => void,
  value?: string,
  className?: string,
  disabled?: boolean,
  ariaLabel?: string,
  // Stretches the control across its container on phones (it is content-sized on wider screens).
  fullWidth?: boolean,
};

/*
  The one control used for every sort/filter on the site: a native <select> (best on phones)
  styled as a pill. 40px tall on phones, 36px on desktop; full width on phones when `fullWidth`.
*/
const Select = (props: SelectProps): React.ReactElement => {
  const {
    options,
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onChange = (): void => {},
    value,
    className = '',
    disabled = false,
    ariaLabel = undefined,
    fullWidth = false,
  } = props;

  const disabledClasses = disabled
    ? 'cursor-not-allowed border-line text-muted'
    : 'cursor-pointer hover:border-fg/60 focus:border-accent';
  const defaultClasses = 'h-10 max-w-full appearance-none truncate rounded-full border border-line-strong bg-bg pl-4 pr-10 text-sm font-medium text-fg transition-colors duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-accent/30 sm:h-9';
  const widthClasses = fullWidth ? 'w-full sm:w-auto' : '';
  const classes = `${defaultClasses} ${disabledClasses} ${widthClasses} ${className}`;

  const optionElements = options.map((option: SelectOption) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className={`relative inline-flex max-w-full items-center ${fullWidth ? 'w-full sm:w-auto' : ''}`}>
      <select
        onChange={onSelectChange}
        value={value}
        disabled={disabled}
        aria-label={ariaLabel}
        className={classes}
      >
        {optionElements}
      </select>
      <FiChevronDown className="pointer-events-none absolute right-3.5 text-muted" aria-hidden="true" />
    </div>
  );
};

export default Select;
