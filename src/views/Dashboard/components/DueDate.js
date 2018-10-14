import React from 'react';
import { DateTime, Duration } from 'luxon';

const DueDate = ({ time }) => {
  const dueDateTime = DateTime.fromISO(time);
  const delta = dueDateTime.ts - Date.now();

  const formattedTime = dueDateTime.toLocaleString(DateTime.DATETIME_SHORT);
  const remainingTime = Duration.fromMillis(delta).toFormat('hh');

  return (
    <p>
      {formattedTime}
      <span>{`${remainingTime} hours left`}</span>
    </p>
  );
}

export {
  DueDate,
}