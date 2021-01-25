import React from 'react';
import HyperLink, { HyperLinkProps } from './HyperLink';

type ButtonLinkProps = HyperLinkProps;

const ButtonLink = (props: ButtonLinkProps): React.ReactElement => {
  const { className, children, ...rest } = props;

  const buttonClasses = '';
  const classes = `${className} ${buttonClasses}`;

  return (
    <HyperLink {...rest} className={classes}>
      {children}
    </HyperLink>
  );
};

export default ButtonLink;
