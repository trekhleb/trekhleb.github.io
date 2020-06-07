// @flow
import React from 'react';
import { userData } from '../../database/userData';
import SocialLinks from '../shared/SocialLinks';
import Avatar from '../shared/Avatar';

const UserProfile = () => {
  const summaryLines = (userData?.summary || []).map(
    (summaryLine: string) => (
      <div key={summaryLine} className="text-center sm:text-left mb-2">
        {summaryLine}
      </div>
    ),
  );

  return (
    <div className="flex flex-col items-center sm:flex-row">
      <Avatar avatar={userData?.avatar} />

      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="flex flex-row text-3xl text-center mb-0 sm:mb-2">
          {userData?.firstName}
          {' '}
          {userData?.lastName}
        </h1>
        <div className="mb-4 font-light">
          {summaryLines}
        </div>
        <div>
          <SocialLinks links={userData?.socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
