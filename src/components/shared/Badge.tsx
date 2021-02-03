import React from 'react';

type BadgeProps = {
  children: React.ReactNode,
  className?: string,
};

const Badge = (props: BadgeProps): React.ReactElement | null => {
  const { children, className = '' } = props;

  if (!children) {
    return null;
  }

  const commonClassName = 'bg-gray-200 px-1 rounded text-xs';
  const classes = `${commonClassName} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Badge;
