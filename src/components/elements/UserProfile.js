// @flow
import React from 'react';
import { userProfileData } from '../../database/userProfileData';
import SocialLinks from '../shared/SocialLinks';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <figure className="mr-0 sm:mr-6">
        <img
          className="w-48 h-48 rounded-full"
          src={userProfileData?.avatar?.src}
          alt={userProfileData?.avatar?.caption}
        />
      </figure>
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="flex flex-row text-3xl">
          {userProfileData?.firstName}
          {' '}
          {userProfileData?.lastName}
        </h1>
        <div className="mb-2">
          {userProfileData?.summary}
        </div>
        <div>
          <SocialLinks links={userProfileData?.socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
