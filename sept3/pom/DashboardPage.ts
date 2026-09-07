import { Page, expect } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) {}

    private accountsSummary = this.page.getByText('Accounts Summary');

    private signOutButton = this.page.getByRole('button', {
    name: 'Sign Out'
});

    private fundsButton = this.page.getByRole('button', {
    name: 'Funds',
    exact: true
});

async openTransferFundsPage() {
    await this.fundsButton.click();
}

    private fundsLink = this.page.getByText('Funds', { exact: true });

    async verifyDashboard() {
        await expect(
            this.page.getByText('Welcome back, Apex User')
        ).toBeVisible();

        await expect(this.accountsSummary).toBeVisible();
    }


    async verifyCheckingBalance(balance: string) {
        await expect(
            this.page.getByText(balance, { exact: true })
        ).toBeVisible();
    }

    async verifySavingsBalance(balance: string) {
        await expect(
            this.page.getByText(balance, { exact: true })
        ).toBeVisible();
    }

    async logout() {
        await this.signOutButton.click();

        await expect(
            this.page.getByPlaceholder('Enter username')
        ).toBeVisible();
    }
}