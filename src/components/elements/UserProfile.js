// @flow
import React from 'react';
import { userData } from '../../database/userData';
import SocialLinks from '../shared/SocialLinks';
import Avatar from '../shared/Avatar';
import Tags from '../shared/Tags';
import Location from '../shared/Location';

const UserProfile = () => {
  const summaryLines = (userData?.summary || []).map(
    (summaryLine: string) => (
      <div key={summaryLine} className="text-center sm:text-left mb-0">
        {summaryLine}
      </div>
    ),
  );

  const tags = userData?.tags ? (
    <div className="mb-5">
      <Tags tags={userData.tags} />
    </div>
  ) : null;

  const location = userData?.location ? (
    <div className="mb-4">
      <Location location={userData.location} />
    </div>
  ) : null;

  return (
    <div className="flex flex-col items-center sm:flex-row">
      <div className="mr-0 mb-3 sm:mr-6 sm:mb-0">
        <Avatar avatar={userData?.avatar} />
      </div>

      <div className="flex flex-col justify-center items-center sm:items-start">
        <h1 className="flex flex-row text-3xl text-center mb-2">
          {userData?.firstName}
          {' '}
          {userData?.lastName}
        </h1>
        <div className="mb-4 font-light">
          {summaryLines}
        </div>
        {location}
        {tags}
        <SocialLinks links={userData?.socialLinks} />
      </div>
    </div>
  );
};

export default UserProfile;
