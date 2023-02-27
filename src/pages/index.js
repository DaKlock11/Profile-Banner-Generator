import React, { useReducer } from 'react';
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
  
  const [ state, dispatch ] = useReducer(reducer, initialState);
  

  const onFieldNameChange = e => {
    const { value, name } = e.currentTarget;
    dispatch({
      type: 'ON_FIELD_CHANGE',
      value,
      name
    });
    console.log(value)
    console.log(name) 
  };
  
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

  const list = document.getElementById('list');
  console.log(list.dataset.thing); // thing
  console.log(list.dataset.occupation); // programmer
  console.log(list.getAttribute('data-occupation')); // programmer
  return (
    <div className={style['root']}>
      <div>hello</div>
      <Signup  
      onFieldNameChange={onFieldNameChange}
      isEntered={state.isEntered}
      firstName={state.firstName}
      lastName={state.lastName}
      email={state.email}
      birthday={state.birthday}
      city={state.city}
      occupation={state.occupation}
      photo={state.photo}
      //state={state}
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
