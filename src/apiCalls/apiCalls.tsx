type newCard = {
	category?: string,
	frontSide?: string,
	backSide?: string
}

type User = {
	email: string;
	username: string;
};

type NewUser = {
	username: string;
	email: string;
	codewarsUsername: undefined;
};

type UpdatedCard = {
	category?: string;
	competenceRating?: number;
	frontSide?: string;
	backSide?: string;
};

type CWUpdate = {
	codewarsUsername?: string,
  username?: string
}

const getUser = (user: User) => {
	return fetch("https://devprep-be.fly.dev/api/v1/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error();
		}
	});
};

const postNewUser = (newUser: NewUser) => {
	return fetch("https://devprep-be.fly.dev/api/v1/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error();
		}
	});
};

const getCards = (userId: number) =>
fetch(`https://devprep-be.fly.dev/api/v1/users/${userId}/cards`)
.then((res) => res.json())
.catch((err) => alert(err));

const patchCard = (userId: number, cardId: number, updatedCard: UpdatedCard) =>
fetch(
	`https://devprep-be.fly.dev/api/v1/users/${userId}/cards/${cardId}`,
    {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedCard),
    }
	)
    .then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error();
		}
    })
    .catch((err) => alert(err));

const deleteCard = (userId: number, cardId: number) =>
  fetch(
    `https://devprep-be.fly.dev/api/v1/users/${userId}/cards/${cardId}`,
    {
      method: "DELETE"
    }
  ).catch((err) => alert(err));

const postCard = (newCard: newCard, id: number) => {
	return fetch(`https://devprep-be.fly.dev/api/v1/users/${id}/cards`, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(newCard),
	})
	.then((res) => res.json())
	.catch((err) => alert(err));
};

const getQuote = () => {
	return fetch ('https://devprep-be.fly.dev/api/v1/quote' )
	.then((res) => {
		if (res.ok) {
			return res.json();
		} else {
			throw new Error();
		}
    })
    .catch((err) => alert(err));
}

const updateUser = (user: CWUpdate, id: number) => {
	return fetch(`https://devprep-be.fly.dev/api/v1/users/${id}`, {
	method: "PATCH",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(user),
	})
	.then((res) => res.json())
	.catch((err) => alert(err));
}

export { getUser, postNewUser, getCards, patchCard, postCard, deleteCard, getQuote, updateUser };
