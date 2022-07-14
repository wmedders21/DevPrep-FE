import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom'
import './Modal.scss'

const Modal = ({ setShowModal }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const modalRef = useRef();
  const closeModal = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const userSignup = (event) => {
    event.preventDefault()
    //post new user to data base and setShowModal(false)
  }

  return ReactDom.createPortal(
    <div className='modal-container' ref={modalRef} onClick={closeModal}>
      <div className='modal'>
       <h1>DevPrep Registration</h1>
       <form>
            {/* <label>Email</label> */}
            <input
              className='input-username'
              type='text'
              placeholder='Username'
              name='name'
              value={username}
              onChange={event => handleChangeUsername(event)}
            />

            <input
              className='input-email'
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={event => handleChangeEmail(event)}
            />

            <button className='signup-button' onClick={event => userSignup(event)}>Signup</button>
        </form>
        <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

export default Modal;