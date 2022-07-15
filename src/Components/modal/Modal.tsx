import React, { useRef, useState } from 'react'
import ReactDom from 'react-dom'
import './Modal.scss'

interface ModalProps {
  setShowModal: (userInfo: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ setShowModal }) => {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const modalRef: React.MutableRefObject<undefined> = useRef();
  const closeModal = (event: any): void => {
    if (event.target === modalRef.current) {
      console.log(modalRef)
      setShowModal(false);
    }
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const userSignup = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    //post new user to data base and setShowModal(false)
  }

  return ReactDom.createPortal(
    <div className='modal-container' ref={modalRef} onClick={closeModal}>
      <div className='modal popup'>
       <h1>DevPrep Registration</h1>
       <form>
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