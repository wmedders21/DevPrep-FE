import React, { useState, useContext } from "react";
import "./FlashcardList.scss";
import Select, { StylesConfig } from "react-select";
import { DeckContext } from "../../../Context";
import DeleteFlashcardButton from "../components/deleteCard/DeleteFlashCardButton";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import UpdateFlashcardButton from "../components/updateFlashcard/UpdateFlashcardButton";
import { styled } from "@mui/material/styles";
import { Button, Divider } from '@mui/material'
import MuiGrid from "@mui/material/Grid";
import {useParams} from 'react-router-dom';

const deckNames = {
	BEtechnicalCards: "Technical Back-End Deck",
	FEtechnicalCards: "Technical Front-End Deck",
	behavioralCards: "Behavioral Deck"
}

const Grid = styled(MuiGrid)(({ theme }) => ({
	gap: '10px',
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const filters = [
  { label: "stars high-low" },
  { label: "stars low-high" },
  { label: "Js" },
];

const dropdownMenuStyles = {
  container: (provided) => ({
    ...provided,
    width: "15vw",
  }),
  option: (styles, state) => ({
    ...styles,
    height: "4vh",
    "font-size": "2vh",
  }),
  menu: (styles, state) => ({
    ...styles,
    width: "35vw",
  }),
};

const FlashcardList = () => {
  const { deck } = useContext(DeckContext);
	const { id } = useParams()

  const renderDeck = () => {
    return deck.map((card) => {
      return (
        <Grid container key={card.id}>
          <Grid item xs>
            <p className="decklist-question">{card.attributes.frontSide}</p>
          </Grid>
          <Divider style={{borderColor: '#9ec7c0'}} light={true} className='divider' orientation="vertical"></Divider>
          <Grid item xs>
            <p className="decklist-response">{card.attributes.backSide}</p>
          </Grid>
					<Divider style={{borderColor: '#9ec7c0'}} light={true} className='divider' orientation="vertical"></Divider>
          <DeleteFlashcardButton cardId={card.id} variant="list"></DeleteFlashcardButton>
          <UpdateFlashcardButton
					cardId={card.id}
            name="Card"
            variant="list"
          ></UpdateFlashcardButton>
        </Grid>
      );
    });
  };

  return (
    <div className="flashcard-list-container">
      <div className="deck-list-header">
        <h3 className="deck-list-header-deckname">{deckNames[id]}</h3>
        <Select
          className="deck-list-filter"
          styles={dropdownMenuStyles}
          placeholder={<h4>filter</h4>}
          options={filters}
        />
      </div>

      <div className="cards-list">{renderDeck()}</div>
    </div>
  );
};

export default FlashcardList;
