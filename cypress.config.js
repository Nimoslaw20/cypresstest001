const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 10000, 
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php/',
    //baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
