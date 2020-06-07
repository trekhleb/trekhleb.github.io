// @flow
import React from 'react';
import { userProfileData } from '../../database/userProfileData';
import SocialLinks from '../shared/SocialLinks';

const UserProfile = () => {
  const summaryLines = (userProfileData?.summary || []).map(
    (summaryLine: string) => (
      <div key={summaryLine} className="text-center sm:text-left mb-2">
        {summaryLine}
      </div>
    ),
  );

  const avatar = userProfileData?.avatar ? (
    <figure className="mr-0 sm:mr-6">
      <img
        className="w-48 h-48 rounded-full"
        src={userProfileData?.avatar?.src}
        alt={userProfileData?.avatar?.caption}
      />
    </figure>
  ) : null;

  return (
    <div className="flex flex-col items-center sm:flex-row">
      {avatar}

      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="flex flex-row text-3xl text-center mb-0 sm:mb-2">
          {userProfileData?.firstName}
          {' '}
          {userProfileData?.lastName}
        </h1>
        <div className="mb-4 font-light">
          {summaryLines}
        </div>
        <div>
          <SocialLinks links={userProfileData?.socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
