import React from 'react';
import style from './Signup.module.scss';

const Signup = (props) => {
  const { 
    handleFirstNameChange, 
    handleLastNameChange, 
    handleEmailChange,
    onSubmit 
  } = props;

  return (
    <div className={style['root']}>
      <div>
        <form className={style['form']} onSubmit={(e) => e.preventDefault()}>
          <div className={style['parent']}>
            <header className={style['header']}>Fill out this form to sign up for a profile</header>
            <input 
            placeholder='First Name'
            className={style['firstName']}
            type="text"
            minLength={2}
            onChange={handleFirstNameChange}
            />
            <input 
            placeholder='Last Name'
            className={style['lastName']}
            type="text"
            minLength={2}
            onChange={handleLastNameChange}
            />
            <input 
            placeholder='Email'
            className={style['email']}
            type="text"
            minLength={8}
            onChange={handleEmailChange}
            />
          </div>
          <button className={style['btn']} onSubmit={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
