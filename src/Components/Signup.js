import React from 'react';
import style from './Signup.module.scss';

const Signup = (props) => {
  const { 
    handleChange,
    values,
    onSubmit 
  } = props;

  return (
    <div className={style['root']}>
      <div>
        <form 
        className={style['form']} 
        onSubmit={(e) => e.preventDefault()}
        onChange={handleChange}
        >
          <div className={style['parent']}>
            <header className={style['header']}>Fill out this form to sign up for a profile</header>
            <input 
            placeholder={values.firstName}
            className={style['firstName']}
            type="text"
            minLength={2}
            />
            <input 
            placeholder={values.lastName}
            className={style['lastName']}
            type="text"
            minLength={2}
            />
            <input 
            placeholder={values.email}
            className={style['email']}
            type="text"
            minLength={8}
            />
          </div>
          <button className={style['btn']} onSubmit={onSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
