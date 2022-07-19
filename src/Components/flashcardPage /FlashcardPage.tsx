import React, { useState, useEffect } from "react";
import "./FlashcardPage.scss";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import Decks from "../decks/Decks";
import FlashcardCarousel from "./flashcardCarousel/FlashcardCarousel";
import FlashcardList from "./flashcardList/FlashcardList";
import apiCalls from '../../apiCalls/apiCalls'
import CardContext from '../../CardContext';
const { data } = require("../../mock-data/getUsersCards.json");
const height = window.innerHeight

 type Card = {
    id: string;
    type: string;
    attributes: {
      category: string;
      competenceRating: number;
      frontSide: string;
      backSide: string;
      userId: string;
  };
}

const FlashcardPage = () => {
  let { id } = useParams();

  const [currentCard, setCurrentCard] = useState< Card | undefined >(undefined)

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    // apiCalls.getCards().then(data => {
    //   console.log(data)
    // })
    setDeck(data[id]);
  }, [id]);

  

  return (
    <CardContext.Provider value={{currentCard, setCurrentCard}}>
    <div className="flashcards-page" style={{
      height: height
    }}>
      <Nav />
      <FlashcardCarousel deck={deck} />
      <FlashcardList deck={deck}  />
      <Decks style="flashcards" />
    </div>
    </CardContext.Provider>
  );
};

export default FlashcardPage;
