import { test, expect } from '@playwright/test';

import { LoginPage } from '../pom/login';
import { BeneficiaryPage } from '../pom/Beneficiarypage';
import { TransferFundsPage } from '../pom/transferfunds';
import { DashboardPage } from '../pom/DashboardPage';
import { TransactionHistoryPage } from '../pom/Transactionhistorypage';
test.describe('Funds Transfer Flow', () => {

    test('Login, Add Beneficiary, Transfer Funds, Verify and Logout', async ({ page }) => {

        // --------------------------------
        // Test Data
        // --------------------------------

        const username = 'apex_user';
        const password = 'Password123!';

        const beneficiaryName = 'Test Beneficiary';
        const beneficiaryAccount = '4578';
        const beneficiaryBank = 'Bank of America';

        const transferAmount = '3589';

        // --------------------------------
        // Page Objects
        // --------------------------------

        const loginPage = new LoginPage(page);
        const beneficiaryPage = new BeneficiaryPage(page);
        const transferPage = new TransferFundsPage(page);
        const dashboardPage = new DashboardPage(page);
        const transactionPage =
            new TransactionHistoryPage(page);


        // --------------------------------
        // 1. Login
        // --------------------------------

        await page.goto(
            'https://playwrightpad.in/sandbox/banking'
        );

        await loginPage.login(
            username,
            password
        );

        await dashboardPage.openFundsPage();


        // --------------------------------
        // 2. Beneficiary
        // --------------------------------

        await beneficiaryPage.openBeneficiaryPage();

        await beneficiaryPage.addBeneficiary(
            beneficiaryName,
            beneficiaryAccount,
            beneficiaryBank
        );


        // --------------------------------
        // 3. Transfer Funds
        // --------------------------------
        // 3. Transfer Funds
         await transferPage.openTransferFundsPage();

        await transferPage.transferFunds(
              transferAmount,
             'Checking (34204)',
             'Savings (18446)'
);


        // --------------------------------
        // 4. Verify Transfer
        // --------------------------------

        await transferPage.verifyTransferSuccess(
            transferAmount
        );


        // --------------------------------
        // 5. Verify Transaction History
        // --------------------------------

        await transactionPage.verifyTransferTransaction(
            transferAmount
        );

        await transactionPage.verifyTransferDescription();


        // --------------------------------
        // 6. Verify Dashboard
        // --------------------------------

        await dashboardPage.verifyDashboard();


        // --------------------------------
        // 7. Logout
        // --------------------------------

        await dashboardPage.logout();

    });

});