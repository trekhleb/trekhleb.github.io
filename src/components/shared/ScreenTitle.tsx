import * as React from 'react';

type ScreenTitleProps = {
  children: React.ReactNode,
};

const ScreenTitle = (props: ScreenTitleProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <title>{children}</title>
  );
};

export default ScreenTitle;
