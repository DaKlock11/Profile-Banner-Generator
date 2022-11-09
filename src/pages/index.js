import React, { useState } from 'react';
import style from '../page_style/index.module.scss';
import Signup from '../components/Signup';
import Welcome from '../components/Welcome';

const Home = () => {

  //const [ firstName, setFirstName ] = useState('');
  //const [ lastName, setLastName ] = useState('');
  //const [ email, setEmail ] = useState('');
  const [ information, setInformation ] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })
  
  const onSubmit = (e) => {
    document.getElementsByClassName('submit').addEventListener("click", (e) => {
      e.preventDefault();
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name,value } = e.target;
    setInformation((prev) => {
      return {...prev, [name]: value};
    });
  }

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
      onSubmit={onSubmit} 
      firstName={information.firstName}
      lastName={information.lastName} 
      email={information.email} 
      handleChange={handleChange}
      />
      <Welcome 
      firstName={information.firstName} 
      lastName={information.lastName} 
      email={information.email}
      handleChange={handleChange}
      />
    </div>
  )
}

export default Home;
