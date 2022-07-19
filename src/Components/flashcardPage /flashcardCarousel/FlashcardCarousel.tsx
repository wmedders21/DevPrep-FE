import React, {useContext} from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "./FlashcardCarousel.scss";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import DeleteFlashCardButton from "../components/DeleteFlashCardButton";
import UpdateFlashcardButton from "../components/updateFlashcard/UpdateFlashcardButton";
import Card from '../flashcard/Flashard'
import CardContext from '../../../CardContext'

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
  const {currentCard, setCurrentCard} = useContext(CardContext)
  const swiper = useSwiper()



  const handleSlideChange = async (index: number) => {
    await setCurrentCard(deck.find((card: Card, i) => i + 1 === index))

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
        <CreateNewFlashcardButton></CreateNewFlashcardButton>
        <UpdateFlashcardButton></UpdateFlashcardButton>
        <DeleteFlashCardButton></DeleteFlashCardButton>
      </div>
    </div>
  );
};

export default FlashCardCarousel;
