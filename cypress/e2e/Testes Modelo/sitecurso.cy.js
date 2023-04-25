describe('Work wuth basic elements', function(){
    beforeEach(() => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
    })

    it('Preenchendo campos de nome', () => {
        cy.get('#formNome')
            .should('not.have.value')
            .click()
            .type('Joao')
            .should('have.value', 'Joao')

        cy.get('[data-cy="dataSobrenome"]')
            .click()
            .type('Gomes')
            .should('have.value', 'Gomes')
    })

    it('Validando o campos de genero', () =>{
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')  
            .should('not.be.checked')

    })

    it('Validando checkboxes', () =>{
        cy.get('#formComidaCarne')
            .should('not.be.selected')
            .check()
            .should('be.checked')
        cy.get('#formComidaPizza')
            .should('not.be.selected')
            .check()
            .should('be.checked')
    })

    it('Escolaridade', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .should('not.be.selected')
            .select('superior')
            .should('have.value', 'superior')
     })

    it('Esportes', () => {
        cy.get('[data-testid="dataEsportes"]')
            .should('not.be.selected')
            .select(['futebol', 'Corrida'])
            
        
    }) 

    it('Sugestões', () => {
        cy.get('#elementosForm\\:sugestoes')
            .should('not.have.text')
            .type('Teste de Campo 01, 02 and 03')
            .should('have.value','Teste de Campo 01, 02 and 03') 
            
    })

    it('Validação de cadastro', () => {
        cy.get('#formCadastrar')
            .click()
    })
})
