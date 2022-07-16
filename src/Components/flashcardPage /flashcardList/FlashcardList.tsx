import React from "react";
import "./FlashcardList.scss";
import Select, { StylesConfig } from 'react-select';
const filters = [
	{ label: 'stars high-low'},
	{ label: 'stars low-high'},
	{ label: 'Js' }
]

const FlashcardList = ({deck}) => {

	const renderDeck = () => {
		return deck.map(card => (
			<div key={card.id}>
				{card.question}
			</div>
		))
	}

  return <div className="flashcard-list-container">
		<h2>{deck}</h2>
		<Select 
				className='deck-list-filter'
				placeholder={<h4>filter</h4>} 
				options={filters} />
		{renderDeck()}
	</div>;
};

export default FlashcardList;