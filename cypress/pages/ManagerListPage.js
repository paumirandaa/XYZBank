class ManagerListPage {
    elements = {
        searchCustomerInput: () => cy.get('input[ng-model="searchCustomer"]'),
        customerTableRows: () => cy.get('table tbody tr'),
        deleteBtn: () => cy.get(':nth-child(5) > button')
    }

    searchCustomer(customerName) {
        this.elements.searchCustomerInput().clear().type(customerName);
        // Espera explícita hasta que el cliente aparezca en la tabla
        cy.get('table tbody tr').should('contain.text', customerName, { timeout: 10000 });
    }
    
    deleteCustomer() {
        this.elements.deleteBtn().should('be.visible', { timeout: 10000 }).click(); 
    }

    verifyCustomerDeleted(customerName) {
        this.elements.customerTableRows().should('not.contain', customerName);
    }
}

export const managerList = new ManagerListPage();
