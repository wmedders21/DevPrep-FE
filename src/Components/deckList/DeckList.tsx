import React from 'react';
import './DeckList.scss';
import {NavLink} from 'react-router-dom';

const DeckList = ({style}) => {
    return (
        <div className={`${style}-deck-container`}>
        <ul className={`${style}-deck-list`}>
          <NavLink to="/flashcards/behavioral">Behavior</NavLink>

          <NavLink to="/flashcards/technicalFE">Technical FE</NavLink>

          <NavLink to="/flashcards/technicalBE">Technical BE</NavLink>
        </ul>
      </div>
        
    );
}

export default DeckList;