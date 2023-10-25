const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'xxpo7g',
  e2e: {
    baseUrl: 'https://example.cypress.io/cypress-apig',
    // baseUrl: 'https://www.unip.br/',
    // baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});



