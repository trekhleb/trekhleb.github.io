import React from 'react';

type BadgeProps = {
  children: React.ReactNode,
  className?: string,
};

// Small counter/label pill (e.g. number of projects, publication type).
const Badge = (props: BadgeProps): React.ReactElement | null => {
  const { children, className = '' } = props;

  if (!children) {
    return null;
  }

  const commonClassName = 'inline-flex items-center rounded-full bg-subtle px-2 py-0.5 text-xs font-medium leading-5 text-muted tabular-nums';
  const classes = `${commonClassName} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Badge;
