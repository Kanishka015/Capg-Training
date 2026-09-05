Feature: Student Registration Form

  As a user
  I want to fill the student registration form
  So that I can submit my details

  Background:
    Given the user is on the TutorialsPoint practice website

  @registration
  Scenario: Fill student registration form with valid details
    When the user enters first name "Kanishka"
    And the user enters email "kanishka@example.com"
    And the user selects gender "Female"
    And the user enters mobile number "9876543210"
    And the user enters date of birth "2000-01-15"
    And the user enters subject "Mathematics"
    And the user selects hobbies "Reading,Music"
    And the user enters address "Delhi"
    Then the student registration form should be displayed