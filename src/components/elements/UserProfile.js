// @flow
import React from 'react';
import { userData } from '../../database/userData';
import SocialLinks from '../shared/SocialLinks';
import Avatar from '../shared/Avatar';
import Tags from '../shared/Tags';
import Location from '../shared/Location';

const UserProfile = () => {
  const avatarElement = userData?.avatar ? (
    <div className="mr-0 mb-3 sm:mr-6 sm:mb-0">
      <Avatar avatar={userData?.avatar} />
    </div>
  ) : null;

  const userName = [
    userData?.firstName || '',
    userData?.lastName || '',
  ].join(' ');

  const userNameElement = userData?.firstName || userData?.lastName ? (
    <h1 className="flex flex-row text-3xl text-center mb-0 leading-tight">
      {userName}
    </h1>
  ) : null;

  const positionElement = userData?.position ? (
    <div className="mb-3 font-light text-gray-600">
      {userData.position}
    </div>
  ) : null;

  const summaryLines = (userData?.summary || []).map(
    (summaryLine: string) => (
      <div key={summaryLine} className="text-center sm:text-left mb-0">
        {summaryLine}
      </div>
    ),
  );

  const summaryLinesElement = userData?.summary ? (
    <div className="mb-3 font-light">
      {summaryLines}
    </div>
  ) : null;

  const locationElement = userData?.location ? (
    <div className="mb-3 text-gray-600">
      <Location location={userData.location} />
    </div>
  ) : null;

  const tagsElement = userData?.tags ? (
    <div className="mb-6">
      <Tags tags={userData.tags} />
    </div>
  ) : null;

  const socialLinksElement = (
    <SocialLinks links={userData?.socialLinks} />
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

export default UserProfile;
