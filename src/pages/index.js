import React, { useState } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';

const Home = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ photo, setPhoto ] = useState('');
  const [ birthday, setBirthday ] = useState(''); 
  const [ occupation, setOccupation ] = useState('');
  const [ city, setCity ] = useState('');
  const [ isEntered, setIsEntered ] = useState(false);
  const [ submitDisabled, setSubmitDisabled ] = useState(true);
  
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

  const handleBirthdayChange = (e) => {
    e.preventDefault();
    
    setBirthday(e.target.value);
  }

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  }

  const handleLocation = (e) => {
    setCity(e.target.value)
  }

  const handlePicture = (e) => {
    console.log(e.target.files[0]);
    setPhoto(URL.createObjectURL(e.target.files[0]));
    console.log(photo);
  }

  const handleReset = (e) => {
    e.preventDefault();

    setIsEntered(false)
    setFirstName('')
    setLastName('')
    setEmail('')
    setBirthday('')
    setCity('')
    setPhoto('')
  }

  const handleSubmitDisabled = () => {
    if (
      firstName.length < 1 || 
      lastName.length < 1 || 
      email.length < 6 || 
      birthday.length < 10 || 
      photo.length < 1 || 
      occupation.length < 1 || 
      city.length < 3
      ) {
        setSubmitDisabled(true);
    }
  }

  const success = () => {
    if (document.getElementsById("mail").value === '') {
      
    }
  }

  return (
    <div className={style['root']}>
      <Signup  
      handleFirstNameChange={handleFirstNameChange}
      handleLastNameChange={handleLastNameChange}
      handleEmailChange={handleEmailChange}
      handlePicture={handlePicture}
      handleLocation={handleLocation}
      handleOccupation={handleOccupation}
      handleBirthdayChange={handleBirthdayChange}
      handleSubmitDisabled={handleSubmitDisabled}
      onSubmit={onSubmit}
      isEntered={isEntered}
      firstName={firstName}
      lastName={lastName}
      email={email}
      birthday={birthday}
      city={city}
      occupation={occupation}
      photo={photo}
      handleReset={handleReset}
      submitDisabled={submitDisabled}
      />
      <div className='welcome-container'>
        <Welcome 
        className={style['welcome']}
        firstName={firstName}
        lastName={lastName}
        email={email}
        birthday={birthday}
        photo={photo}
        onSubmit={onSubmit}
        isEntered={isEntered}
        city={city}
        occupation={occupation}
        />
      </div>
    </div>
  )
}

export default Home;
