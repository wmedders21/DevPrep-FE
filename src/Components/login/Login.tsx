// 2 inputs
// logo
// login button -> navigate to dashboard
// new user sign up -> modal pop-up

import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.scss';

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)


  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const userLogin = (event) => {
    event.preventDefault()
    setUser('Ross')

    //userarray.find (or filter)
    //if the user name and password match the database API, then user can navigate to the dashboard and we'll set current user,
    //else setError(true)


    clearInputs()
  }

  const clearInputs = () => {
    setEmail('')
  }

  const openModal = () => {
    console.log('modal');

  }

  return (
    <div className='login-container'>
      {user && ( < Navigate to='/dashboard' replace /> )}
      <h1>DevPrep</h1>
      <form>
        <input
          className='input-email'
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={event => handleChangeEmail(event)}
        />

        <button className='login-button' onClick={event => userLogin(event)}>Login</button>
      </form>
      <p onClick={openModal}>New user sign up</p>
      {error && <p>Please input correct email</p>}
    </div>
  );
}

export default Login;
