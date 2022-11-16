import React from 'react';
import style from './Welcome.module.scss';

const Welcome = (props) => {
  const { firstName, lastName, email, isEntered } = props;

  return (
    <div className={style['root']}>
      {
        (isEntered === true) ? (
          <div>
            <h1>Welcome!</h1>
            <div>
              <div>Hello {firstName}</div>
              <div>{lastName}</div>
              <div>{email}</div>
            </div>
          </div>
        ) : (
          <div>
            Your Profile will appear here once submitted
          </div>
        )
      }
      
    </div>
  )
}

export default Welcome;
