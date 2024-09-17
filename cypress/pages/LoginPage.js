class LoginPage{
    elements = {
        title: () => cy.get('.mainHeading'),
        homeBtn: ()=> cy.get('button[ng-click="home()"]'),
        customerLoginBtn: () => cy.get('button[ng-click="customer()"]'),
        bankManagerLoginBtn: () => cy.get('button[ng-click="manager()"]'),
    }

    verifyTitle(titleText) {
        this.elements.title().should('have.text', titleText);
      }

    clickHome(){
        this.elements.homeBtn().click();
    }

    clickCustomerLogin(){
        this.elements.customerLoginBtn().click();
    }

    clickbankManagerLogin(){
        this.elements.bankManagerLoginBtn().click();
    }
}

export const loginPage = new LoginPage();
