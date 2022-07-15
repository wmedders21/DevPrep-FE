describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    //intercept GET here with fixture
  })

  //should be able to visit login page
  it('should be able to visit the login page by accessing `http://localhost:3000/`', () => {
    cy.url('http://localhost:3000')
  })

  //should contain title and should contain info
  it('should be able to see welcome title and general paragraph info', () => {
    cy.get('h1')
      .should('contain', 'Welcome to DevPrep!')
    cy.get('p')
      .should('contain', 'Study for your upcoming interview')
      .should('contain', 'Integrated flashcards')
      .should('contain', 'Create and modify custom cards')
      .should('contain', 'See your stats on the dashbaord')
  })

  //should contain text to log in
  it('should be able to see text asking to log in', () => {
    cy.get('.ask-login')
      .should('contain', 'Please Login')
  })

  //should contain two input fields and check those inputs
  it('should be able to fill out two inputs of a form and check those inputs for login', () => {
    cy.get('form')
    cy.get("input[name='name']")
      .type('Igor')
      .should('have.value', 'Igor')
    cy.get("input[name='email']")
      .type('email@example.com')
      .should('have.value', 'email@example.com')
  })

  //should contain login button
  it('should be able to see login button', () => {
    cy.get('.login-button')
      .should('contain', 'Login')
  })

  //should contain sign up request text which leads to modal
  it('should be able to see sign up request for modal', () => {
    cy.get('.ask-signup')
      .should('contain', 'New User? Sign Up')
  })

  //should be able to log in with username and email filled
  it('should be able to log in with username and email filled upon clicking login button', () => {
    //cy.intercept('GET', 'url', {
    //statusCode: 200,
    //body: {
    //.....
    //}
    //})
    // cy.get('form')
    // cy.get("input[name='name']")
    //   .type('Igor')
    // cy.get("input[name='email']")
    //   .type('email@example.com')
    // cy.get('.login-button')
    //   .click()
    //need some kind of confirmation that user was logged in
    // cy.url('http://localhost:3000/dashboard')
    //  .should('exist')
  })

  //should be able to display an error message if login is unsuccessful?

})
