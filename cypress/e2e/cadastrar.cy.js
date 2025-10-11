/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.preencherCadastro('Mateus', 'Santos', email, '11999999999', 'Test@123')
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro de preenchimento de nome', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.intercept('POST', '/cadastro').as('cadastro')
    cy.preencherCadastro('Mateus10', 'Santos', email, '11999999999', 'Test@123')
    cy.wait('@cadastro').its('response.statusCode').should('eq', 400, 401, 402, 403, 404)
    cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })

  it('Deve validar mensagem de erro ao cadastrar com email já existente', () => {
    cy.intercept('POST', '/cadastro').as('cadastro')
    cy.preencherCadastro('Mateus', 'Santos', 'vinicius@teste.com', '11999999999', 'Test@123')
    cy.wait('@cadastro').its('response.statusCode').should('eq', 400, 401, 402, 403, 404)
    cy.get('#signup-response').should('contain', 'Este email já está cadastrado')
  })

  it('Deve validar mensagem de erro ao cadastrar por senha fraca', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.intercept('POST', '/cadastro').as('cadastro')
    cy.preencherCadastro('Mateus', 'Santos', email, '11999999999', 'teste123')
    cy.wait('@cadastro').its('response.statusCode').should('eq', 400, 401, 402, 403, 404)
    cy.get('#signup-response').should('contain', 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')
    
  })

  it('Deve Abrir registro de política de privacidade', () => {
    cy.get('a').contains('Política de Privacidade').click()
  })
})