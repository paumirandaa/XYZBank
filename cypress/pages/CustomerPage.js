class CustomerPage{
    elements = {
        customerDropdown: () => cy.get('#userSelect'),
        loginBtn: () => cy.get('form.ng-valid > .btn'),
    }

    selectCustomer(customerName) {
        this.elements.customerDropdown().select(customerName);
    }

    customerVisible(){
        this.elements.customerDropdown().should('be.visible');
    }
    
    
    clickBtnLogin(){
        this.elements.loginBtn().click();
    }
}

export const customerPage = new CustomerPage();
