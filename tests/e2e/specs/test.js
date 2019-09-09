// https://docs.cypress.io/api/introduction/api.html

describe('Login Test', () => {
  it('Visits the login page', () => {
    cy.visit('/login')
    cy.contains('button', 'Googleアカウントでログイン')
  })
})
