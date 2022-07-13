// 2 inputs
// logo
// login button -> navigate to dashboard
// new user sign up -> modal pop-up

import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.scss';
import Modal from '../modal/Modal'

const Login = ({ user, setUser }: {user: string; setUser: React.Dispatch<React.SetStateAction<string>>}) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)


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
    setShowModal(prev => !prev)

  }

  return (
    <div className='main-container'>
        {user && ( < Navigate to='/dashboard' replace /> )}
        <div className='login-container'>
            <div className='left-info-container'>
                <h1>Welcome to DevPrep!</h1>
                <p>Study for your upcoming interview</p>
                <p>Integrated flashcards</p>
                <p>Create and modify custom cards</p>
                <p>See your stats on the dashbaord</p>
            </div>
            <div className='right-side-container'>
                <p>Please Login</p>
                <form>
                    {/* <label>Email</label> */}
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
                <p onClick={openModal}>New User? Sign Up</p>
                {error && <p>Please input correct email</p>}

            </div>
            </div>
        {showModal && <Modal setShowModal= {setShowModal}/> }
    </div>
  );
}

export default Login;
