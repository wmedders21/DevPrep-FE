import React, { useState } from "react";
import "./FlashcardList.scss";
import Select, { StylesConfig } from 'react-select';
import apiCalls from "../../../apiCalls/apiCalls";

const filters = [
	{ label: 'stars high-low'},
	{ label: 'stars low-high'},
	{ label: 'Js' }
]

const FlashcardList = ({deck}) => {

	const renderDeck = () => {
		console.log(deck,'deck')
		const deckList = deck.map(card => (
			<div className={`decklist-card ${card.category}`} key={card.id}>
				<p className='decklist-question'>Question: {card.question}</p>
				<p className='decklist-response'>Response: {card.answer}</p>
				<button className='remove-card-btn' name='delete' onClick={() => true}>Remove From Deck</button>
				<button className='edit-card-btn' name='edit' onClick={() => true}>Edit</button>
			</div>
		))
		if (!deck[0]) {
		return <p>nothing here</p>
		}
		return deckList
	}

  return (
	<div className="flashcard-list-container">
		<div className='deck-list-header'>
			<h2>{deck.name}</h2>
			<Select 
				className='deck-list-filter'
				placeholder={<h4>filter</h4>} 
				options={filters} />			
		</div>
		<div className='cards-list'>
			{renderDeck()}
		</div>
	</div>
  )
};

export default FlashcardList;