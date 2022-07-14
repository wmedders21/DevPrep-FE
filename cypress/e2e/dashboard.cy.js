describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("should land on dashboard", () => {
    cy.get(".dashboard").should("exist");
  });

  it("a user should see their username", () => {
    cy.get("h1").should("contain", "coolguy123");
  });

  it("a user should be able fill out a codewars link form", () => {
    cy.get(".form-header")
      .should("have.text", "Would you like to Link your Codewars account?")
      .get('input[name="username"]')
      .type("MichaelPutnam2")
      .should("have.value", "MichaelPutnam2")
      .get('input[type="submit"]')
      .click();
  });
});
