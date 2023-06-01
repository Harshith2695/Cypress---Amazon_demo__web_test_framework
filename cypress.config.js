const {
  defineConfig
} = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: 'https://www.amazon.in',
    port: 8080,
    testIsolation: false
  },
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,

  }


  // experimentalModifyObstructiveThirdPartyCode: false,
  // modifyObstructiveCode: false,
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: 'cypress/results',
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // }
});