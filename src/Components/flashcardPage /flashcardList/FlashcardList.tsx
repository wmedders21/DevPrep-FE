import React from "react";
import "./FlashcardList.scss";

const FlashcardList = ({deck}) => {
	
	const renderDeck = () => {
		return deck.map(card => (
			<div key={card.id}>
				{card.question}
			</div>
		))
	}

  return <div className="flashcard-list-container">
		{renderDeck()}
	</div>;
};

export default FlashcardList;
