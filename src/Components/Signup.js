import React from 'react';
import style from './Signup.module.scss';


const Signup = (props) => {
  const { 
    onSubmit,
    handleSubmitDisabled,
    handleReset,
    onFieldNameChange,
    isEntered,
    firstName,
    lastName,
    email,
    birthday,
    city,
    occupation,
    //dispatch,
    //submitDisabled
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
              className={style['firstName']}
              name='firstName'
              onChange={e => {onFieldNameChange("name", e.target.value)}}
              placeholder="First Name"
              required
              type="text"
              value={firstName}
            />
            <input 
              className={style['lastName']}
              name='lastName'
              onChange={e => {onFieldNameChange("name", e.target.value)}}
              placeholder="Last Name"
              required
              type="text"
              value={lastName}
            />
            <input 
              placeholder="Email"
              className={style['email']}
              type="email"
              id="mail"
              name="email"
              value={email}
              onChange={e => {onFieldNameChange("name", e.target.value)}}
              required
            />
            <input 
              className={style['date']}
              type="date"
              name='birthday'
              onChange={e => {onFieldNameChange("name", e.target.value)}}
              value={birthday}
            />
            <input 
            placeholder='Occupation'
            className={style['occupation']}
            type="text"
            name='occupation'
            onChange={e => {onFieldNameChange("name", e.target.value)}}
            value={occupation}
            required
            />
            <input 
            placeholder='Enter closest major city to where you reside'
            className={style['location']}
            type="text"
            name='location'
            onChange={e => {onFieldNameChange("name", e.target.value)}}
            value={city}
            />
            <div>
              <div className={style['img-parent']}>
                <span>Upload a default profile image</span>
                <input 
                type="file"
                onChange={e => {onFieldNameChange("name", e.target.value)}}
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
