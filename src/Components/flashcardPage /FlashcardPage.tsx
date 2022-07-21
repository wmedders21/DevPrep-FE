import React, { useState, useEffect, useContext } from "react";
import "./FlashcardPage.scss";
import { Navigate, useParams } from "react-router-dom";
import { getCards } from "../../apiCalls/apiCalls";
import Nav from "../nav/Nav";
import Decks from "../decks/Decks";
import FlashcardCarousel from "./flashcardCarousel/FlashcardCarousel";
import FlashcardList from "./flashcardList/FlashcardList";
import { UserContext, CardContext, DeckContext } from "../../Context";

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
};

export type AllDecks = {
  BEtechnicalCards: Card[];
  FEtechnicalCards: Card[];
  behavioralCards: Card[];
};

const FlashcardPage = () => {
  let { id } = useParams();
  const { user } = useContext(UserContext);

  const [currentCard, setCurrentCard] = useState<Card | undefined>(undefined);
  const [allDecks, setAllDecks] = useState<AllDecks | undefined>(undefined);

  const [deck, setDeck] = useState([]);
  useEffect(() => {
    if (!user) {
      return;
    }
    getCards(user.data.userId).then((res) => {
      setDeck(res.data[id]);
      setAllDecks(res.data);
    });
  }, [id]);

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
    <DeckContext.Provider value={{ deck, setDeck }}>
      <CardContext.Provider value={{ currentCard, setCurrentCard }}>
        <div className="flashcards-page">
          <Nav />
          <FlashcardCarousel />
          <FlashcardList />
          <Decks allDecks={allDecks} style="flashcards" />
        </div>
      </CardContext.Provider>
    </DeckContext.Provider>
  );
};

export default FlashcardPage;
