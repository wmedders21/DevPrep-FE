type newCard = {
	category: string,
	frontSide: string,
	backSide: string
}

const getCards = () => {
		return fetch('https://devprep-be.herokuapp.com/api/v1/users/3/cards').then(res => res.json()).catch(err => alert(err))
	}


const createNewCard = (newCard: newCard, userId: number) => {
	return fetch(`https://devprep-be.herokuapp.com/api/v1/users/${userId}}/cards)`, {
		method: "POST",
		body: JSON.stringify(newCard),
		headers: {
		  "Content-Type": "application/json"
		}
	  }).then(res => {
		if(res.ok) {
		  return res.json();
		} else {
		  throw new Error();
		}
	  })
	}

export default { createNewCard, getCards }

