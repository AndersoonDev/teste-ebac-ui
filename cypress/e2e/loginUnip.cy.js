/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('aluno/central')

    });

    // afterEach(() => {
    // 	cy.screenshot()
    // });

    it.only('Deve fazer login com sucesso', () => {

        cy.get('#inputRA').type('2139529')
        cy.get('#inputSenha').type('Anderson1@', { log: false })
        cy.get('form.ng-dirty > :nth-child(3) > .btn').click()

        cy.get('.container-header > .p-2').should('contain', 'Silva')

    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', () => {

        cy.get('#inputRA').type('2139528')
        cy.get('#inputSenha').type('Anderson1@', { log: false })
        cy.get('form.ng-dirty > :nth-child(3) > .btn').click()

        cy.get('#swal2-content').should('contain', 'Senha inválida')

    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', () => {

        cy.get('#inputRA').type('2139529')
        cy.get('#inputSenha').type('Anderson1', { log: false })
        cy.get('form.ng-dirty > :nth-child(3) > .btn').click()

        cy.get('#swal2-content').should('contain', 'Senha inválida')
    })

})
