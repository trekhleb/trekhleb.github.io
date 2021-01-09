import React from 'react';
import type { Profile as ProfileType } from '../../types/Profile';

type ProfileProps = {
  profile: ProfileType,
};

const Profile = (props: ProfileProps): React.ReactElement => {
  const { profile } = props;

  return (
    <div>
      {profile.firstName}
    </div>
  );
};

export default Profile;
