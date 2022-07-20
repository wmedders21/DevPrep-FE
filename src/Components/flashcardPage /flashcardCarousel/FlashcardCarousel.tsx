import React, {useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "./FlashcardCarousel.scss";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import DeleteFlashCardButton from "../components/deleteCard/DeleteFlashCardButton";
import UpdateFlashcardButton from "../components/updateFlashcard/UpdateFlashcardButton";
import Card from '../flashcard/Flashcard'
import {DeckContext, CardContext} from '../../../Context'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const FlashCardCarousel = () => {
  const { setCurrentCard} = useContext(CardContext)
  const {deck } = useContext(DeckContext)

  const handleSlideChange = async (index: number) => {
    await setCurrentCard(deck.find((card, i) => i + 1 === index))

  }

  const renderCards = () => {
    return deck.map((card) => (
      <SwiperSlide className='flashcard' key={card.id}>
        <Card card={card}></Card>
      </SwiperSlide>
    ));
  };

  return (
    <div className="carousel-container">
      <Swiper
        className="flashcard-carousel-swiper"
        modules={[Navigation, Thumbs]}
        navigation={true}
        spaceBetween={10}
        onSlideChange={(e) => handleSlideChange(e.activeIndex)}
      >
        {renderCards()}
      </Swiper>
      <div className="carousel-bottom-nav-container">
        <CreateNewFlashcardButton variant='carousel'></CreateNewFlashcardButton>
        <UpdateFlashcardButton name="Current Card" variant='carousel'></UpdateFlashcardButton>
        <DeleteFlashCardButton variant='carousel'></DeleteFlashCardButton>
      </div>
    </div>
  );
};

export default FlashCardCarousel;
