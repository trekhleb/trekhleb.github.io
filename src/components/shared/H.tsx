import React from 'react';

export const hLevel = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};

type HLevelKeys = keyof typeof hLevel;
type HLevelValues = typeof hLevel[HLevelKeys];

type HProps = {
  children: React.ReactNode,
  level: HLevelValues,
  className?: string,
  id?: string,
};

const classes = {
  [hLevel.h1]: 'text-3xl',
  [hLevel.h2]: 'text-2xl',
  [hLevel.h3]: 'text-xl',
};

const H = (props: HProps): React.ReactElement | null => {
  const {
    children,
    level,
    className = '',
    ...rest
  } = props;

  if (!children) {
    return null;
  }

  const classNames = `${classes[level]} ${className}`;

  if (level === hLevel.h1) {
    return <h1 className={classNames} {...rest}>{children}</h1>;
  }

  if (level === hLevel.h2) {
    return <h2 className={classNames} {...rest}>{children}</h2>;
  }

  if (level === hLevel.h3) {
    return <h3 className={classNames} {...rest}>{children}</h3>;
  }

  return null;
};

export default H;
