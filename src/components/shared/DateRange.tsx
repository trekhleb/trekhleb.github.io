import React from 'react';
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar';

import { DateString } from '../../types/Date';
import Row from './Row';

export type DateRangeProps = {
  startDate?: DateString | null,
  endDate?: DateString | null,
  className?: string,
  withDay?: boolean,
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
  } = props;

  if (!startDate && !endDate) {
    return null;
  }

  const startDateString = startDate ? dateToString(new Date(startDate), withDay) : null;

  const dateSeparator = startDate && endDate ? ' → ' : null;

  const endDateString = endDate ? dateToString(new Date(endDate), withDay) : null;

  return (
    <div className={className}>
      <Row>
        <FiCalendar className="mr-1" />
        <div>
          {startDateString}
          {dateSeparator}
          {endDateString}
        </div>
      </Row>
    </div>
  );
};

export default DateRange;
