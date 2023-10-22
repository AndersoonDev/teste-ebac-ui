/// <reference types='cypress' />

const perfil = require('../fixtures/perfil.json')

context('' , () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    })
    
    it('Deve fazer login com sucesso', () =>{

        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', '')

        })

    it('Deve fazer login com sucesso - usando arquivo de dados', () =>{
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')

        })

    it.only('Deve fazer login com sucesso - usando fixture', () => {

        cy.fixture('perfil').then(dados => {

            cy.get('#username').type(dados.usuario, {log:false})
            cy.get('#password').type(dados.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
        })
    })
    

})


