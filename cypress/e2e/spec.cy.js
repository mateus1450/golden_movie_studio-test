/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#signup-firstname').type('Diogo')
    cy.get('#signup-lastname').type('Silva')
    cy.get('#signup-email').type('diogo2@gmail.com')
    cy.get('#signup-phone').type('11999999999')
    cy.get('#signup-password').type('Teste&2025')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})