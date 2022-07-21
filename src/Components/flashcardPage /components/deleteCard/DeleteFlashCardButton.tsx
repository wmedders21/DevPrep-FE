import React, { useState, useContext } from "react";
import "./DeleteFlashCardButton.scss";
import { Modal, Box, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../updateFlashcard/UpdateFlashcardButton";
import { deleteCard } from "../../../../apiCalls/apiCalls";
import { UserContext, CardContext, DeckContext } from "../../../../Context";
import { Navigate } from "react-router-dom";

function DeleteFlashCardButton({
  variant,
  cardId,
}: {
  variant: string;
  cardId?: number;
}) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const { currentCard } = useContext(CardContext);
  const { user } = useContext(UserContext);
  const { deck, setDeck } = useContext(DeckContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  const handleDelete = async () => {
    let id: number;
    if (variant === "list") {
      id = Number(cardId);
    } else if (variant === "carousel") {
      id = Number(currentCard.id);
    }

    await deleteCard(Number(user.data.userId), id).then((res: any) => {
      if (res.ok) {
        setDeck([...deck.filter((card) => Number(card.id) !== id)]);
      } else {
        alert(res);
      }
    });
    handleToggle();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="warning" onClick={handleToggle}>
          Delete
        </Button>
      </ThemeProvider>

      <Modal open={open} onClose={handleToggle}>
        <Box style={{ height: "30vh" }} component="form">
          <h3>Are you sure you want to delete this card?</h3>
          <ThemeProvider theme={theme}>
            <Button
              className="delete-button"
              variant="contained"
              color="warning"
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              className="return-button"
              variant="contained"
              color="primary"
              onClick={handleToggle}
            >
              No
            </Button>
          </ThemeProvider>
        </Box>
      </Modal>
    </>
  );
}

export default DeleteFlashCardButton;
