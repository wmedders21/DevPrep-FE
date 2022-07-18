import React from 'react'
import './Card.scss'

type Props = {
  card: {
    id: string
    type: string
    attributes: {
      category: string
      competenceRating: number
      frontSide: string
      backSide: string
      userId: string
    }
  }
}

function Card({ card }: Props) {
  return (
    <div className='flashcard-container'>
      <div className='flashcard-front'>
        <input type='range' className='flashcard-front-rating' />
        <h2>Question:</h2>
        <p>Front</p>
        <button className='toggle-flashcard-button'>Flip</button>
        <label><span>Deck Type</span>|<span>Card Number</span></label>
      </div>
      <div className='flashcard-back'>
        <p>Back</p>
        <button className='toggle-flashcard-button'>Flip</button>
        <label><span>Deck Type</span>|<span>Card Number</span></label>
      </div>
    </div> 
  )
}

export default Card