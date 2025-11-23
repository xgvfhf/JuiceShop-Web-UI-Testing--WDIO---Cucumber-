Feature: UI elements on OWASP Juice Shop

  Scenario: Verify important UI elements are visible
    Given I open Juice Shop main page
    Then I should see language dropdown
    And I should see All Products title
    And I should see page size selector
    And I should see paginator info text
    And I should see next and previous page buttons
    And I should see Contact and About Us in side menu
    And I should see version info in side menu
