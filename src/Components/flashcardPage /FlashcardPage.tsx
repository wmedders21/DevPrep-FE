import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../nav/Nav';

const FlashcardPage = () => {
    let { id } = useParams();

    useEffect(() => {
        console.log(id)
    })

    

    return (
        <div>
            < Nav />
            <h2>  </h2>
        </div>
    );
}

export default FlashcardPage;