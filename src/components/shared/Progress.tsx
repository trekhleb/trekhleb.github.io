import React, { CSSProperties } from 'react';

type ZeroToOne = number;

export type CheckboxProps = {
  progress: ZeroToOne,
};

const Progress = (props: CheckboxProps): React.ReactElement => {
  const { progress } = props;

  const progressPercentage = Math.min(Math.ceil(100 * progress), 100);
  const barStyle: CSSProperties = {
    width: `${progressPercentage}%`,
    transition: 'width 0.5s',
  };

  return (
    <div
      role="progressbar"
      aria-label="Progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progressPercentage}
      className="flex h-1 flex-row items-center justify-start overflow-hidden rounded-full bg-subtle"
    >
      <div className="h-full rounded-full bg-accent" style={barStyle} />
    </div>
  );
};

export default Progress;
