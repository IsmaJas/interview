import React, { useContext } from 'react';
import { LoginContext } from '../../Contexts/LoginContext';

const Profile = () => {
  const { userName } = useContext(LoginContext);
  return (
    <div>
      <h1>Profile</h1>
      <h1>Username: {userName}</h1>
    </div>
  );
};

export default Profile;
