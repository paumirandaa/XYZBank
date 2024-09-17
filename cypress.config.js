const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }) 
  );
  on("before:run", () => {
    require('./cypress/support/hooks'); // Asegúrate de que la ruta es correcta
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: true,
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login",
    chromeWebSecurity: false, //desactiva la seguridad del navegador
    env: {
      allureReuseAfterSpec: true,
    },
    supportFile: false, // deshabilita el archivo de soporte

  },
});