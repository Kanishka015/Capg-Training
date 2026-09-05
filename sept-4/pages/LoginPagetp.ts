import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPagetp } from '../pages/LoginPagetp';

Given('the user is on the TutorialsPoint practice website', async function () {

    this.loginPage = new LoginPagetp(this.page);

    await this.loginPage.openWebsite();
});

When('the user clicks on the Login link', async function () {

    await this.loginPage.clickLoginLink();
});

Then('the Login page should be displayed', async function () {

    await this.loginPage.validateLoginPage();
});