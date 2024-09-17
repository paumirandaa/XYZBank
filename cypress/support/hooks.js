import { loginPage } from '../pageObjects/LoginPage';
import { customerPage } from '../pageObjects/CustomerPage';
import { accountPage } from '../pageObjects/AccountPage';

Before({ tags: '@depositBeforeWithdraw' }, () => {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  loginPage.clickCustomerLogin();
  customerPage.selectCustomer("Harry Potter");
  customerPage.clickBtnLogin();
  accountPage.clickdepositBtn();
  accountPage.amountInput("500");
  accountPage.clickdepositSubmit();
  cy.wait(1000)
  accountPage.verifySuccessMessage("Deposit Successful");
  cy.wait(1000)
});
