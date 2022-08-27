describe("Dashboard", () => {
  before(() => {
		cy.intercept('POST', 'https://devprep-be.fly.dev/api/v1/login', { fixture: 'login.json' })
		cy.intercept("PATCH", 'https://devprep-be.fly.dev/api/v1/users/1', {fixture: 'updateUser.json'})
    cy.visit("http://localhost:3000/DevPrep-FE");
		cy.get('form')
    cy.get(".login-input-username[name='name']")
      .type('Igor')
    cy.get(".login-input-email[name='email']")
      .type('email@example.com')
			.get('.login-button')
			.click()
  });

  it("should land on dashboard", () => {
    cy.get(".dashboard").should("exist");
  });

  it("a user should see their username", () => {
    cy.get("h1").should("contain", "IgorIsDope");
  });

  it("a user should be able fill out a codewars link form", () => {
    cy.get(".form-header")
      .should("have.text", "Link Your Codewars Account")
      .get('input[name="username"]')
      .type("MichaelPutnam2")
      .should("have.value", "MichaelPutnam2")
      .get('input[type="submit"]')
      .click()
			.get('.codewars-stats-container')
			.should('contain', 'Codewars Stats')
			.find('p')
			.first()
			.should('have.text', "Username: MichaelPutnam2")
			.next()
			.find('li')
			.first()
			.should('have.text', 'java: 1234')
  });

	it('a user should be able to see a group of decks and be navigate to a flashcard page with for that deck', () => {
		cy.intercept('GET', 'https://devprep-be.fly.dev/api/v1/users/1/cards', {fixture: 'cards.json'})
		cy.get('.dashboard-deck-list')
		.find('a')
		.first()
		.click()
		.url()
		.should('equal', 'http://localhost:3000/DevPrep-FE/flashcards/behavioralCards')
	})

});
