Feature: Search for a product and add it to the cart

  Scenario: User searches for a product and adds it to the cart
    Given the user navigates to the website
    When the user searches for a product with the term "bag"
    And the user selects the first product from the product listing
    And the user adds the first product to the cart
    Then the product is successfully added to the cart
    When the user proceeds to checkout