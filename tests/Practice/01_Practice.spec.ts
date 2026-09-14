import {test, expect} from '@playwright/test';

test('Adim login', async({browser}) => {
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto("https://github.com/Buddhadev426/Playwright_Fundamental_Main");


    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    await page2.goto("https://github.com/Buddhadev426/Playwright_Fundamental_Main");

}) 
// Git test change
