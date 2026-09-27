import React from 'react';
import HyperLink, { HyperLinkProps } from './HyperLink';
import {
  buttonBaseClasses,
  buttonKindClasses,
  BUTTON_KIND_SECONDARY,
  ButtonKind,
} from './Button';

type ButtonLinkProps = HyperLinkProps & {
  kind?: ButtonKind,
};

// A link that looks like a button: light with a hairline border, filling solid black on hover.
// Pass `kind` to get the always-solid primary treatment instead. The button classes own the whole
// look (`formatted={false}`): the link's own layout and transition classes would otherwise compete
// with them (its snappier timing won and made the hover fill look instant).
const ButtonLink = (props: ButtonLinkProps): React.ReactElement => {
  const {
    className = '',
    kind = BUTTON_KIND_SECONDARY,
    startEnhancer = null,
    children,
    ...rest
  } = props;

  const classes = `${buttonBaseClasses} ${buttonKindClasses[kind]} ${className}`;

  return (
    <HyperLink {...rest} className={classes} formatted={false}>
      {startEnhancer}
      {children}
    </HyperLink>
  );
};

export default ButtonLink;
