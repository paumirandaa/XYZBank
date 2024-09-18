import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { accountPage } from "@pages/AccountPage";
import { listTxPage } from "@pages/TransactionsListTxPage";


Given('el cliente realiza un deposito', ()=>{
    cy.realizarDeposito();
})

When('se valida que se visualiza el texto', ()=>{
    accountPage.verifyAmountToBeWithdrawnText();
})

When('se visualiza el campo {string}', (campo)=>{
    if (campo === "Amount") {
        accountPage.amountVisible();
        cy.wait(1000)
    } 
});


When('ingresa el monto {string}', (amount)=>{
    cy.log("ingresa el monto");
    accountPage.amountInput(amount);
});

When('hace click sobre {string}',(button)=>{
    if (button === "Deposit") {
        accountPage.clickdepositSubmit();
      } else if (button === "Withdraw") {
        accountPage.clickwithdrawSubmit();
    }
});

Then('se visualiza el mensaje {string}', (message)=>{
    accountPage.verifySuccessMessage(message);
});

Then('el balance debe ser {string}',(expectedBalance)=>{
    // Obtiene el balance actual del campo balance
    accountPage.accountBalance().invoke('text').then((text) => {
        // Toma el valor numérico del texto
        const balance = parseFloat(text.replace(/[^0-9.-]+/g, ''));
        // Compara el balance con el monto esperado
        expect(balance).to.equal(parseFloat(expectedBalance));
    });
});

Then('se visualizan las transacciones realizadas en la grilla',()=>{
    listTxPage.verifyTableVisible();
    // Verifica el monto y tipo de la transacción
    listTxPage.verifyFirstTransactionAmount('500'); 
    listTxPage.verifyFirstTransactionType('Credit'); 
})