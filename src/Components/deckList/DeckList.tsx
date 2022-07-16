import React from 'react';
import Select, { StylesConfig } from 'react-select';
const filters = [
    { label: 'stars high-low'},
    { label: 'stars low-high'},
    { label: 'Js' }
]
const DeckList = () => {
    const deckList = []
    return (
        <div className='deck-list-container'>
            <div className='deck-list-header'>
                <h3 className='deck-list-name'>List</h3>
                <Select 
                        className='deck-list-filter'
                        // styles={''} 
                        placeholder={<h4>filter</h4>} 
                        options={filters} />
            </div>
        </div>
        
    );
}

export default DeckList;