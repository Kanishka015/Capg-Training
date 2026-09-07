import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    private username = this.page.getByPlaceholder('Enter username');
    private password = this.page.getByPlaceholder('Enter password');
    private loginButton = this.page.getByRole('button', { name: 'LOGIN' });

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

        await expect(
            this.page.getByText('Welcome back, Apex User')
        ).toBeVisible();
    }
}