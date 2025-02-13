const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rekaz.io/',
    viewportWidth: 1366,   // Set the width for all tests
    viewportHeight: 768,   // Set the height for all tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// https://evo.dev.theysaid.io