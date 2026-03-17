const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // (línea eliminada)
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js"
  }
});