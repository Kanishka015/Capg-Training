import { Page, expect } from '@playwright/test';

export class BeneficiaryPage {
    constructor(private page: Page) {}

    private fundsTransfer = this.page.getByRole('link', {
        name: 'Funds Transfer'
    });

    private addNewButton = this.page.getByRole('button', {
        name: /Add New/i
    });

    private fullName = this.page.getByPlaceholder('e.g. John Doe');

    private accountNumber = this.page.getByPlaceholder(
        'e.g. 1234567890'
    );

    private recipientBank = this.page.getByLabel('Recipient Bank');

    private saveBeneficiary = this.page.getByRole('button', {
        name: 'Save Beneficiary'
    });

    async openBeneficiaryPage() {
        await this.fundsTransfer.click();

        await expect(
            this.page.getByText('Registered Beneficiaries')
        ).toBeVisible();
    }

    async addBeneficiary(
        name: string,
        accountNumber: string,
        bank: string
    ) {
        await this.addNewButton.click();

        await expect(
            this.page.getByText('Add New Beneficiary')
        ).toBeVisible();

        await this.fullName.fill(name);
        await this.accountNumber.fill(accountNumber);

        await this.recipientBank.selectOption({ label: bank });

        await this.saveBeneficiary.click();

        await expect(
            this.page.getByText(name)
        ).toBeVisible();
    }
}