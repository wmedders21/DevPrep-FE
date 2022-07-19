describe('empty spec', () => {
  before(() => {
    cy.visit("http://localhost:3000/");
		cy.get('form')
    cy.get(".login-input-username[name='name']")
      .type('Igor')
    cy.get(".login-input-email[name='email']")
      .type('email@example.com')
			.get('.login-button')
			.click()
  });

    it('User should see several navigation options, home, signout, decks', () => {
        cy.get('.nav').contains('DevPrep')
        .get('.nav').contains('Home')
        .get('.nav').contains('Decks')
        .get('.nav').contains('Logout')
        
    })

    it('User should be able to navigate to different decks with dropdown menu', () => {
        cy.get('.deck-select').contains('Decks')
        cy.get('.deck-select').click()
        cy.get('.dd-menu').contains('Technical Back End')
        cy.get('.dd-menu-be').click()
        .url().should('eq', 'http://localhost:3000/flashcards/technicalBE')
        cy.get('.deck-select').click()
        cy.get('.dd-menu-behavioral').click()
        .url().should('eq', 'http://localhost:3000/flashcards/behavioral')
    })

      // it('User should be able to signout, which will take them to login page', () => {
      //   cy.url().should('eq', 'http://localhost:3000/dashboard')
      //   cy.get('.signout-button').click()
      //   cy.url().should('eq', 'http://localhost:3000/')
      //   cy.get('.login-container').contains('Please Login')
      //   cy.get('.left-info-container').contains('Welcome to DevPrep!')
      // })
      
    })
