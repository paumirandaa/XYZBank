class ManagerPage{
    elements = {
        addCustomerBtn: () => cy.get('button[ng-click="addCust()"]'),
        openAccountBtn: () => cy.get('button[ng-click="openAccount()"]'),
        customersBtn: () => cy.get('button[ng-click="showCust()"]'),
        firstNameInput: () => cy.get('input[ng-model="fName"]'),
        lastNameInput: () => cy.get('input[ng-model="lName"]'),
        postCodeInput: () => cy.get('input[ng-model="postCd"]'),
        submitCustomerBtn: () => cy.get('form.ng-dirty > .btn')

    }
    verifyButtonsVisibleAndEnabled() {
        this.elements.addCustomerBtn().should('be.visible').and('be.enabled');
        this.elements.openAccountBtn().should('be.visible').and('be.enabled');
        this.elements.customersBtn().should('be.visible').and('be.enabled');
    }
    clickAddCustomer(){
        this.elements.addCustomerBtn().click();
    }

    clickOpenAccount(){
        this.elements.openAccountBtn().click();
    }
    clickCustomers(){
        this.elements.customersBtn().click();
    }

    completeFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    completeLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    completePostCode(postCode) {
        this.elements.postCodeInput().type(postCode);
    }

    clickSubmitCustomer() {
        this.elements.submitCustomerBtn().click();
    }
}
export const managerPage = new ManagerPage();

