const { Children } = require("react");

describe('FlashcardPage', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://devprep-be.herokuapp.com/api/v1/login', { fixture: 'login.json' })
      cy.visit("http://localhost:3000/");
      cy.get('form')
      cy.get(".login-input-username[name='name']")
        .type('Igor')
      cy.get(".login-input-email[name='email']")
        .type('email@example.com')
        .get('.login-button')
        .click()
      cy.intercept('GET', 'https://devprep-be.herokuapp.com/api/v1/users/1/cards', {fixture: 'cards.json'})
    .get('[href="/flashcards/behavioralCards"]').click()
    .url().should('eq', 'http://localhost:3000/flashcards/behavioralCards')
  });

  it.skip('user should be able to navigate app pages with app icon or buttons', () => {
    cy.get('.appName > h2').click()
    .url().should('eq', 'http://localhost:3000/dashboard')
    cy.get('[href="/flashcards/behavioralCards"]').click()
    .url().should('eq', 'http://localhost:3000/flashcards/behavioralCards')
    cy.get('.signout-button > .nav-button').click()
    .url().should('eq', 'http://localhost:3000/login')
  })

  it('user should be able to navigate between decks from navbar', () => {
    cy.get('.deck-select').click()
    .get('.dd-menu-behavioral').click()
    .get('.flashcard-footer')
    .should('contain', 'behavioral')
    .get('.deck-select').click()
    .get('.dd-menu-fe').click()
    .get('.flashcard-footer')
    .should('contain', 'technicalFE')
    .get('.deck-select').click()
    .get('.dd-menu-be').click()
    .get('.flashcard-footer')
    .should('contain', 'technicalBE')
  })

  it('user should see a carousel of flashcards and be able to navigate through it', () => {
    cy.get('.flashcard-footer > :nth-child(2)')
    .should('contain', "912")
    .get('.swiper-button-next').click()
    cy.get('.flashcard-footer > :nth-child(2)')
    .should('contain', '913')
    .get('.swiper-button-prev').click()
    cy.get('.flashcard-footer > :nth-child(2)')
    .should('contain', "912")
    cy.get('.swiper-slide-active > .flashcard-container > .flashcard-front > .MuiButton-root').click()
    cy.get('.flashcard-back > h2')
    .should('be.visible')
    cy.get('.flashcard-back > .MuiButton-root').click()
    cy.get('.flashcard-front > h2')
    .should('be.visible')
  })

  it('user should be able to create a new card', () => {
    cy.get('.carousel-bottom-nav-container > :nth-child(1)').click()
    cy.get('.newcard-textfield-question > .MuiInput-root').click()
    .type('Is this test working?')
    .should('contain', 'Is this test working?')
    cy.get('.newcard-textfield-answer > .MuiInput-root').click()
    .type('Yep!')
    .should('contain', 'Yep!')
    cy.intercept('POST', 'https://devprep-be.herokuapp.com/api/v1/users/1/cards', { fixture: "newCard.json"})
    cy.get('.MuiBox-root > .MuiButton-root').click()
  })

  it('user should be able to edit and delete the current card', () => {
    cy.get('.carousel-bottom-nav-container > :nth-child(2)').click()
    cy.get('.update-flashcard-question > .MuiInput-root').click()
    .type(' testing, testing, 123')
    .should('include.text', 'testing, testing, 123')
    cy.get('[for=":rv:"]').click()
    cy.intercept('PATCH', 'https://devprep-be.herokuapp.com/api/v1/users/1/cards/1', { fixture: "editCard.json"})
    cy.get('.MuiBox-root > .MuiButton-root').click()
    cy.get('.flashcard-front > p')
    .should('include.text', 'testing, testing, 123')
    cy.intercept('DELETE', 'https://devprep-be.herokuapp.com/api/v1/users/1/cards/1', { fixture: "deleteCard.json"})
    cy.get('.MuiButton-containedWarning').click()
    
  })



  it.skip('user should see a list of cards from the current deck', () => {
    cy.get('.flashcard-list-container')
    .should('contain')

  })
})