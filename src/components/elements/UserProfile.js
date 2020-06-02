import React from 'react';
import { userProfileData } from '../../database/userProfileData';

const rowStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const avatarContainerStyle = {
  marginRight: '20px',
};

const avatarStyle = {
  width: '120px',
  borderRadius: '50%',
};

const UserProfile = () => {
  return (
    <div style={rowStyle}>
      <div style={avatarContainerStyle}>
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
        <div>
          {userProfileData?.summary}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
