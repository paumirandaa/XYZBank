class ListTxPage {
    elements = {
        tbody: () => cy.get('tbody'),
        firstTransactionAmount: () => cy.get('#anchor0 > :nth-child(2)'),
        firstTransactionType: () => cy.get('#anchor0 > :nth-child(3)')
    }

    verifyTableVisible() {
        this.elements.tbody().should('be.visible');
      }
    
      verifyFirstTransactionAmount(amount) {
        this.elements.firstTransactionAmount().should('contain.text', amount);
      }
    
      verifyFirstTransactionType(type) {
        this.elements.firstTransactionType().should('contain.text', type);
      }
}


export const listTxPage = new ListTxPage();


