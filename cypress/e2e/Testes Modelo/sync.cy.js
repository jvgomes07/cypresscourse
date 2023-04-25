/// <reference types="cypress"/>               

describe('Sincronismo', function(){
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Retrys', () => {
        cy.get('#novoCampo')
            .should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('Teste')
        })
    it('Find elements', () => {
        cy.get('#buttonListDOM').click()
    cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li')
            .should('contain', 'Item 2')


    })

    it.only('Timeout', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
    })

})
    