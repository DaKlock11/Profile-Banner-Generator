import React from 'react';
import style from './Signup.module.scss';


const Signup = (props) => {
  const { 
    onSubmit,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePicture,
    handleLocation,
    handleOccupation,
    handleBirthdayChange,
    handleSubmitDisabled,
    handleReset,
    isEntered,
    firstName,
    lastName,
    email,
    birthday,
    city,
    occupation,
    submitDisabled
  } = props;

  return (
    <div className={style['root']}>
      <div>
        <form 
        className={style['form']} 
        onSubmit={onSubmit}
        >
          <div className={style['parent']}>
            <header className={style['header']}>Complete this form to sign up</header>
            <input 
            placeholder="First Name"
            className={style['firstName']}
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
            />
            <input 
            placeholder="Last Name"
            className={style['lastName']}
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
            />
            <input 
            placeholder="Email"
            className={style['email']}
            type="email"
            id="mail"
            name="mail"
            value={email}
            onChange={handleEmailChange}
            required
            />
            <input 
            className={style['date']}
            type="date"
            onChange={handleBirthdayChange}
            value={birthday}
            />
            <input 
            placeholder='Occupation'
            className={style['occupation']}
            type="text"
            onChange={handleOccupation}
            value={occupation}
            />
            <input 
            placeholder='Enter closest major city to where you reside'
            className={style['location']}
            type="text"
            onChange={handleLocation}
            value={city}
            />
            <div>
              <div className={style['img-parent']}>
                <span>Upload a default profile image</span>
                <input 
                type="file"
                onChange={handlePicture}
                />
              </div>
              <div>

              </div>
            </div>
          </div>
          { (isEntered === false) ? (
            <button className={style['btn']} disabled={handleSubmitDisabled} type="submit">Submit</button>
          ) : (isEntered === true) ? (
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
