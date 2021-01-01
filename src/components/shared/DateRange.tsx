import React from 'react';
import { DateString } from '../../types/Date';

export type DateRangeProps = {
  startDate?: DateString | null,
  endDate?: DateString | null,
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

const DateRange = (props: DateRangeProps): React.ReactElement | null => {
  const { startDate, endDate } = props;

  if (!startDate && !endDate) {
    return null;
  }

  const startDateString = startDate ? dateToString(new Date(startDate)) : null;

  const dateSeparator = startDate && endDate ? ' – ' : null;

  const endDateString = endDate ? dateToString(new Date(endDate)) : null;

  return (
    <div>
      {startDateString}
      {dateSeparator}
      {endDateString}
    </div>
  );
};

export default DateRange;
