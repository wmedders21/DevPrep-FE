import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import Learning from '../learning/Learning';
import DeckList from '../deckList/DeckList';

const FlashcardPage = () => {
    let { id } = useParams();

    useEffect(() => {
        console.log(id)
    })

    

    return (
        <div>
            < Nav />
            <div className="dashboard-deck-container">
                <ul className="dashboard-deck-list">
                    <Link to="/flashcards/behavioral">Behavior</Link>
                    <Link to="/flashcards/technicalFE">Technical FE</Link>
                    <Link to="/flashcards/technicalBE">Technical BE</Link>
                </ul>         
                <Learning />         
                <DeckList />
            </div>
        </div>
    );
}

export default FlashcardPage;