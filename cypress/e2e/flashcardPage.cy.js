
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

  it('flashcard page url path should correspond wi', () => {
    cy.url().should('eq', 'http://localhost:3000/flashcards/behavioralCards')
  })
})