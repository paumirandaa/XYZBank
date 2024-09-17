Feature: Account
    Scenario: Validar que el cliente puede realizar depositos
        Given el usuario esta en la página de inicio de sesión
        And hace click en el botón "Customer Login"
        And selecciona "Harry Potter" de la lista de clientes
        And hace click en el botón "Login"
        When hace click en el botón "Deposit"
        And se visualiza el campo "Amount"
        And ingresa el monto "500"
        And hace click sobre "Deposit"
        Then se visualiza el mensaje "Deposit Successful"
        And el balance debe ser "500"

    @depositBeforeWithdraw
    Scenario: Validar que el cliente puede realizar un deposito y retiro
        Given el usuario esta en la página de inicio de sesión
        And hace click en el botón "Customer Login"
        And selecciona "Harry Potter" de la lista de clientes
        And hace click en el botón "Login"
        When hace click en el botón "Deposit"
        And se visualiza el campo "Amount"
        And ingresa el monto "500"
        And hace click sobre "Deposit"
        Then se visualiza el mensaje "Deposit Successful"
        And el balance debe ser "500"
        When hace click en el botón "Withdraw"
        And se valida que se visualiza el texto
        And ingresa el monto "500"
        And hace click sobre "Withdraw"
        Then se visualiza el mensaje "Transaction successful"
        And el balance debe ser "0"

    Scenario: El cliente visualiza en la grilla de transacciones el deposito realizado
        Given el usuario esta en la página de inicio de sesión
        And hace click en el botón "Customer Login"
        And selecciona "Harry Potter" de la lista de clientes
        And hace click en el botón "Login"
        When hace click en el botón "Deposit"
        And se visualiza el campo "Amount"
        And ingresa el monto "500"
        And hace click sobre "Deposit"
        And el balance debe ser "500"
        And hace click en el botón "Transactions"
        Then se visualizan las transacciones realizadas en la grilla