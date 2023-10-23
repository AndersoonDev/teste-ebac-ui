/// <reference types='cypress' />

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {

        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {

        cy.fixture('preCadastro').then(dados => {

            cy.preCadastro(dados.emailFaker, dados.senhaFaker, dados.nomeFaker, dados.sobrenomeFaker)
        })
    });
});