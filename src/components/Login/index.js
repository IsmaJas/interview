import React, { useContext } from 'react';
import { LoginContext } from '../../Contexts/LoginContext';

const Login = () => {
  const { setUserName, setProfile } = useContext(LoginContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Login..."
        onChange={(e) => {
          setUserName(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setProfile(true);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
