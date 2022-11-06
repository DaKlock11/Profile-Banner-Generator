import React from 'react';
import style from '../page_style/index.module.scss';
import cn from 'classnames';

type WelcomeProps = {
  className?: string;
}

const Welcome = (props: WelcomeProps) => {
  const { className = '' } = props;

  return (
    <div className={style['root']}>
      <div>
        <h1>Welcome!</h1>
        <div></div>
      </div>
    </div>
  )
}

export default Welcome;
