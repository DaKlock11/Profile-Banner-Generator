import React from 'react';
import style from './Signup.module.scss';

const Signup = (props) => {
  const { 
    onSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    firstName,
    lastName,
    email
  } = props;

  return (
    <div className={style['root']}>
      <div>
        <form 
        className={style['form']} 
        onSubmit={onSubmit}
        >
          <div className={style['parent']}>
            <header className={style['header']}>Fill out this form to sign up for a profile</header>
            <input 
            placeholder="First Name"
            className={style['firstName']}
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            />
            <input 
            placeholder="Last Name"
            className={style['lastName']}
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            />
            <input 
            placeholder="Email"
            className={style['email']}
            type="text"
            value={email}
            onChange={handleEmailChange}
            />
          </div>
          <button className={style['btn']} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
