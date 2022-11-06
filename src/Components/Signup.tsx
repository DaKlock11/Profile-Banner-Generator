import React, { useState, FormEvent } from 'react';
import style from '../page_style/Signup.module.scss';
import cn from 'classnames';

type SignupProps = {
  className?: string;
}

const Signup = (props: SignupProps) => {
  const { className = '' } = props;

  return (
    <div className={style['root']}>
      <div>
        <form>
          <div>
            <header>Fill out this form to sign up for a profile</header>
            <input 
            placeholder='First Name'
            className={style['firstName']}
            />
            <input 
            placeholder='Last Name'
            className={style['lastName']}
            />
            <input 
            placeholder='Email'
            className={style['email']}
            />
          </div>
          <button className={style['btn']}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
