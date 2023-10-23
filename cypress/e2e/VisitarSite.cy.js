describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.unip.br/aluno/central/')
    cy.get('#inputRA').type('2139529')
    cy.get('#inputSenha').type('Anderson1@')
    cy.get('form.ng-dirty > :nth-child(3) > .btn').click()
  })
})