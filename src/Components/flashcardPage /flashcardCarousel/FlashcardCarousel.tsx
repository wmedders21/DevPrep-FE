import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "./FlashcardCarousel.scss";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import DeleteFlashCardButton from "../components/DeleteFlashcardButton";
import UpdateFlashcardButton from "../components/UpdateFlashcardButton";
import Card from '../flashcard/Card'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";



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

const FlashCardCarousel = ({ deck }) => {
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
      >
        {renderCards()}
      </Swiper>
      <div className="carousel-bottom-nav-container">
        <CreateNewFlashcardButton></CreateNewFlashcardButton>
        <UpdateFlashcardButton></UpdateFlashcardButton>
        <DeleteFlashCardButton></DeleteFlashCardButton>
      </div>
    </div>
  );
};

export default FlashCardCarousel;
