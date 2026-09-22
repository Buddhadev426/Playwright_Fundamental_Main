import {test, expect} from 'playwright/test';

test("Test wingify loin", async function({page}){
    await page.goto('https://app.wingify.com/#/login');

    await page.locator('//input[@id="login-username"]').fill('buddhadev@gmail');
});

