Feature: Search for a product and add it to the cart

  Scenario: User searches for a product and adds it to the cart
    Given the user navigates to the website
    When the user searches for a product with the term "bag"
    And the user selects the first product from the product listing
    And the user adds the first product to the cart
    Then the product is successfully added to the cart
    When the user proceeds to checkout
    Then the user fills out the fields in the shipping form
    And the user select the flat rate shipping method
    And the user proceeds to the payment step