describe("Dashboard", () => {
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

  it("should land on dashboard", () => {
    cy.get(".dashboard").should("exist");
  });

  it("a user should see their username", () => {
    cy.get("h1").should("contain", "coolguy123");
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

	it('a user should be able to see a group of decks and be navigate to a flashcard page witht for that deck', () => {
		cy.get('.dashboard-deck-list')
		.find('a')
		.first()
		.click()
		.url()
		.should('equal', 'http://localhost:3000/flashcards/behavioral')
		.get('.appName > h2')
		.click()
	})

	it('a user should be able to see charts regarding their progress in the 3 different decks', () => {
		cy.get('.flashcard-statistics')
		.find('canvas')
		.should('exist')
	})
});
