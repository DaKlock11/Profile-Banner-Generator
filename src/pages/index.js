import React, { useReducer } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';
import { initialState, reducer } from '../state/formReducer';
//Use this as inspiration: https://www.linkedin.com/in/benjunya

const Home = () => {
  // 1. REFACTOR TO USE useReducer()
  // 2. Separate form state and fully rendered state into their own instance
  
  const [ reducerState, dispatch ] = useReducer(reducer, initialState);
  

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
      reducerState.firstName.length < 1 || 
      reducerState.lastName.length < 1 || 
      reducerState.email.length < 6 || 
      reducerState.birthday.length < 10 || 
      reducerState.photo.length < 1 || 
      reducerState.occupation.length < 1 || 
      reducerState.city.length < 3
      ) {
        reducerState.SubmitDisabled(true);
    }
  }
  /*
  const list = document.getElementById('list');
  console.log(list.dataset.thing); // thing
  console.log(list.dataset.occupation); // programmer
  console.log(list.getAttribute('data-occupation')); // programmer
  */
  return (
    <div className={style['root']}>
      <Signup  
      onFieldNameChange={onFieldNameChange}
      isEntered={reducerState.isEntered}
      firstName={reducerState.firstName}
      lastName={reducerState.lastName}
      email={reducerState.email}
      birthday={reducerState.birthday}
      city={reducerState.city}
      occupation={reducerState.occupation}
      photo={reducerState.photo}
      reducerState={reducerState}
      dispatch={dispatch}
      />
      <div className='welcome-container'>
        <Welcome 
        className={style['welcome']}
        firstName={reducerState.firstName}
        lastName={reducerState.lastName}
        email={reducerState.email}
        birthday={reducerState.birthday}
        photo={reducerState.photo}
        onSubmit={reducerState.onSubmit}
        isEntered={reducerState.isEntered}
        city={reducerState.city}
        occupation={reducerState.occupation}
        />
      </div>
    </div>
  )
}

export default Home;
