import React, {useReducer} from 'react';
import style from './Signup.module.scss';
import { initialState, reducer } from '../state/formReducer';

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
    reducerState,
    dispatch
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
              id="firstName"
              name='firstName'
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.firstName,
                })
              }
              placeholder="First Name"
              type="text"
              value={firstName}
              //required
            />
            <input 
              className={style['lastName']}
              id="lastName"
              name='lastName'
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.lastName,
                })
              }
              placeholder="Last Name"
              type="text"
              value={lastName}
              //required
            />
            <input 
              className={style['email']}
              id="mail"
              name="email"
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.email,
                })
              }
              placeholder="Email"
              type="email"
              value={email}
              //required
            />
            <input 
              className={style['date']}
              id="birthday"
              name='birthday'
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.birthday,
                })
              }
              type="date"
              value={birthday}
            />
            <input 
              className={style['occupation']}
              id="occupation"
              name='occupation'
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.occupation,
                })
              }
              placeholder='Occupation'
              type="text"
              value={occupation}
              //required
            />
            <input 
              className={style['location']}
              id="city"
              name='city'
              onChange={e => dispatch({
                type: 'ON_FIELD_CHANGE',
                value: e.target.value,
                key: reducerState.city,
                })
              }
              placeholder='Enter closest major city'
              type="text"
              value={city}
            />
            <div>
              <div className={style['img-parent']}>
                <span>Upload a default profile image</span>
                <input 
                onChange={e => {onFieldNameChange(e)}}
                type="file"
                />
              </div>
              <div>

              </div>
            </div>
          </div>
          { (isEntered === false) ? (
            <button 
            className={style['btn']} 
            //disabled={handleSubmitDisabled} 
            type="submit"
            >
              Submit
            </button>
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
