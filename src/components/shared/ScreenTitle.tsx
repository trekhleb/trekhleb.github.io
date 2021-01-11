import React from 'react';
import { Helmet } from 'react-helmet';
import { windowNamePrefix, windowNameSeparator } from '../../constants/siteMeta';

type ScreenTitleProps = {
  title: string,
};

const ScreenTitle = (props: ScreenTitleProps): React.ReactElement => {
  const { title } = props;

  return (
    <Helmet>
      <title>
        {`${windowNamePrefix} ${windowNameSeparator} ${title}`}
      </title>
    </Helmet>
  );
};

export default ScreenTitle;
