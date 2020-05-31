import React from 'react';
import { userProfileData } from '../database/userProfileData';

const UserProfile = () => {
  return (
    <div>
      <h1>
        {userProfileData?.firstName}
        {' '}
        {userProfileData?.lastName}
      </h1>
      <img
        src={userProfileData?.avatar?.src}
        alt={userProfileData?.avatar?.caption}
      />
    </div>
  );
};

export default UserProfile;
