import React from 'react';
import style from './Welcome.module.scss';

const Welcome = (props) => {
  const { firstName, lastName, email, isEntered, photo, birthday } = props;

  return (
    <div className={style['root']}>
      {
        (isEntered === true) ? (
          <div className={style['profile']}>
            <div className={style['parent']}>
              <div className={style['child']}>Hello {firstName} {lastName}</div>
              <div className={style['child']}>{email}</div>
              <div>{birthday}</div>
              <image>{photo}</image>
            </div>
          </div>
        ) : (
          <div className={style['alt-msg']}>
            Your Profile will appear here once submitted
          </div>
        )
      }
      
    </div>
  )
}

export default Welcome;
