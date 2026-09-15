import {test, expect} from '@playwright/test';
test('navigation to the website', async({page}) => {
    await page.goto("https://google.com");
    await page.close();
});

test('BCP- In app.vwo.com two roles', async({browser}) => {
    let AdminContext = await browser.newContext();
    let UserContext = await browser.newContext();
    let GuestContext = await browser.newContext();

    let page1 = await AdminContext.newPage();
    await page1.goto("https://google.com");

    let page2 = await UserContext.newPage();
    await page2.goto("https://google.com");

    let page3 = await GuestContext.newPage();
    await page3.goto("https://google.com");

    await page1.close();
    await page2.close();
    await page3.close();

    await AdminContext.close();
    await UserContext.close();
    await GuestContext.close();

    await browser.close();

})