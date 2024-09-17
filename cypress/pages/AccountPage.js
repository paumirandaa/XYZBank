class AccountPage{
    elements = {
        transactionsBtn: () => cy.get('button[ng-click="transactions()"]'),
        depositBtn: () => cy.get('button[ng-click="deposit()"]'),
        withdrawBtn: () => cy.get('[ng-class="btnClass3"]'),
        amountInput: () => cy.get('input[ng-model="amount"]'),
        desositBtnSubmit: () => cy.get('button[type="submit"]'),
        successMessage: () => cy.get('.error'),
        accountBalance: () => cy.get('.borderM > :nth-child(3) > :nth-child(2)'),
        withdrawSubmitBtn: () => cy.get('button[type="submit"]').contains('Withdraw'),
        amountToBeWithdrawnText: () => cy.contains('label', 'Amount to be Withdrawn :') 
    }

    clicktransactionsBtn(){
        this.elements.transactionsBtn().click();
        cy.wait(1000)
    }
    clickdepositBtn(){
        this.elements.depositBtn().click();
    }
    clickwithdrawBtn(){
        this.elements.withdrawBtn().click();
        cy.wait(1000) // Ajusta el tiempo si es necesario
    }

    amountVisible(){
        this.elements.amountInput().should('be.visible');
    }
    amountInput(amount){
        this.elements.amountInput().clear().should('be.visible').type(amount);
        cy.wait(1000); 
    }
    
    clickdepositSubmit(){
        this.elements.desositBtnSubmit().click();
        cy.wait(1000); 
    }

    clickwithdrawSubmit() {  
        this.elements.withdrawSubmitBtn().should('be.visible').click({ force: true });
        cy.wait(1000); 
    }

    verifySuccessMessage(message) {
        this.elements.successMessage().should('be.visible').should('contain.text', message);
        cy.wait(1000); // Ajusta el tiempo si es necesario
    }
    
    verifyAmountToBeWithdrawnText() {
        this.elements.amountToBeWithdrawnText().should('be.visible');
    }

    accountBalance() {
        return this.elements.accountBalance();
    }
}

export const accountPage = new AccountPage();