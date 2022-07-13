import React, { useRef } from 'react'
import ReactDom from 'react-dom'

const Modal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  }

  return ReactDom.createPortal(
    <div className='modal-container' ref={modalRef} onClick={closeModal}>
      <div className='modal'>
       <h1>MODAL</h1>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

export default Modal;