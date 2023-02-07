import React, { useState, useReducer, useCallback } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';
//Use this as inspiration: https://www.linkedin.com/in/benjunya

function reducer (state, action) {
  switch(action.type) {
    case 'ON_FIELD_CHANGE': {
      const { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    }

    default: {
      return state;
    }
  }
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  photo: '',
  birthday: '',
  occupation: '',
  city: '',
  isEntered: false,
  submitDisabled: true
}

const Home = () => {
  // 1. REFACTOR TO USE useReducer()
  // 2. Separate form state and fully rendered state into their own instance
  /*
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ photo, setPhoto ] = useState('');
  const [ birthday, setBirthday ] = useState(''); 
  const [ occupation, setOccupation ] = useState('');
  const [ city, setCity ] = useState('');
  const [ isEntered, setIsEntered ] = useState(false);
  const [ submitDisabled, setSubmitDisabled ] = useState(true);
  */
  const [ dispatch, state ] = useReducer(reducer, initialState);
  
  const onFieldNameChange = e => {
    const { value, name } = e.currentTarget;
    dispatch({
      type: 'ON_FIELD_CHANGE',
      value,
      name
    });
  };
  
  /*
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
  */
  const handleSubmitDisabled = () => {
    if (
      state.firstName.length < 1 || 
      state.lastName.length < 1 || 
      state.email.length < 6 || 
      state.birthday.length < 10 || 
      state.photo.length < 1 || 
      state.occupation.length < 1 || 
      state.city.length < 3
      ) {
        state.SubmitDisabled(true);
    }
  }
  /*
  const success = () => {
    if (document.getElementsById("mail").value === '') {

    }
  }
  */
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
      onFieldNameChange={onFieldNameChange}
      isEntered={state.isEntered}
      firstName={state.firstName}
      lastName={state.lastName}
      email={state.email}
      birthday={state.birthday}
      city={state.city}
      occupation={state.occupation}
      photo={state.photo}
      handleReset={handleReset}
      submitDisabled={submitDisabled}
      />
      <div className='welcome-container'>
        <Welcome 
        className={style['welcome']}
        firstName={state.firstName}
        lastName={state.lastName}
        email={state.email}
        birthday={state.birthday}
        photo={state.photo}
        onSubmit={state.onSubmit}
        isEntered={state.isEntered}
        city={state.city}
        occupation={state.occupation}
        />
      </div>
    </div>
  )
}

export default Home;
