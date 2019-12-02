/// <reference types="cypress" />
it('loads page', () => {
  cy.visit('/')
  cy.contains('Example page').should('be.visible')
})
