class OpenAccountPage {
    elements = {
        customerDropdown: () => cy.get('#userSelect'),
        currencyDropdown: () => cy.get('#currency'),
        processBtn: () => cy.get('button[type="submit"]')
    }

    selectCustomer(customerName) {
        this.elements.customerDropdown().select(customerName);
    }

    selectCurrency(currency) {
        this.elements.currencyDropdown().select(currency);
    }

    clickProcessBtn() {
        this.elements.processBtn().click();
    }
}

export const openAccountPage = new OpenAccountPage();
