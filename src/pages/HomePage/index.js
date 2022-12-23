import React, { useState, useContext } from 'react';
import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Login from '../../components/Login';
import Profile from '../../components/Profile';
import { LoginContext } from '../../Contexts/LoginContext';
import CardList from '../../components/CardList';
import { CardContext } from '../../Contexts/CardContext';
// import CardList from '../../components/CardList';

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [profile, setProfile] = useState(false);
  const [lists, setLists] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <div className="homePage">
      <Header />
      <LoginContext.Provider value={{ userName, setUserName, setProfile }}>
        {profile ? <Profile /> : <Login />}
      </LoginContext.Provider>
      {/* <CardContext.Provider value={{ lists, setLists, show, setShow }}>
        <CardList />
      </CardContext.Provider> */}

      <Footer />
    </div>
  );
};

export default HomePage;
