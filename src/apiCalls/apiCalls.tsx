type User = {
  "email": string,
  "username": string
}

type NewUser = {
  "username": string,
  "email": string,
  "codewarsUsername": undefined
}


const getUser = (user: User) => {
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

const postNewUser = (newUser: NewUser) => {
  return (
    fetch('https://devprep-be.herokuapp.com/api/v1/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
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




export { getUser, postNewUser }
