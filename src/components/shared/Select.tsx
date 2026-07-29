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
};

const Select = (props: SelectProps): React.ReactElement => {
  const {
    options,
    /* eslint-disable-next-line @typescript-eslint/no-empty-function */
    onChange = (): void => {},
    value,
    className = '',
    disabled = false,
    ariaLabel = undefined,
  } = props;

  const disabledClasses = disabled
    ? 'border-gray-300 text-gray-500 cursor-not-allowed'
    : 'cursor-pointer hover:border-black focus:border-black';
  const defaultClasses = 'appearance-none bg-white text-black border border-solid border-gray-400 rounded-lg shadow-sm pl-2 pr-7 py-1 text-sm transition duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-black max-w-full truncate';
  const classes = `${defaultClasses} ${disabledClasses} ${className}`;

  const optionElements = options.map((option: SelectOption) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value);
  };

  return (
    <div className="relative inline-flex items-center max-w-full">
      <select
        onChange={onSelectChange}
        value={value}
        disabled={disabled}
        aria-label={ariaLabel}
        className={classes}
      >
        {optionElements}
      </select>
      <FiChevronDown className="absolute right-2 pointer-events-none text-gray-500" />
    </div>
  );
};

export default Select;
