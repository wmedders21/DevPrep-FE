import React, { useState } from "react";
import "./Card.scss";


type Props = {
  card: {
    id: string;
    type: string;
    attributes: {
      category: string;
      competenceRating: number;
      frontSide: string;
      backSide: string;
      userId: string;
    };
  };
};

function Card({ card }: Props) {
  const [onFront, setOnFront] = useState(true);

  const handleClick = () => {
    setOnFront(onFront ? false : true)
  };



  const renderFront = () => {
    return (
      <div className="flashcard-front">
        <h2>Question:</h2>
        <p>{card.attributes.frontSide}</p>
        <button
          onClick={() => handleClick()}
          className="toggle-flashcard-button"
        >
          Flip To Back
        </button>
        <div>
          <span>Deck Type</span>|<span>Card Number</span>
        </div>
      </div>
    );
  };

  const renderBack = () => {
    return (
      <div className="flashcard-back">
        Notes: 
        <p>{card.attributes.backSide}</p>
        <button
          onClick={() => handleClick()}
          className="toggle-flashcard-button"
        >
          Flip To Front
        </button>
        <div>
          <span>{card.attributes.category}</span>|<span>{card.id}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flashcard-container">
      {onFront ? renderFront() : renderBack()}
    </div>
  );
}

export default Card;
