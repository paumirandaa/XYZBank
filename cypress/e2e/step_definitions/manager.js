import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { managerPage } from "@pages/ManagerPage";
import { managerList } from "@pages/ManagerListPage"
import { openAccountPage } from "@pages/OpenAccount";


When('se visualizan los botones "Add Customer", "Open Account" y "Customers"', () => {
    managerPage.elements.addCustomerBtn().should('be.visible');
    managerPage.elements.openAccountBtn().should('be.visible');
    managerPage.elements.customersBtn().should('be.visible');
});

When('hace click sobre el botón {string}', (campo)=>{
    if (campo ==="Add Customer"){
        managerPage.clickAddCustomer();
    } else if (campo ==="Open Account"){
        managerPage.clickOpenAccount();
    } else if (campo ==="Customers"){
        managerPage.clickCustomers();
    }
});

When('completa el campo {string}', (campo) => {
    if (campo === "Firts Name") {
        managerPage.completeFirstName('Paula');
      } else if (campo === "Last Name") {
        managerPage.completeLastName('testing');
      } else if (campo === "Post Code") {
        managerPage.completePostCode('500');
      } 
});

Then('se visualiza una ventana emergente informando que el usuario se creo con éxito', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.include('Customer added successfully');
    })
});

Then('hace click en "Add Customer"', () => {
    managerPage.clickSubmitCustomer();
});


When('busca al cliente {string}', (customerName) => {
    cy.wait(1000)
    managerList.searchCustomer(customerName);
});

Then('elimina al cliente {string}', (customerName) => {
    managerList.deleteCustomer(customerName);
});


When('selecciona el cliente {string}', (customerName) => {
    openAccountPage.selectCustomer(customerName);
});

When('selecciona la moneda {string}', (currency) => {
    openAccountPage.selectCurrency(currency);
});

Then('hace click en "Process"', () => {
    openAccountPage.clickProcessBtn();
});

Then('se visualiza una ventana emergente informando que la cuenta fue creada con éxito', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.include('Account created successfully');
    });
});