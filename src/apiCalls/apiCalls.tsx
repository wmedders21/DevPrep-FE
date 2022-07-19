const apiCalls = {
  getCards: () => {
    return fetch("https://devprep-be.herokuapp.com/api/v1/users/3/cards")
      .then((res) => res.json())
      .catch((err) => alert(err));
  },
};

export default apiCalls;
