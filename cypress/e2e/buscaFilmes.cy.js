/// <reference types="cypress" />

const { TIME } = require("mysql/lib/protocol/constants/types")

describe('US-015-Funcionalidade: Busca de filmes', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer a busca de filmes', () => {
    cy.wait(2000).get('#search-input').type('jurassic')
    cy.wait(1000).get('#search-button').click()
    cy.wait(2000).get('#clear-button').click()
  })

  it('Deve fazer a busca de filmes', () => {
    cy.wait(2000).get('#search-input').type('jur')
    cy.wait(1000).get('#search-button').click()
    cy.wait(2000).get('#clear-button').click()
  })

  it('Deve fazer a busca de filmes', () => {
    cy.wait(2000).get('#search-input').type('matrix')
    cy.wait(1000).get('#search-button').click()
    cy.wait(2000).get('#clear-button').click()
  })

  it('Deve fazer a busca de filmes', () => {
    cy.wait(2000).get('#search-input').type('mar')
    cy.wait(1000).get('#search-button').click()
    cy.wait(2000).get('#clear-button').click()
  })
})