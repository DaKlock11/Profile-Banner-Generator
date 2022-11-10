import React, { useState } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';

const Home = () => {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  let values = [
    firstName,
    lastName,
    email
  ]
  
  /*
  const onSubmit = (e) => {
    document.getElementsByClassName('submit').addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
  */
  const handleChange = (e) => {
    const setField = {
      setFirstName,
      setLastName,
      setEmail
    };
    setField["Hi" + e.target.name](e.target.value);
  }

  /*
  const handleChange = (e) => {
    e.preventDefault();
    const { name,value } = e.target;
    setValues((prev) => {
      return {...prev, [name]: value};
    });
  }
  */

  /*
  const handleFirstNameChange = (e) => {
    setFirstName({...information.firstName, [e.target.firstName]: e.target.value});
  }
  const handleLastNameChange = (e) => {
    setLastName({...information.lastName, [e.target.lastName]: e.target.value});
  }
  const handleEmailChange = (e) => {
    setEmail({...information.email, [e.target.email]: e.target.value});
  }
  */

  return (
    <div className={style['root']}>
      <Signup  
      /**
      firstName={values.firstName}
      lastName={values.lastName} 
      email={values.email} 
      handleChange={handleChange}
      */
      handleChange={handleChange}
      values={values}
      />
      <Welcome 
      firstName={values.firstName} 
      lastName={values.lastName} 
      email={values.email}
      />
    </div>
  )
}

export default Home;
