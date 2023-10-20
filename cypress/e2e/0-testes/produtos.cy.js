/// <reference types='cypress' />

const { faker } = require("@faker-js/faker");

// describe("Funcionalidade página de produtos", () => {
//   beforeEach(() => {
//     cy.visit("http://lojaebac.ebaconline.art.br/produtos/page/2/");
//   });

//   it.only("Deve selecionar um produtos da lista", () => {
//     cy.get(".product-block").last().click();
//     cy.get(".button-variable-item-XS").click();
//     cy.get(".button-variable-item-Orange").click();
//     cy.get(".input-text").type(2);

//     cy.get(".single_add_to_cart_button").click;
//   });

//   it("Deve adicionar um produto ao carrinho", () => {});
// });

//www.lojasrenner.com.br/c/masculino/camisetas/-/N-1gu70uy?s_icid=230213_MENU_MASC_CAMISETAS

describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/");
  });

  it("Deve selecionar um produtos da lista", () => {
    cy.get('[class="product-block grid"]')
      .contains("Ingrid Running Jacket")
      .click();
  });

  it.only("Deve adicionar um produto ao carrinho", () => {
    const quantidade = 3;

    cy.get('[class="product-block grid"]')
      .contains("Ingrid Running Jacket")
      .click();
    cy.wait(1000);
    cy.get(".button-variable-item-M").click();
    cy.wait(1000);
    cy.get(".button-variable-item-Orange").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should("contain", quantidade +" × “Ingrid Running Jacket” foram adicionados no seu carrinho.");
  });
});
