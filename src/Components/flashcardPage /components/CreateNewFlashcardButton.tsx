import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';

type Props = {}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '35vw',
	height: '80vh',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };

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
			  <Box sx={style}>

				<Rating />
				<h4>Create a new Card</h4>
				<form onSubmit={() => createNewCard()}>
					
            		<TextField						
						multiline
						rows={5}
						type='text'
						label='Question'
						value={question}
						className='newcard-textfield-question'
						onChange={e => setQuestion(e.target.value)}
					/>
			
					<TextField						
						multiline
						rows={5}
						type='text'
						label='Answer'
						value={answer}
						className='newcard-textfield-answer'
						onChange={e => setAnswer(e.target.value)}
					/>
					<input type='submit' value='Create Card' className='newcard-input-submit-btn'/>
				</form>
			  </Box>
			</Modal>
		  </div>
		);
	  }