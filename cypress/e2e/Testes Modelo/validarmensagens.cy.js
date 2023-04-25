/// <reference types="cypress"/>               
beforeEach(() => {
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

describe('Alerts', function(){
    it('Capturar msg de Nome obrigatorio', ()=>{
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
        })

        cy.get('#formNome').type('Joao')
        cy.get('#formCadastrar').click()
            .then(() => {
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
            })
        
        cy.get('[data-cy="dataSobrenome"]').type('Gomes')
        cy.get('#formCadastrar').click()
            .then(() => {
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
            })
        cy.get('#formSexoMasc').check()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado!')
    })
})
