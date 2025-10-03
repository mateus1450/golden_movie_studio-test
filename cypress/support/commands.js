// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preencherCadastro', (nome, sobrenome, email, telefone, senha) => {
    cy.wait(2000).get('#signup-firstname').type(nome)
    cy.wait(2000).get('#signup-lastname').type(sobrenome)
    cy.wait(2000).get('#signup-email').type(email)
    cy.wait(2000).get('#signup-phone').type(telefone)
    cy.wait(2000).get('#signup-password').type(senha)
    cy.wait(2000).get('#signup-button').click()
})