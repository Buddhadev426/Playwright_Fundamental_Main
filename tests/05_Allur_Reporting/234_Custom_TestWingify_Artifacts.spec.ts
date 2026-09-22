import { test, expect } from '@playwright/test';

test.use({
    storageState: './user-session.json',
    screenshot: 'on',
    video: 'on',
    trace: 'on',
});

test('test case-1 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
    await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
    await testInfo.attach('dashboard-screenshot-1', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log('dashboard loaded - no login needed');
    
});

test('test case-2 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
    await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
    await testInfo.attach('dashboard-screenshot-2', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log('dashboard loaded - no login needed');
    
});

test('test case-3 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
    await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
    await testInfo.attach('dashboard-screenshot-3', {
        body: await page.screenshot(),
        contentType: 'image/png',
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log('dashboard loaded - no login needed');
    
});