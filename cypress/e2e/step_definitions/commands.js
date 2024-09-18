import { loginPage } from "../../pages/LoginPage";
import { customerPage } from "../../pages/CustomerPage";
import { managerPage } from "@pages/ManagerPage";
import { accountPage } from "@pages/AccountPage";

Cypress.Commands.add('loginAsCustomer', (customerName) => {
    // Visita la página de inicio de sesión
    loginPage.clickCustomerLogin();
    customerPage.selectCustomer(customerName);
    // Hace clic en el botón login
    customerPage.clickBtnLogin();
});


Cypress.Commands.add('realizarDeposito', ()=>{
    accountPage.clickdepositBtn();
    accountPage.amountVisible();
    accountPage.amountInput('500');
    accountPage.clickdepositSubmit();
});

Cypress.Commands.add('loginAsManager', (customerName) => {
    // Visita la página de inicio de sesión
    loginPage.clickbankManagerLogin();
    managerPage.elements.addCustomerBtn().should('be.visible');
    managerPage.elements.openAccountBtn().should('be.visible');
    managerPage.elements.customersBtn().should('be.visible');
});