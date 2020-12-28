// @flow
import React from 'react';
import type { Node } from 'react';

type DateRangeProps = {
  className?: string,
  startDate?: Date,
  endDate?: Date,
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

const dateToString = (date: Date): string => {
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
};

const DateRange = (props: DateRangeProps): Node => {
  const { startDate, endDate, className } = props;

  if (!startDate && !endDate) {
    return null;
  }

  const startDateString = startDate ? dateToString(startDate) : null;

  const dateSeparator = startDate && endDate ? ' – ' : null;

  const endDateString = endDate ? dateToString(endDate) : null;

  return (
    <div className={className}>
      {startDateString}
      {dateSeparator}
      {endDateString}
    </div>
  );
};

DateRange.defaultProps = {
  startDate: null,
  endDate: null,
  className: '',
};

export default DateRange;
