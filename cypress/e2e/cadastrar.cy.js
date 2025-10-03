/// <reference types="cypress" />

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro dos campos obrigatórios', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.preencherCadastro('Mateus', 'Santos', email, '11999999999', 'Teste@123')
    cy.wait(2000).get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro de preenchimento de nome', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.preencherCadastro('Mateus10', 'Santos', email, '11999999999', 'Teste@123')
    cy.wait(2000).get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabéticos')
  })

  it('Deve validar mensagem de erro ao cadastrar com email já existente', () => {
    cy.preencherCadastro('Mateus', 'Santos', 'vinicius@teste.com', '11999999999', 'Teste@123')
    cy.wait(2000).get('#signup-response').should('contain', 'E-mail já cadastrado no sistema')
  })

  it.only('Deve validar mensagem de erro ao cadastrar por senha fraca', () => {
    var email = `teste${Date.now()}@teste.com.br`
    cy.preencherCadastro('Mateus', 'Santos', email, '11999999999', 'teste123')
    cy.wait(2000).get('#signup-response').should('contain', 'senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial')
  })

  it('Deve Abrir registro de política de privacidade', () => {
    cy.wait(2000).get('a').contains('Política de Privacidade').click()
  })
})