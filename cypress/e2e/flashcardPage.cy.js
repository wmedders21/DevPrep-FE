const { Children } = require("react");

describe('FlashcardPage', () => {
    beforeEach(() => {
		cy.intercept('GET', 'https://devprep-be.herokuapp.com/api/v1/users/1/cards', {fixture: 'cards.json'})
    cy.visit('http://localhost:3000/flashcards/behavioralCards');
		cy.get('form')
    cy.get(".login-input-username[name='name']")
      .type('cool544')
    cy.get(".login-input-email[name='email']")
      .type('cool4@gmail.com')
			.get('.login-button')
			.click()
    cy.get('.dashboard-deck-container')
    .first().click()
    cy.url().should('eq', 'http://localhost:3000/flashcards/FEtechnicalCards')

  });

  it('user should be able to navigate between decks from navbar', () => {
    cy.get('.deck-select').click()
    .get('.dd-menu-behavioral').click()
    .get('.flashcard-footer').should('contain', 'behavioral')
    .get('.deck-select').click()
    .get('.dd-menu-fe').click()
    .get('.flashcard-footer').should('contain', 'technicalFE')
    .get('.deck-select').click()
    .get('.dd-menu-be').click()
    .get('.flashcard-footer').should('contain', 'technicalBE')
  })

  it('user should see a carousel of flashcards and be able to navigate through it', () => {
    cy.get('.flashcard-front').contains('Question:')
    .get('.swiper-button-next').click()
    .get('.swiper-button-prev').click()
    cy.get('.toggle-flashcard-button').contains('Flip To Back')
  })

  it('user should be able to create a new card, update current card, or delete current card', () => {
    cy.get('.carousel-bottom-nav-container')
    .should('contain', 'Create New' )
    .should('contain', 'Update Current FlashCard' )
    .should('contain', 'Delete' )
  })

  it('user should see a list of cards from the current deck', () => {
    cy.get('.flashcard-list-container')
    .should('contain')

  })
})