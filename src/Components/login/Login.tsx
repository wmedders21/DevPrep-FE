import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.scss';
import Modal from '../modal/Modal';
import { getUser, postCard } from '../../apiCalls/apiCalls'

const Checkmark =  require("./Checkmark.png");

type LoginProps = {
    user: {};
    setUser: (userInfo: {}) => void;
}

const Login: React.FC<LoginProps> = ({ user, setUser }) => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)


  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value)
  }

  const userLogin = (): void => {
    const body = {
      "email": email,
      "username": username
    }
    getUser(body)
    .then(data => setUser(data))
    .catch(() => {
      setErrorMessage('Please enter valid username and email')
    })
  
    clearInputs()
  }

  const clearInputs = () => {
    setEmail('')
    setUsername('')
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
                <p><img src={Checkmark} alt='checkmark'/>Study for your upcoming interview</p>
                <p><img src={Checkmark} alt='checkmark'/>Utilize integrated flashcards</p>
                <p><img src={Checkmark} alt='checkmark'/>Create and modify custom cards</p>
                <p><img src={Checkmark} alt='checkmark'/>See your stats on the dashboard</p>
            </div>
            <div className='right-side-container'>
                <p className='ask-login'>Please Login</p>
                <form onSubmit={(event) => {userLogin(); {event.preventDefault();}}}>
                    <input
                    required
                    className='login-input-username'
                    type='username'
                    placeholder='Username'
                    name='name'
                    value={username}
                    onChange={event => handleChangeUsername(event)}
                    />

                    <input
                    required
                    className='login-input-email'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={event => handleChangeEmail(event)}
                    />

                    <input type="submit" value='Login' className='login-button'/>
                </form>
                {errorMessage && <p className="login-error-message">{errorMessage}</p>}
                <p onClick={openModal} className='ask-signup'>New User? Sign Up</p>
            </div>
            </div>
        {showModal && <Modal setShowModal= {setShowModal}/> }
    </div>
  );
}

export default Login;
