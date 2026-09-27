import React from 'react';

import { routes } from '../../constants/routes';
import { brandName } from '../../constants/siteMeta';
import type { Link as LinkType } from '../../types/Link';
import HyperLink from './HyperLink';

const Logo = (): React.ReactElement => {
  const link: LinkType = {
    url: routes.home.path,
    caption: 'Home',
  };
  // On hover the wordmark gets the navigation items' pill (36px tall, 12px past the text on each
  // side, same radius and tint, from 640px up like the nav). The pill is a ::before layer, so the
  // link's own box, and with it every position and gap in the header, stays exactly as it is.
  // Its right edge is pulled in by the tracking that trails the last letter, to keep the pill
  // optically centred on the word.
  const pillClasses = 'before:absolute before:inset-y-0.5 before:-left-3 before:right-[calc(0.07em_-_0.75rem)] before:-z-10 before:rounded-lg before:transition-colors before:duration-150 sm:hover:before:bg-subtle';

  return (
    <HyperLink
      link={link}
      className={`relative isolate inline-flex h-10 items-center text-sm font-extrabold uppercase tracking-[0.07em] text-fg ${pillClasses}`}
      hoverClassName="hover:text-fg"
    >
      {brandName}
    </HyperLink>
  );
};

export default Logo;
