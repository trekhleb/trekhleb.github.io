import React from 'react';
import { Helmet } from 'react-helmet';
import { windowNamePrefix, windowNameSeparator } from '../../constants/siteMeta';

type ScreenTitleMode = 'prefix' | 'suffix';

export const screenTitleModePrefix: ScreenTitleMode = 'prefix';
export const screenTitleModeSuffix: ScreenTitleMode = 'suffix';

type ScreenTitleProps = {
  title: string,
  mode?: ScreenTitleMode,
};

const ScreenTitle = (props: ScreenTitleProps): React.ReactElement => {
  const { title, mode = screenTitleModePrefix } = props;

  const composedTitle = mode === screenTitleModePrefix
    ? `${windowNamePrefix} ${windowNameSeparator} ${title}`
    : `${title} ${windowNameSeparator} ${windowNamePrefix}`;

  return (
    <Helmet>
      <title>
        {composedTitle}
      </title>
    </Helmet>
  );
};

export default ScreenTitle;
