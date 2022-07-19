import React, {useState} from 'react'
import './DeleteFlashCardButton.scss';
import {Modal, Box, Button} from '@mui/material';

type Props = {}

function DeleteFlashCardButton({}: Props) {
	const [open, isOpen] = useState(false)
	const handleClose = () => {
		console.log('hello world')
	}
	return (
		<>
		<Button></Button>


			<Modal open={open} onClose={handleClose}  >
				<Box component="form">

				</Box>
			</Modal>
		</>
	)
}

export default DeleteFlashCardButton