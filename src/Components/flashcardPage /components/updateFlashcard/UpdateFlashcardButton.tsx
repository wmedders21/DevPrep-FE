import React, { useState, useContext, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./UpdateFlashcard.scss";
import { UserContext, CardContext, DeckContext } from "../../../../Context";
import { patchCard } from "../../../../apiCalls/apiCalls";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5d6160",
    },
    secondary: {
      main: "#9ec7c0",
    },
    warning: {
      main: "#d32f2f",
    },
  },
});

function UpdateFlashcardButton({
  variant,
  name,
  card,
}: {
  variant: string;
  name: string;
  card?: any;
}) {
  const { currentCard, setCurrentCard } = useContext(CardContext);
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deck, setDeck } = useContext(DeckContext);

  useEffect(() => {
    if (variant === "list") {
      setQuestion(card.attributes.frontSide);
      setNotes(card.attributes.backSide);
      setRating(card.attributes.competenceRating);
    }
    if (!currentCard) {
      return;
    }
    if (variant === "carousel") {
      setQuestion(currentCard.attributes.frontSide);
      setNotes(currentCard.attributes.backSide);
      setRating(currentCard.attributes.competenceRating);
    }
  }, [currentCard]);

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    let flashcardId: number;
    if (variant === "carousel") {
      flashcardId = Number(currentCard.id);
    }

    if (variant === "list") {
      flashcardId = Number(card.id);
    }

    e.preventDefault();
    const updatedCard = {
      competenceRating: rating,
      frontSide: question,
      backSide: notes,
    };
    await patchCard(Number(user.data.userId), flashcardId, updatedCard).then(
      (res) => {
        setDeck([
          ...deck.map((card) => {
            if (card.id === res.data.id) {
              return res.data;
            } else {
              return card;
            }
          }),
        ]);
        setCurrentCard(res.data);
      }
    );
    handleClose();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          Update {name}
        </Button>
      </ThemeProvider>
      <Modal open={open} onClose={handleClose}>
        <Box component="form">
          <div className="update-form-header">
            <h3>{`Update ${name}`}</h3>
            <div className="update-flashcards-rating-container">
              <Typography
                style={{ textAlign: "center", fontSize: "2.8" }}
                component="legend"
              >
                Comfort Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(e, value) => setRating(value)}
              />
            </div>
          </div>

          <ThemeProvider theme={theme}>
            <TextField
              multiline
              color="secondary"
              variant="standard"
              label="Question"
              value={question}
              rows={6}
              onChange={(e) => setQuestion(e.target.value)}
              className="text-field update-flashcard-question"
              type="text"
            />

            <TextField
              multiline
              color="secondary"
              variant="standard"
              label="Notes"
              value={notes}
              rows={6}
              onChange={(e) => setNotes(e.target.value)}
              className="text-field update-flashcard-notes"
              type="text"
            />

            <Button
              variant="contained"
              onClick={(e) => handleSubmit(e)}
              color="primary"
            >
              Submit
            </Button>
          </ThemeProvider>
        </Box>
      </Modal>
    </>
  );
}

export default UpdateFlashcardButton;
