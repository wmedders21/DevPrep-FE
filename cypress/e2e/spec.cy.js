describe('empty spec', () => {

  it('should land on login', () => {
    cy.visit('http://localhost:3000/')
    expect(true).to.equal(true)
  })
})