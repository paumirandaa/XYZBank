
// Import commands.js using ES2015 syntax:
import './commands'
import './hooks';     // Importa tus hooks personalizados

// Configuración global para Cypress
Cypress.on('uncaught:exception', (err, runnable) => {
  // Evita que los errores de excepciones no controladas fallan la prueba
  return false;
});

