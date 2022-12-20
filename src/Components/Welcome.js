import React from 'react';
import style from './Welcome.module.scss';

const Welcome = (props) => {
  const { firstName, lastName, email, isEntered, photo, birthday, city, occupation } = props;

  return (
    <div className={style['root']}>
      {
        (isEntered === true) ? (
          <div className={style['profile']}>
            <div className={style['parent']}>
              <div className={style['child']}>Hello {firstName} {lastName}</div>
              <div className={style['child']}>{email}</div>
              <div className={style['child']}>{city}</div>
              <div className={style['child']}>{birthday}</div>
              <div className={style['child']}>{occupation}</div>
              <img width='50px' height='50px' src={photo} alt="default" />
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
