/// <reference types="cypress"/>      
import loc from '../../support/locators'         

describe('Funcional Test', function(){
    beforeEach(() => {
        cy.visit('barrigareact.wcaquino.me')
        cy.login('@cdc@', '304050')
        cy.resetApp()
        
    })

    it('Inserir Conta', () => {
      cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.PAGINA_CONTA).click()
      cy.get(loc.CONTAS.NOME).type('Conta TESTE 99')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
      
      })

    it('Alterar Conta', () => {
      cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.PAGINA_CONTA).click()
      cy.get(loc.CONTAS.EDIT_ACCOUNT).click()
      cy.get(loc.CONTAS.NOME).clear().type('Conta View 85')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')

    })

    it('Inserir Conta repetida', () => {
     cy.get(loc.MENU.SETTINGS).click()
      cy.get(loc.MENU.PAGINA_CONTA).click()
      cy.get(loc.CONTAS.NOME).type('Conta Teste7')
      cy.get(loc.CONTAS.BTN_SALVAR).click()
      
      
      
    })
})
