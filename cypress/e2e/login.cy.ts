/// <reference types="cypress" />

describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept(
      {
        https: false,
        method: 'GET',
        path: '/categories/main',
      },
      {
        fixture: 'categories',
      }
    ).as('getCategories')

    cy.wait(['@getCategories'])
    cy.visit('http://localhost:3000/login')
  })

  it('passes', () => {})
})
