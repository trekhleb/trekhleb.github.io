import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';

import { DateString } from '../../types/Date';

export type DateRangeProps = {
  startDate?: DateString | null,
  endDate?: DateString | null,
  className?: string,
  withDay?: boolean,
  withIcon?: boolean,
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const dateToString = (date: Date, withDay = false): string => {
  const month = months[date.getMonth()];
  const day = withDay ? ` ${date.getDate()}, ` : ' ';
  const year = date.getFullYear();
  return `${month}${day}${year}`;
};

const DateRange = (props: DateRangeProps): React.ReactElement | null => {
  const {
    startDate,
    endDate,
    className = '',
    withDay = false,
    withIcon = false,
  } = props;

  if (!startDate && !endDate) {
    return null;
  }

  const startDateString = startDate ? dateToString(new Date(startDate), withDay) : null;

  const dateSeparator = startDate && endDate ? ' → ' : null;

  const endDateString = endDate ? dateToString(new Date(endDate), withDay) : null;

  const dateTime = startDate || endDate || undefined;

  return (
    <time dateTime={dateTime} className={`inline-flex items-center gap-1 whitespace-nowrap tabular-nums ${className}`}>
      {withIcon && <FiCalendar size={14} aria-hidden="true" />}
      <span>
        {startDateString}
        {dateSeparator}
        {endDateString}
      </span>
    </time>
  );
};

export default DateRange;
