import React from 'react';
import Card from '../card/Card';

const Learning = () => {
    return (
        <div>
            <div className="card-view-container" >
                <button>Prev</button>
                <Card />
                <button>Next</button>
            </div>
            <div className='card-edit-button-container'>
                <button className='remove-from-deck-btn' >Remove from Deck</button>
                <button className='create-new-card-btn' >Create New Card</button>
                <button className='edit-card-btn' >Edit</button>
            </div>
        </div>
        
    );
}

export default Learning;