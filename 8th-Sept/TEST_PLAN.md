# Test Plan

## Document Information

- Project Name: Sauce Demo Web Application
- Application URL: https://www.saucedemo.com/
- Document Type: QA Test Plan
- Version: 1.0
- Date: 2026-09-07
- Prepared By: Senior QA Engineer
- Review Status: Draft for review
- Project Type: Web application functional and regression testing
- Test Environment: Live Sauce Demo environment
- Repository Context: The current workspace contains an initial Playwright project with one login smoke test in `tests/seed.spec.ts` and no Cucumber feature files, step definitions, or Page Object Model files at the time of this plan. This document defines the planned QA coverage and the current automation baseline.

---

## Introduction

This Test Plan defines the quality assurance approach for the Sauce Demo web application. It is aligned to the live application behavior of Swag Labs and the current automation baseline present in this repository.

The current repository evidences only a minimal Playwright implementation. A single smoke test currently navigates to the Sauce Demo login page, enters valid credentials, logs in, and verifies the dashboard title. There are no existing Cucumber `.feature` files, no step definition files, and no reusable page object classes in the workspace. Therefore, this plan distinguishes clearly between:

- Existing automated coverage in the repository
- Planned QA coverage for the full Sauce Demo product
- Candidate future automation work for Playwright, Cucumber BDD, and Page Object Model implementation

This Test Plan is designed as a professional QA project document and is suitable for submission to stakeholders, QA leads, or project reviewers.

---

## Application Overview

Sauce Demo is a sample e-commerce web application used for testing and automation practice. The application allows users to:

- Log in with predefined credentials
- View a product catalog
- Sort products
- Add and remove items from the cart
- Review order details
- Complete a purchase flow using checkout pages
- Log out from the application

The application is intentionally designed to support both positive and negative functional tests, including invalid login attempts, locked accounts, and checkout validation. The test scope includes user authentication, inventory interaction, cart management, and order confirmation flows.

---

## Test Objectives

The key objectives of this test plan are to:

1. Validate the core user journeys of the Sauce Demo web application.
2. Verify authentication behavior for valid and invalid user scenarios.
3. Ensure users can successfully browse inventory and complete purchase flows.
4. Confirm cart, checkout, and order confirmation behavior under valid and invalid inputs.
5. Validate the stability and reliability of the automation framework used for regression and smoke testing.
6. Ensure defect reporting, severity classification, and test metrics support traceable QA decisions.
7. Separate current repository automation from planned test coverage to avoid overstating actual automated capability.

---

## Scope

### In Scope

- Login and logout flows
- Valid and invalid credential validation
- Locked and restricted user scenarios
- Inventory page rendering and product listing
- Inventory sorting behavior
- Add to cart and remove from cart actions
- Cart page review and item quantity validation
- Checkout form validation
- Successful order completion flow
- Browser-based regression testing
- Smoke testing for critical business flows
- Desktop browser coverage across supported browsers
- Manual and automated test execution where applicable

### Out of Scope

- Non-browser API testing
- Performance benchmarking under load
- Security penetration testing beyond functional validation
- Accessibility compliance certification at full WCAG audit level
- Mobile native app testing
- Data persistence or database validation outside the application behavior
- Third-party payment integrations beyond the mock checkout flow

---

## Test Approach

The project will use a risk-based and requirement-driven QA approach. Test execution will begin with critical user flows and expand to high-risk scenarios that are likely to affect user conversion or application stability.

The overall approach includes:

- Baseline assessment of existing automation in the repository
- Focus on critical business paths before broad exploratory coverage
- Positive and negative validation for each functional area
- Use of smoke tests for release readiness decisions
- Regression coverage for all previously fixed defects and high-risk flows
- Clear distinction between automated tests already implemented and planned tests

---

## Test Strategy

The test strategy is designed for a lightweight web application with high-value functional flows. It emphasizes the following:

- Validate customer journeys that directly impact purchase completion
- Prioritize authentication, product selection, cart, and checkout as core business flows
- Use automation to improve repeatability and speed for regression runs
- Keep manual validation for exploratory testing and edge-case discovery
- Maintain a minimum smoke suite to support rapid validation after code changes
- Regression validation for fixed defects and high-risk flows

This strategy is appropriate for the current repository, which is built around Playwright and currently contains a single login smoke test. The test strategy should be expanded when additional feature files and page objects are introduced.

---

## Testing Types

The following testing types will be applied:

- Smoke Testing
- Functional Testing
- Negative Testing
- Regression Testing
- UI Validation Testing
- Cross-browser Testing
- Data Validation Testing
- Exploratory Testing
- Defect Verification Testing

---

## Functional Areas

1. Authentication
   - Login success
   - Invalid credentials
   - Locked user
   - Empty field validation
   - Logout

2. Product Inventory
   - Product list rendering
   - Product naming and pricing visibility
   - Sort functionality
   - Add/remove item actions

3. Cart Management
   - Add to cart
   - Remove from cart
   - Cart badge count
   - Review items in cart

4. Checkout Flow
   - Continue to checkout
   - Fill shipping information
   - Validate required fields
   - Review order summary
   - Complete purchase

5. Error and Edge Cases
   - Empty form submission
   - Invalid characters or missing required fields
   - Restricted user login attempts
   - Broken cart state transitions

---

## Test Scenarios

The following scenarios are considered for planned QA coverage. They are aligned to the existing Sauce Demo application and the current project structure, without claiming automation beyond what is present in the repository.

- Login with valid credentials
- Login with invalid username/password combination
- Login with a locked user account
- Login with empty username and password
- Navigate to the product inventory page after valid login
- Verify product cards are displayed with expected product metadata
- Sort inventory by price, name, and other standard product ordering options
- Add an item to the shopping cart and verify quantity count
- Remove an item from the cart and verify the item count updates
- Click on the cart and validate item details
- Continue checkout from the cart page
- Enter valid customer information and proceed to the overview page
- Validate checkout form required fields and error handling
- Complete order and confirm order completion page rendering
- Log out successfully from the application
- Validate that user sessions are not retained after invalid or forced logout flows where applicable

---

## Test Data

The following test data is required for Sauce Demo testing, based on the application behavior and accepted usernames.

### Standard User Credentials
- Username: `standard_user`
- Password: `secret_sauce`

### Locked User Credentials
- Username: `locked_out_user`
- Password: `secret_sauce`

### Other Known User Profiles
- `problem_user`
- `performance_glitch_user`
- `error_user`
- `visual_user`

### Negative Test Data
- Invalid username: `invalid_user`
- Invalid password: `wrong_password`
- Empty username
- Empty password
- Missing checkout fields: first name, last name, postal code

### Product Data
- Product names and prices from the live Sauce Demo inventory page
- Typical product set includes multiple items with distinct names and price points

### Checkout Data
- First name: `QA`
- Last name: `Tester`
- Postal code: `12345`

---

## Test Environment

- Application URL: https://www.saucedemo.com/
- Environment Type: Live application under test
- Browser Execution: Desktop browsers
- Network: Internet access to public Sauce Demo environment
- Data State: Reset to default application state prior to execution when required
- Test Execution Tools: Playwright Test framework in the current project

---

## Browser Coverage

The project configuration currently targets Chromium, Firefox, and WebKit in `playwright.config.ts`.

Planned browser coverage includes:

- Chromium (Desktop Chrome)
- Firefox (Desktop Firefox)
- WebKit (Desktop Safari)

The current repo includes those browser projects in the Playwright config. Browser validation will apply primarily to desktop environments and critical user journeys.

---

## Automation Strategy

The repository currently contains a basic Playwright test setup and a single login smoke automation example. The automation strategy should therefore be implemented in phases:

### Phase 1: Current Baseline
- Existing smoke validation in `tests/seed.spec.ts`
- Browser automation using Playwright
- Minimal smoke check for login journey

### Phase 2: Planned Test Automation Expansion
- Add more Playwright tests for product and checkout functions
- Introduce page objects for maintainability
- Establish a consistent naming convention aligned to the current test structure
- Add explicit negative test cases and regression scenarios

### Phase 3: BDD Advancement
- Add Cucumber feature files for high-value user journeys
- Add step definitions for login, cart, and checkout flows
- Align scenario naming with actual business behavior and user actions

---

## Playwright Strategy

The current project framework is Playwright Test. This aligns with the repository setup in `playwright.config.ts` and the example test files in `tests/`.

Planned Playwright usage includes:

- Browser automation for smoke and regression suites
- Parallel execution across configured projects when appropriate
- Stable selectors and explicit waits for UI state transitions
- Data-driven validation for valid and invalid login flows
- Test reporting through Playwright HTML reporter
- Use of `test.describe` and `test` functions consistent with the current repository patterns

Important note: The project currently contains only sample Playwright tests and not a full Sauce Demo test suite. The Playwright strategy below therefore represents the intended future-state automation approach rather than current fully implemented coverage.

---

## Cucumber BDD Strategy

The project does not currently contain Cucumber feature files or step definitions. If introduced, the strategy should include:

- Feature files written in Gherkin for user-facing scenarios
- Scenario names matching user journeys such as login, cart, and checkout
- Step definitions mapped to page objects and reusable actions
- Clear separation between business behavior and technical implementation
- BDD scenarios used for stakeholder readability and regression communication

This strategy should be treated as a planned enhancement rather than an existing implementation in the current repository.

---

## Page Object Model Strategy

The project does not currently contain Page Object Model classes. A POM strategy should be introduced to improve maintainability and reduce selector duplication.

Recommended approach:

- Create page objects for login, inventory, cart, and checkout pages
- Keep reusable UI actions and assertions inside each page object
- Separate test logic from UI interactions
- Ensure selectors are stable and resilient to minor UI changes
- Keep page classes independent from the Cucumber step definitions when BDD is added

This is a planned implementation improvement, not an existing framework component in the current codebase.

---

## Test Execution Strategy

Execution will be structured as follows:

1. Smoke execution after every build or environment change
2. Functional regression execution for critical flows before release
3. Negative scenario validation for authentication and checkout validations
4. Cross-browser execution for standard desktop browsers
5. Exploratory and defect verification cycles for issues identified during execution

The current workspace baseline contains only one smoke-style login test, so smoke and regression coverage will expand before claiming broader automation maturity.

---

## Regression Strategy

Regression testing will focus on areas with high business impact and historical defect exposure:

- Login and authentication flows
- Product inventory navigation
- Add/remove cart logic
- Cart page and checkout validation
- Order completion confirmation
- Logout flow

Regression runs will cover both automated tests and manual spot checks when automation is not yet available for a given scenario.

---

## Smoke Testing Strategy

Smoke testing will verify that the application is able to perform its core user journey with minimal validation.

Smoke test candidates:

- User can access the login page
- Valid user credentials allow successful login
- Inventory page loads after authentication
- User can add one item to the cart
- User can navigate to checkout and complete purchase

Current repository evidence: `tests/seed.spec.ts` validates a successful login flow and acts as the baseline smoke test in the repository.

---

## Defect Management

All defects will be logged with the following details:

- Defect ID
- Title
- Environment
- Browser
- Severity
- Priority
- Steps to reproduce
- Expected result
- Actual result
- Screenshots or recordings
- Assignee
- Status

Defect triage will determine which defects block release and which are accepted as minor product issues while isolated to low-risk functionality.

---

## Severity and Priority

### Severity

- Critical: Application cannot be used for essential flows; login or checkout failure blocks business process
- High: Major functional defect impacting core business use case
- Medium: Moderate issue affecting user workflow but not total process failure
- Low: Cosmetic or minor defect with little impact on functionality
