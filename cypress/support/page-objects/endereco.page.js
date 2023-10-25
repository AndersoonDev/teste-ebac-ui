class EnderecoPage {

    editarEnderecoFaturamento(nome, sobrenome, pais, endereco, numero, cidade, estado, cep, celular, email) {
        //elementos + ações
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()

        cy.get('#billing_first_name').click().clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#select2-billing_country-container').click().type(pais).click()
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado).click()
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(celular)
        cy.get('#billing_email').clear().type(email)
        cy.get('.button').click()

    }

    editarEnderecoEntrega() {
        //elementos + ações
    }


}


export default new EnderecoPage() //importar a classe nos arquivos de testes