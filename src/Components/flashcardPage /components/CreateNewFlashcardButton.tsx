import React, { useState, useContext } from 'react';
import './CreateNewFlashcardButton.scss'
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { TextField } from '@mui/material';
import { postCard } from '../../../apiCalls/apiCalls'
import { UserContext } from '../../../Context'
import { theme } from '../components/updateFlashcard/UpdateFlashcardButton'

type Props = {}
type Card = {
	category: string,
	frontSide: string,
	backSide: string
}

const categories = {
	BEtechnicalCards: 'technicalBE',
	FEtechnicalCards: 'techicalFE',
	behavioralCards: 'behavioral'
}

	export default function CreateNewFlashcardButton({}: Props) {
		const { user }  = useContext(UserContext)

		let { id } = useParams();
		const [open, setOpen] = useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
		const [newCard, setNewCard] = useState({
			category: categories[id],
			frontSide: '',
			backSide: ''
		})

		const clearInputs = () => {
			setNewCard({
				category: id,
				frontSide: '',
				backSide: ''
			})
		}

		const handleClick = (e) => {
			e.preventDefault()
			postCard(newCard, user.data.userId)
			clearInputs()
		}

		const handleChange = e => {
			console.log(newCard, user.data.userId)
			setNewCard({...newCard, [e.target.name]: e.target.value})
		}

		return (
		  <>
			<ThemeProvider 
				theme={theme}>
				<Button 
					color='secondary'
					variant='contained' 
					onClick={handleOpen}>
						Create New
				</Button>
			</ThemeProvider>
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
						name='frontSide'
						onChange={e => handleChange(e)}
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
						name='backSide'
						onChange={e => handleChange(e)} 
					/>
					<Button color='primary' variant='contained' onClick={(e) => handleClick(e)} >Create New Card</Button>
					</ThemeProvider>
			  </Box>
			</Modal>
		  </>
		);
	  }