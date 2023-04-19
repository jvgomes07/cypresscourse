/// <reference types="cypress"/>               

describe('Work wuth basic elements', function(){
    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })

    it('Find Title', () =>{
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
        })

    it('Find Text', () => {
        cy.get('.facilAchar')
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Find link', () => {
        cy.get('[href="#"]')
            .click()
        cy.get('#resultado')
            .should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado')
            .should('not.have.text', 'Voltou!')
        })
    
    it('TextFields', () =>{ 
        cy.get('#formNome') 
            .type('Joao')
            .should('have.value', "Joao")

        cy.get('[data-cy="dataSobrenome"]')
            .type('Gomes')
            .should('have.value', 'Gomes')
        
        cy.get('#elementosForm\\:sugestoes') 
            .type('teste1')
            .should('have.value', 'teste1')   
    })
   
    it('Radio Buttons', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')
            .should('not.be.checked')

        cy.get('[name=formSexo]')
            .should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaCarne')
            .check()
            .should('be.checked')
        cy.get('#formComidaFrango')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
        cy.get('#formComidaPizza')
            .check()
            .should('be.checked')
        cy.get('#formComidaVegetariana')
            .should('not.be.checked')
        cy.get('[name=formComidaFavorita]')
            .uncheck()
            .check()
            .should('be.checked')
    })
    it('Combobox', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2graucomp')
            .should('have.value', '2graucomp')
        
    })
    it.only('Combo multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
        .select(['natacao','futebol', 'Corrida', 'Karate'])
        
    })
})  