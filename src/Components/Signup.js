import React from 'react';
import style from './Signup.module.scss';

const Signup = (props) => {
  const { 
    onSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePicture,
    handleBirthdayChange,
    handleReset,
    isEntered,
    firstName,
    lastName,
    email,
    photo,
    birthday
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
            <input 
            className={style['date']}
            type="date"
            onChange={handleBirthdayChange}
            value={birthday}
            />
            <div>
              <div className={style['img-parent']}>
                <span>Upload a default profile image</span>
                <input 
                type="file"
                onChange={handlePicture}
                //value={photo}
                />
              </div>
              <div>

              </div>
            </div>
          </div>
          <button className={style['btn']} type="submit">Submit</button>
          { (isEntered === true) ? (
            <div>
              <button onClick={handleReset}>Reset</button>
            </div>
            ) : <div></div>
          }
        </form>
      </div>
    </div>
  )
}

export default Signup;
