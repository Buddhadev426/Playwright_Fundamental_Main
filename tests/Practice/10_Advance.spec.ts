import {test, expect} from '@playwright/test';
import { calculateSpendVsEarned } from '../../utils/amount_summary';

test('Advance playwright script', async ({page}) => {
    await page.goto('https://demo.applitools.com/');
    await page.locator('#username').fill('Admin');
    await page.locator('#password').fill('Password@123');
    await page.locator('#log-in').click();
    await expect(page).toHaveURL(/app.html/);

    const amountCells= page.locator('table.table-padded tbody tr td:last-child');
     const amountCount = await amountCells.count();
    const amounts: string[] = [];

    for (let i = 0; i < amountCount; i++) {
        const amount = await amountCells.nth(i).innerText();
        amounts.push(amount);
    }

    console.log('All Amounts', amounts);
    
    const result = calculateSpendVsEarned(amounts);
    console.log('Earner Amount : ',result.earned)
    console.log('Spend Amount : ',result.spend);
    console.log('Net Amount : ',result.net);
    expect(result.net).toBe(1996.22);

    await page.pause();
})