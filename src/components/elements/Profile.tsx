import React from 'react';
import { FiBriefcase } from '@react-icons/all-files/fi/FiBriefcase';

import type { Profile as ProfileType } from '../../types/Profile';
import Avatar from '../shared/Avatar';
import Location from '../shared/Location';
import H, { hLevel } from '../shared/H';
import Tags from '../shared/Tags';
import SocialLinks from '../shared/SocialLinks';

type ProfileProps = {
  profile: ProfileType,
};

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props;

  const avatarElement = profile.avatar ? (
    <div className="mr-0 mb-3 sm:mr-6 sm:mb-0">
      <Avatar avatar={profile.avatar} className="w-64 h-64 rounded-full overflow-hidden" />
    </div>
  ) : null;

  const userName = [
    profile?.firstName || '',
    profile?.lastName || '',
  ].join(' ');

  const userNameElement = userName ? (
    <div className="flex flex-row text-center">
      <H level={hLevel.h2} className="mb-1">
        {userName}
      </H>
    </div>
  ) : null;

  const positionElement = profile?.position ? (
    <div className="mb-3 font-light text-gray-600 flex flex-row items-center">
      <FiBriefcase className="mr-1 w-4 h-4" />
      {profile.position}
    </div>
  ) : null;

  const summaryLines = (profile?.summary || []).map(
    (summaryLine: string) => (
      <div key={summaryLine} className="text-center sm:text-left mb-0">
        {summaryLine}
      </div>
    ),
  );

  const summaryLinesElement = profile?.summary ? (
    <div className="mb-3 font-light">
      {summaryLines}
    </div>
  ) : null;

  const locationElement = profile?.location ? (
    <div className="mb-3 text-gray-600">
      <Location location={profile.location} />
    </div>
  ) : null;

  const tagsElement = profile?.tags ? (
    <div className="mb-4">
      <Tags tags={profile.tags} />
    </div>
  ) : null;

  const socialLinksElement = (
    <SocialLinks links={profile?.socialLinks} />
  );

  return (
    <div className="flex flex-col items-center sm:flex-row">
      {avatarElement}
      <div className="flex flex-col justify-center items-center sm:items-start">
        {userNameElement}
        {positionElement}
        {summaryLinesElement}
        {locationElement}
        {tagsElement}
        {socialLinksElement}
      </div>
    </div>
  );
};

export default Profile;
