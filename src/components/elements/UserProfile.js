import React from 'react';
import { userProfileData } from '../../database/userProfileData';

const avatarStyle = {
  width: '150px',
  borderRadius: '50%',
};

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const UserProfile = () => {
  return (
    <div style={rowStyle}>
      <div>
        <img
          style={avatarStyle}
          src={userProfileData?.avatar?.src}
          alt={userProfileData?.avatar?.caption}
        />
      </div>
      <div>
        <h1>
          {userProfileData?.firstName}
          {' '}
          {userProfileData?.lastName}
        </h1>
      </div>
    </div>
  );
};

export default UserProfile;
