import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "./FlashcardCarousel.scss";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import DeleteFlashCardButton from "../components/DeleteFlashCardButton";
import UpdateFlashcardButton from "../components/UpdateFlashcardButton";

//styles for swiper:

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const FlashCardCarousel = ({ deck }) => {
  const renderCards = () => {
    return deck.map((card) => (
      <SwiperSlide key={card.id}>
        <div className="flashcard">{card.question}</div>
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
