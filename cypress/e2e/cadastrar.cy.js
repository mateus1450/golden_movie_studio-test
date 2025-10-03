/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    cy.visit('http://localhost:8080/')
    cy.wait(2000).get('#signup-firstname').type('Diogo')
    cy.wait(2000).get('#signup-lastname').type('Silva')
    cy.wait(2000).get('#signup-email').type('diogo3@gmail.com')
    cy.wait(2000).get('#signup-phone').type('11999999999')
    cy.wait(2000).get('#signup-password').type('Teste&2025')
    cy.wait(2000).get('#signup-button').click()
    cy.wait(2000).get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
    cy.wait(2000).get('a').click()
  })
})