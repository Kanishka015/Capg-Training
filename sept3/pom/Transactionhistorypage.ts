import { Page, expect } from '@playwright/test';

export class TransactionHistoryPage {
    constructor(private page: Page) {}

    async verifyTransferTransaction(amount: string) {
        await expect(
            this.page.getByText('Recent Transactions')
        ).toBeVisible();

        await expect(
            this.page.getByText(`-$${amount}.00`)
        ).toBeVisible();
    }

    async verifyTransferDescription() {
        await expect(
            this.page.getByText(
                'Internal Transfer checking to savings'
            )
        ).toBeVisible();
    }
}