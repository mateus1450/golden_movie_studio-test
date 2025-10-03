/// <reference types="cypress" />

const { TIME } = require("mysql/lib/protocol/constants/types")

describe('US-015-Funcionalidade: Busca de filmes', () => {
  it('Deve fazer a busca de filmes', () => {
    cy.visit('http://localhost:8080/')
    cy.wait(2000).get('#search-input').type('jurassic')
    cy.wait(2000).get('#search-button').click()
    cy.get('#clear-button').click()
  })
})