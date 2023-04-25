/// <reference types="cypress"/>               

describe('Funcional Test', function(){
    beforeEach(() => {
        cy.visit('barrigareact.wcaquino.me')
        cy.get('[data-test="email"]').type('@cdc@')
        cy.get('[data-test="passwd"]').type('304050')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo')
        
    })

    it('Inserir Conta', () => {
      cy.get('[data-test="menu-settings"]').click()
      cy.get('[href="/contas"]').click()
      cy.get('[data-test="nome"]').type('Conta Teste45')
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
      
      })

    it('Alterar Conta', () => {
      cy.get('[data-test="menu-settings"]').click()
      cy.get('[href="/contas"]').click()
      cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .far').click()
      cy.get('[data-test="nome"]').clear().type('Conta View 1')
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso')

    })

    it('Inserir Conta repetida', () => {
      cy.get('[data-test="menu-settings"]').click()
      cy.get('[href="/contas"]').click()
      cy.get('[data-test="nome"]').type('Conta Teste7')
      cy.get('.btn').click()
      cy.get('.toast-message').should('contain', 'Resquest Failed')
      
    })
})