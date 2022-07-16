import React, { useState, useEffect } from "react";
import "./FlashcardPage.scss";
import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import Decks from "../decks/Decks";
import FlashcardCarousel from "./flashcardCarousel/FlashcardCarousel";
import FlashcardList from "./flashcardList/FlashcardList";
const { data } = require("../../mock-data/getUsersCards.json");

const FlashcardPage = () => {
  let { id } = useParams();
  const [deckId, setDeckId] = useState("");
  const [deckEnum, setDeckEnum] = useState<null | number>(null);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    setDeckId(id);
  });

  useEffect(() => {
    switch (deckId) {
      case "behavioral":
        return setDeckEnum(0);
      case "technicalFE":
        return setDeckEnum(1);
      case "technicalBE":
        return setDeckEnum(2);
      default:
        return;
    }
  }, [deckId]);

  useEffect(() => {
    setDeck(data.attributes.cards.filter((card) => card.type === deckEnum));
  }, [deckEnum]);

  return (
    <div className="ççç">
      <Nav />
      <FlashcardCarousel deck={deck} />
      <FlashcardList deck={deck}  />
      <Decks style="flashcards" />
    </div>
  );
};

export default FlashcardPage;
