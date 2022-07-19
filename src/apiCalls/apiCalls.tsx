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

const getUser = (user: User) => {
  return fetch("https://devprep-be.herokuapp.com/api/v1/login", {
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
  return fetch("https://devprep-be.herokuapp.com/api/v1/users", {
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
  fetch(`https://devprep-be.herokuapp.com/api/v1/users/${userId}/cards`)
    .then((res) => res.json())
    .catch((err) => alert(err));

const patchCard = (userId: number, cardId: number, updatedCard: UpdatedCard) =>
  fetch(
    `https://devprep-be.herokuapp.com/api/v1/users/${userId}/cards/${cardId}`,
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

export { getUser, postNewUser, getCards, patchCard };
