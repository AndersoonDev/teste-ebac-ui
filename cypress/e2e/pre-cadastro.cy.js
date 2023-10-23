/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');

describe("Funcionalidade Pré Cadastro", () => {
    beforeEach(() => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    });

    it("Deve completar o pré cadastro com sucesso", () => {

        const nomeFaker = faker.person.firstName()
        const sobrenomeFaker = faker.person.lastName()
        const emailFaker = faker.internet.email(nomeFaker)
        const senhaFaker = faker.internet.password()

        // cy.get('#reg_password').type('tester1000@1000')
        // cy.get('#reg_email').type('tester1000@teste.com')
        cy.get("#reg_email").type(emailFaker);
        cy.get("#reg_password").type(senhaFaker);
        cy.get(":nth-child(4) > .button").click();

        cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
        cy.get("#account_first_name").type(nomeFaker);
        cy.get("#account_last_name").type(sobrenomeFaker);
        cy.get(".woocommerce-Button").click();

        cy.get(".woocommerce-MyAccount-content").should(
            "contain",
            "Detalhes da conta modificados com sucesso."
        );
    });

    it.only('Deve completar o pré-cadastro com sucesso - usando comandos customizados', () => {

        const emailFaker2 = faker.internet.email()

        cy.preCadastro(emailFaker2, 'senha@senha!', 'Anderson', 'Silva')


    })

})