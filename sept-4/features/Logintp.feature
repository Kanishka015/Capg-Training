Feature: Login

  As a user
  I want to access the login page
  So that I can perform login related actions

  Background:
    Given the user navigates to the TutorialsPoint practice website

  @login
  Scenario: Navigate to Login page
    When the user clicks on the Login link
    Then the Login page should be displayed