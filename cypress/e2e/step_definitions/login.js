import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../../pages/LoginPage";
import { customerPage } from "../../pages/CustomerPage";
import { managerPage } from "@pages/ManagerPage";
import { accountPage } from "@pages/AccountPage";

Given('el usuario esta en la página de inicio de sesión', () => {
  cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
  cy.wait(10)
});

Then('visualiza el título {string}', (titleText) => {
  loginPage.verifyTitle(titleText);
  cy.wait(30)
});

When('hace click en el botón {string}', (button) => {
  if (button === "Customer Login") {
    loginPage.clickCustomerLogin();
  } else if (button === "Login") {
    customerPage.clickBtnLogin();
  } else if (button ==="Bank Manager Login") {
    loginPage.clickbankManagerLogin();
  } else if (button ==="Deposit"){
    accountPage.clickdepositBtn();
  } else if (button ==="Withdraw"){
    accountPage.clickwithdrawBtn();
  } else if (button === "Transactions"){
    accountPage.clicktransactionsBtn();
  }
});

When('selecciona {string} de la lista de clientes', (customerName) => {
  customerPage.selectCustomer(customerName);
});


Then('se visualiza el nombre del cliente {string} en la pantalla', (customerName) => {
  cy.contains(customerName).should('be.visible');
});

Then('visualiza los botones "Add Customer", "Open Account" y "Customers" habilitados',()=>{
  managerPage.verifyButtonsVisibleAndEnabled();
});

