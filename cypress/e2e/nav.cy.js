describe('empty spec', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/dashboard')
    })

    it('User should see several navigation options, home, signout, decks', () => {
        cy.get('.nav').contains('DEVPREP')
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

      it('User should be able to signout, which will take them to login page', () => {
        cy.url().should('eq', 'http://localhost:3000/')
        cy.get('.signout-button').click()

      })
    })
