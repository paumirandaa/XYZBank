const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración del preprocesador de Cucumber
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      // Configuración del preprocesador de esbuild
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));

      // Otros eventos personalizados si es necesario
      return config;
    },
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login',
    specPattern: 'cypress/e2e/features/*.feature', // Patrón para los archivos de características de Cucumber
    supportFile: false, // Deshabilita el archivo de soporte si no lo usas
    chromeWebSecurity: false, // Desactiva la seguridad del navegador para permitir pruebas en diferentes contextos
    env: {
      allureReuseAfterSpec: true, // Configuración específica para Allure si lo usas
    },
    defaultCommandTimeout: 50000, //50seg
    defaultpageLoadTimeout: 50000, //50seg
    execTimeout: 50000,
    pageLoadTimeout: 50000,
  },
});
