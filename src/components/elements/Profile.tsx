import React from 'react';
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase';

import type { Profile as ProfileType } from '../../types/Profile';
import Avatar from '../shared/Avatar';
import Location from '../shared/Location';
import H, { hLevel } from '../shared/H';
import Tags from '../shared/Tags';
import SocialLinks from '../shared/SocialLinks';
import Greeting from '../shared/Greeting';

type ProfileProps = {
  profile: ProfileType,
  // Years since the career started (see AboutScreen); left out of the introduction when unknown.
  experienceYears?: number,
};

// Home page hero: who this is, in one glance. One column at every size: portrait, name, role,
// introduction, social links (the proof points sit beside it on desktop, see AboutScreen).
const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile, experienceYears } = props;

  // The only copy of the current portrait is 500×500, so it stays small enough (≤ 250 CSS px)
  // to be sharp on 2× screens. Loaded eagerly: it is above the fold on every screen.
  const avatarElement = profile.avatar ? (
    <Avatar avatar={profile.avatar} className="h-24 w-24 sm:h-28 sm:w-28" loading="eager" />
  ) : null;

  const userName = [
    profile?.firstName || '',
    profile?.lastName || '',
  ].join(' ');

  const userNameElement = userName ? (
    <H level={hLevel.h1} className="!text-display">
      {userName}
    </H>
  ) : null;

  const positionElement = profile?.position ? (
    <span className="inline-flex items-center gap-1.5">
      <FiBriefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{profile.position}</span>
    </span>
  ) : null;

  const locationElement = profile?.location ? (
    <Location location={profile.location} />
  ) : null;

  const metaElement = positionElement || locationElement ? (
    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] text-muted">
      {positionElement}
      {locationElement}
    </div>
  ) : null;

  const tagsElement = profile?.tags && profile.tags.length ? (
    <div className="mt-4">
      <Tags tags={profile.tags} />
    </div>
  ) : null;

  const socialLinksElement = (
    <div className="mt-7">
      <SocialLinks links={profile?.socialLinks} forceShowingSecondaryLinks />
    </div>
  );

  return (
    <section aria-label="About Oleksii Trekhleb" className="min-w-0 max-w-2xl">
      {avatarElement}
      <div className={avatarElement ? 'mt-6' : ''}>
        {userNameElement}
      </div>
      {metaElement}
      <div className="mt-6 text-[17px] leading-relaxed text-fg/90">
        <Greeting experienceYears={experienceYears} />
      </div>
      {tagsElement}
      {socialLinksElement}
    </section>
  );
};

export default Profile;
