const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for HTML report
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshot0nRunFaiture = true;
      require('cypress-mochawesome-reporter/plugin')(on); //for HTML reports
    },
  },
});
