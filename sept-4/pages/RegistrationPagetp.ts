import { When, Then } from '@cucumber/cucumber';
import { RegistrationPagetp } from './RegistrationPagetp.po';

When('the user enters first name {string}', async function (name: string) {

    this.registrationPage =
        new RegistrationPagetp(this.page);

    await this.registrationPage.enterFirstName(name);
});

When('the user enters email {string}', async function (email: string) {

    await this.registrationPage.enterEmail(email);
});

When('the user selects gender {string}', async function (gender: string) {

    await this.registrationPage.selectGender(gender);
});

When('the user enters mobile number {string}', async function (mobile: string) {

    await this.registrationPage.enterMobile(mobile);
});

When('the user enters date of birth {string}', async function (date: string) {

    await this.registrationPage.enterDateOfBirth(date);
});

When('the user enters subject {string}', async function (subject: string) {

    await this.registrationPage.enterSubject(subject);
});

When('the user selects hobbies {string}', async function (hobbies: string) {

    const hobbyList = hobbies
        .split(',')
        .map((hobby: string) => hobby.trim());

    await this.registrationPage.selectHobbies(hobbyList);
});

When('the user enters address {string}', async function (address: string) {

    await this.registrationPage.enterAddress(address);
});

Then('the student registration form should be displayed', async function () {

    await this.registrationPage.validatePage();
});