import React, { useState, useEffect } from "react";
import "./FlashcardPage.scss";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import Decks from "../decks/Decks";
import FlashcardCarousel from "./flashcardCarousel/FlashcardCarousel";
import FlashcardList from "./flashcardList/FlashcardList";
import apiCalls from '../../apiCalls/apiCalls'
const { data } = require("../../mock-data/getUsersCards.json");
const height = window.innerHeight

const FlashcardPage = () => {
  let { id } = useParams();



  const [deck, setDeck] = useState([]);

  useEffect(() => {
    // apiCalls.getCards().then(data => {
    //   console.log(data)
    // })
    setDeck(data[id]);
  }, [id]);

  

  return (
    <div className="flashcards-page" style={{
      height: height
    }}>
      <Nav />
      <FlashcardCarousel deck={deck} />
      <FlashcardList deck={deck}  />
      <Decks style="flashcards" />
    </div>
  );
};

export default FlashcardPage;
