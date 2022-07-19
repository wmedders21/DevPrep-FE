import React, { useState, useContext } from "react";
import "./DeleteFlashCardButton.scss";
import { Modal, Box, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../updateFlashcard/UpdateFlashcardButton";
import { deleteCard } from "../../../../apiCalls/apiCalls";
import {UserContext, CardContext, DeckContext} from "../../../../Context";
import { Navigate } from "react-router-dom";


function DeleteFlashCardButton() {

  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen(!open);
  const { currentCard } = useContext(CardContext);
  const { user } = useContext(UserContext);
	const {deck, setDeck} = useContext(DeckContext)

	if(!user) {
		return (
			<Navigate to="/"/>
		)
	}

  const handleDelete = async () => {
		 await deleteCard(Number(user.data.userId), Number(currentCard.id)).then((res : any) => {
			if(res.ok) {
				setDeck(deck.filter(card => card.id !== currentCard.id))
			} else {
				alert(res)
			}
		})
		handleToggle()
	};

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="warning" onClick={handleToggle}>
          Delete
        </Button>
      </ThemeProvider>

      <Modal open={open} onClose={handleToggle}>
        <Box component="form">
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
