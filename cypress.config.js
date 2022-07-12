const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3u4znk',
  reporter: "mochawesome",

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern :'cypress/integration/examples/*.js',
    specPattern :'cypress/integration/greenkart/*.js'

  },
  "env": {
    "url":"https://rahulshettyacademy.com/angularpractice/"
  },

  retries: {
    
    "runMode": 2,
    
    "openMode": 0
  } 

});
