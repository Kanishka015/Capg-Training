import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
    constructor(private page: Page) {}

    private fromAccount = this.page.getByLabel('From Account');

    private toAccount = this.page.getByLabel('To Account');

    private transferAmount = this.page.getByLabel('Transfer Amount ($)');

    private executeTransfer = this.page.getByRole('button', {
        name: 'Execute Transfer'
    });

   async openTransferFundsPage() {
    await this.page.getByRole('link', { name: 'Transfer Funds', exact: true }).click();
    await this.page.waitForLoadState('networkidle');
}

    async transferFunds(
        amount: string,
        fromAccount: string,
        toAccount: string
    ) {
        await this.fromAccount.selectOption({
            label: fromAccount
        });

        await this.toAccount.selectOption({
            label: toAccount
        });

        await this.transferAmount.fill(amount);

        await this.executeTransfer.click();
    }

    async verifyTransferSuccess(amount: string) {
        await expect(
            this.page.getByText(
                `Transfer of $${amount}.00 completed successfully.`
            )
        ).toBeVisible();
    }
}