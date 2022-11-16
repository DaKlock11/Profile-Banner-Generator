import React, { useState } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';

const Home = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ isEntered, setIsEntered ] = useState(false);
  
  const onSubmit = (e) => {
    e.preventDefault();
    setIsEntered(true);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div className={style['root']}>
      <Signup  
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleEmailChange={handleEmailChange}
      onSubmit={onSubmit}
      firstName={firstName}
      lastName={lastName}
      email={email}
      />
      <Welcome 
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
      isEntered={isEntered}
      />
    </div>
  )
}

export default Home;
