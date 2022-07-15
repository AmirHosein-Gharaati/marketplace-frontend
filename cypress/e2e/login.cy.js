/// <reference types="cypress" />

describe('Login testing', () => {
  const backendBaseUrl = 'http://localhost:4040'
  beforeEach(() => {
    cy.log(Cypress.env())
    cy.intercept('GET', `${backendBaseUrl}/api/v2/categories/main`, {})

    cy.visit('/login')
  })

  it('should fill form and sign in', () => {
    cy.intercept('POST', `${backendBaseUrl}/api/v2/auth/token`, {
      data: '123213123123',
    })

    cy.intercept('GET', `${backendBaseUrl}/api/v2/**`, {})

    cy.get("[data-cy='login']").type('amirgh1380@gmail.com')
    cy.get("[data-cy='password']").type('password')
    cy.get("[data-cy='submit']").click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/dashboard/profile')
    })
  })
})
