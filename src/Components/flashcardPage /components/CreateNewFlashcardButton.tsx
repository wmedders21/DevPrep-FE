import * as React from 'react';
import './CreateNewFlashcardButton.scss'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { TextField } from '@mui/material';

type Props = {}
 const theme = createTheme({})

	export default function CreateNewFlashcardButton({}: Props) {
		const [open, setOpen] = React.useState(false);
		const handleOpen = () => setOpen(true);
		const handleClose = () => setOpen(false);
		const [question, setQuestion] = React.useState<string>('')
  		const [answer, setAnswer] = React.useState<string>('')

	
		  const createNewCard = () => {
			// new card POST 
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
						value={question}
						className='newcard-textfield-question'
						onChange={e => setQuestion(e.target.value)}
					/>
			
					<TextField						
						multiline
						color='secondary'						
						variant='standard'
						rows={6}
						type='text'
						label='Answer'
						value={answer}
						className='newcard-textfield-answer'
						onChange={e => setAnswer(e.target.value)}
					/>
					<Button color='primary' variant='contained' onSubmit={() => createNewCard()} >Create New Card</Button>
					</ThemeProvider>
			  </Box>
			</Modal>
		  </div>
		);
	  }