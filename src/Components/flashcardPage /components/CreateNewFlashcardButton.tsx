import React, { useState, useContext } from 'react';
import './CreateNewFlashcardButton.scss'
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { TextField } from '@mui/material';
import createNewCard from '../../../apiCalls/apiCalls'
import UserContext from '../../../UserContext'

type Props = {}


 const theme = createTheme({})

	export default function CreateNewFlashcardButton({}: Props) {
		const { user }  = useContext(UserContext)

		let { id } = useParams();
		const [open, setOpen] = useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
		const [newCard, setNewCard] = useState({
			category: id,
			frontSide: '',
			backSide: ''
		})

		const handleSubmit = () => {
			createNewCard(newCard, user.data.userId)
		}

		return (
		  <div>
			<Button onClick={handleOpen}>Create New</Button>
			<Modal
			  open={open}
			  onClose={handleClose}
			  aria-labelledby="modal-modal-title"
			  aria-describedby="modal-modal-description"
			>
			  <Box component='form'>

				<h3>Create a new Card</h3>
					<ThemeProvider theme={theme}>
            		<TextField
						color='secondary'						
						required
						variant='standard'
						multiline
						rows={6}
						type='text'
						label='Question'
						value={newCard.frontSide}
						className='newcard-textfield-question'
						onChange={e => setNewCard({ ...newCard, frontSide: e.target.value})}
					/>
			
					<TextField						
						multiline
						color='secondary'						
						variant='standard'
						rows={6}
						type='text'
						label='Answer'
						value={newCard.backSide}
						className='newcard-textfield-answer'
						onChange={e => setNewCard({ ...newCard, backSide: e.target.value})}
					/>
					<Button color='primary' variant='contained' onSubmit={() => handleSubmit()} >Create New Card</Button>
					</ThemeProvider>
			  </Box>
			</Modal>
		  </div>
		);
	  }