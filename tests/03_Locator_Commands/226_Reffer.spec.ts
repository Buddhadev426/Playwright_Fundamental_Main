import { test, expect} from  '@playwright/test';
test('set reffer for entire content', async({browser}) =>{
    const context = await browser.newContext({
        extraHTTPHeaders : {
            referer : 'https://google.com',
        },
    });
    
    const page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com");
    console.log("page 1 partner referer included");
    
    await page.close();
    await context.close();
})