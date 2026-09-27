import React from 'react';

import { profile } from '../../data/profile';
import Avatar from '../shared/Avatar';
import HyperLink from '../shared/HyperLink';
import SocialLinks from '../shared/SocialLinks';
import { routes } from '../../constants/routes';

// Byline card at the end of every article.
const AuthorCard = (): React.ReactElement => {
  const name = `${profile.firstName} ${profile.lastName}`;

  return (
    <div className="flex items-center gap-4 rounded-xl2 border border-line p-5 sm:gap-5 sm:p-6">
      {profile.avatar && (
        <HyperLink link={{ url: routes.home.path, caption: name }} formatted={false} className="shrink-0">
          <Avatar avatar={profile.avatar} className="h-14 w-14 sm:h-16 sm:w-16" />
        </HyperLink>
      )}
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Written by</p>
        <p className="mt-0.5 text-[17px] font-semibold">
          <HyperLink link={{ url: routes.home.path }} className="text-fg" hoverClassName="hover:text-accent">
            {name}
          </HyperLink>
        </p>
        {profile.position && (
          <p className="text-sm text-muted">{profile.position}</p>
        )}
      </div>
      <div className="ml-auto hidden md:block">
        <SocialLinks links={profile.socialLinks} expandable={false} variant="plain" />
      </div>
    </div>
  );
};

export default AuthorCard;
