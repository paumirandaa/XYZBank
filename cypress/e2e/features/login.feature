Feature: Login Page

  Scenario: El usuario inicia sesión como cliente
    Given el usuario esta en la página de inicio de sesión
    And visualiza el título "XYZ Bank"
    When hace click en el botón "Customer Login"
    And selecciona "Harry Potter" de la lista de clientes
    And hace click en el botón "Login"
    Then se visualiza el nombre del cliente "Harry Potter" en la pantalla

  Scenario: El usuario inicia sesión como Bank Manager
    Given el usuario esta en la página de inicio de sesión
    And visualiza el título "XYZ Bank"
    When hace click en el botón "Bank Manager Login"
    Then se visualizan los botones "Add Customer", "Open Account" y "Customers"

