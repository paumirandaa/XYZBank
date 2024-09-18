Feature: Login Page

  Scenario: El manager agrega un nuevo customer
    Given el usuario esta en la página de inicio de sesión
    And el usuario inicia sesión como "Manager"
    And hace click sobre el botón "Add Customer"
    And completa el campo "Firts Name"
    And completa el campo "Last Name"
    And completa el campo "Post Code"
    Then hace click en "Add Customer"
    And se visualiza una ventana emergente informando que el usuario se creo con éxito

  Scenario: El manager abre una nueva cuenta
    Given el usuario esta en la página de inicio de sesión
    And el usuario inicia sesión como "Manager"
    When hace click sobre el botón "Open Account"
    And selecciona el cliente "Harry Potter"
    And selecciona la moneda "Dollar"
    Then hace click en "Process"
    And se visualiza una ventana emergente informando que la cuenta fue creada con éxito

  Scenario: El manager elimina un cliente
    Given el usuario esta en la página de inicio de sesión
    And el usuario inicia sesión como "Manager"
    When hace click sobre el botón "Customers"
    And busca al cliente "Neville"
    Then elimina al cliente "Neville Longbottom"

