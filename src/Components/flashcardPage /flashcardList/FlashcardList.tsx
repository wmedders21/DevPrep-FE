import React, { useState, useContext, useEffect } from "react";
import "./FlashcardList.scss";
import Select from "react-select";
import { DeckContext } from "../../../Context";
import DeleteFlashcardButton from "../components/deleteCard/DeleteFlashCardButton";
import CreateNewFlashcardButton from "../components/CreateNewFlashcardButton";
import UpdateFlashcardButton from "../components/updateFlashcard/UpdateFlashcardButton";
import { styled } from "@mui/material/styles";
import { Divider, Rating } from "@mui/material";
import MuiGrid from "@mui/material/Grid";
import { useParams } from "react-router-dom";

const deckNames = {
  BEtechnicalCards: "Technical Back-End Deck",
  FEtechnicalCards: "Technical Front-End Deck",
  behavioralCards: "Behavioral Deck",
};

const Grid = styled(MuiGrid)(({ theme }) => ({
  gap: "10px",
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const filters = [
  { label: "stars high-low" },
  { label: "stars low-high" }
];

const dropdownMenuStyles = {
  container: (provided) => ({
    ...provided,
  }),
  option: (styles, state) => ({
    ...styles,
    height: "4vh",
    fontSize: "2vh",
  }),
  menu: (styles, state) => ({
    ...styles,
    width: "35vw",
    backgroundColor: 'black',
    color: 'white'
  }),
};

const FlashcardList = () => {
  const { deck, setDeck } = useContext(DeckContext);
  const { id } = useParams();
  const [deckList, setDeckList] = useState(deck)

  useEffect(() => {
    setDeckList(deck)
  }, [deck])

  const handleSort = (label: string) => {
    switch (label) {
      case "stars high-low":
        setDeckList([
          ...deckList.sort(
            (
              b: { attributes: { competenceRating: number } },
              a: { attributes: { competenceRating: number } }
            ) => {
              return (
                a.attributes.competenceRating - b.attributes.competenceRating
              );
            }
          ),
        ]);
        break;
      case "stars low-high":
        setDeck([
          ...deckList.sort(
            (
              a: { attributes: { competenceRating: number } },
              b: { attributes: { competenceRating: number } }
            ) => {
              return (
                a.attributes.competenceRating - b.attributes.competenceRating
              );
            }
          ),
        ]);
        break;
      default:
        return
    }
  };

  const renderDeck = () => {
    return deckList.map((card) => {
      return (
        <Grid container key={card.id}>
          <Grid style={{width: '2vw'}} item xs md={1.2}>
            <Rating readOnly value={card.attributes.competenceRating}></Rating>
          </Grid>
          <Divider
            style={{ borderColor: "#9ec7c0" }}
            light={true}
            className="divider"
            orientation="vertical"
          ></Divider>
          <Grid item xs>
            <p className="decklist-question">{card.attributes.frontSide}</p>
          </Grid>
          <Divider
            style={{ borderColor: "#9ec7c0" }}
            light={true}
            className="divider"
            orientation="vertical"
          ></Divider>
          <Grid item xs>
            <p className="decklist-response">{card.attributes.backSide}</p>
          </Grid>
          <Divider
            style={{ borderColor: "#9ec7c0" }}
            light={true}
            className="divider"
            orientation="vertical"
          ></Divider>
          <DeleteFlashcardButton
            cardId={card.id}
            variant="list"
          ></DeleteFlashcardButton>
          <UpdateFlashcardButton
            card={card}
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
          onChange={(e) => {handleSort(e.label)}}
          // value={filter}
        />
      </div>
      <div className="cards-list">{renderDeck()}</div>
      <CreateNewFlashcardButton variant="list"></CreateNewFlashcardButton>
    </div>
  );
};

export default FlashcardList;
