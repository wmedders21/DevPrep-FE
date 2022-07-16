import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.scss';
import Modal from '../modal/Modal'
const userData = require("../../mock-data/login-user/loginUserRes.json");

interface LoginProps {
    user: {};
    setUser: (userInfo: {}) => void;
}

const Login: React.FC<LoginProps> = ({ user, setUser }) => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)


  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value)
  }

  const userLogin = (): void => {
    setUser(userData)

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
                <p>See your stats on the dashboard</p>
            </div>
            <div className='right-side-container'>
                <p className='ask-login'>Please Login</p>
                <form onSubmit={(event) => {userLogin(); {event.preventDefault();}}}>
                    <input
                    required
                    className='login-input-username'
                    type='text'
                    placeholder='Username'
                    name='name'
                    value={username}
                    onChange={event => handleChangeUsername(event)}
                    />

                    <input
                    required
                    className='login-input-email'
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={event => handleChangeEmail(event)}
                    />
                    
                    <input type="submit" className='login-button'/>
                </form>
                <p onClick={openModal} className='ask-signup'>New User? Sign Up</p>
                {error && <p>Please input correct email</p>}
            </div>
            </div>
        {showModal && <Modal setShowModal= {setShowModal}/> }
    </div>
  );
}

export default Login;
