import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../nav/Nav';

const FlashcardPage = () => {
    let { deckId } = useParams();

    

    return (
        <div>
            < Nav />
            <h2>  </h2>
        </div>
    );
}

export default FlashcardPage;