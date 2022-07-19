const getUser = (user) => {
  return (
    fetch('https://devprep-be.herokuapp.com/api/v1/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  )
}




export { getUser }