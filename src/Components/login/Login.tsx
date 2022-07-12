// 2 inputs
// logo
// login button -> navigate to dashboard
// new user sign up -> modal pop-up

import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)


  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const userLogin = (event) => {
    event.preventDefault()

    //userarray.find (or filter)
    //if the user name and password match the database API, then user can navigate to the dashboard and we'll set current user,
    //else setError(true)


    clearInputs()
  }

  const clearInputs = () => {
    setEmail('')
  }

  return (
    <div className='login-container'>
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
      {error && <p>Please input correct email</p>}
    </div>
  );
}

export default Login;
