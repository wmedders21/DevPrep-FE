describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    //intercept GET here with fixture
  })

  it('should land on login', () => {
    expect(true).to.equal(true)
  })

//should contain title


//should contain checkmarks


//should contain text to log in


//should contain two input fields and check inputs


//should contain login button


//should contain sign up request text which leads to modal


//should be able to log in with username and email filled


//should NOT be able to click login button if email is not filled


//should NOT be able to click login button if username is not filled


//should be able to display an error message if login is unsuccessful


})
