import React from 'react';
import style from './Welcome.module.scss';

const Welcome = (props) => {
  const { firstName, lastName, email, isEntered } = props;

  return (
    <div className={style['root']}>
      {
        (isEntered === true) ? (
          <div className={style['profile']}>
            <div>
              <div>Hello {firstName}</div>
              <div>{lastName}</div>
              <div>{email}</div>
            </div>
          </div>
        ) : (
          <div className='initial-msg'>
            Your Profile will appear here once submitted
          </div>
        )
      }
      
    </div>
  )
}

export default Welcome;
