Feature: Add/Delete product to basket in John lewis site

  Scenario Outline: As a user, I want to add/Delete <mobileSearch> product to basket

    Given Open application url
    When  accepts the cookie banner
    Then  browses for product <mobileSearch>
    And   selects multiple quantities of that product
    And   add the selected product to basket
    And   Delete product from basket
    Then  Verify the Basket Empty page

    Examples:
      | mobileSearch |
      | Wooden toys  |
      | kids toys    |
