import React, { useState, FormEvent } from 'react';
import style from '../page_style/index.module.scss';
import cn from 'classnames';
import Signup from '../Components/Signup';

type IndexProps = {
  className?: string;
}

const Home = (props: IndexProps) => {
  const { className = '' } = props;

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  }
  return (
    <div className={style['root']}>
      <Signup onSubmit={onSubmit} firstName={firstName} lastName={lastName} email={email} />
    </div>
  )
}

export default Home;
