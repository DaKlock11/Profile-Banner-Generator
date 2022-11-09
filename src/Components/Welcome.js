import React from 'react';
import style from './Welcome';

const Welcome = (props) => {
  const { firstName, lastName, email } = props;

  return (
    <div className={style['root']}>
      <div>
        <h1>Welcome!</h1>
        <div>
          <div>{firstName}</div>
          <div>{lastName}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;
