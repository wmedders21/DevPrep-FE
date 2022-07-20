import React from 'react';
import './Decks.scss';
import {NavLink} from 'react-router-dom';

const Decks = ({style}) => {



    return (
        <div className={`${style}-deck-container`}>
        <ul className={`${style}-deck-list`}>
          <h2>Choose Your Deck</h2>
          <NavLink to="/flashcards/behavioralCards">Behavior</NavLink>

          <NavLink to="/flashcards/FEtechnicalCards">Technical FE</NavLink>

          <NavLink to="/flashcards/BEtechnicalCards">Technical BE</NavLink>
        </ul>
      </div>
        
    );
}

export default Decks;