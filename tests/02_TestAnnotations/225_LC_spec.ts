import {test, expect} from '@playwright/test';

test("verify x", async({page}) => {
    await page.goto("https://google.com", 
        {timeout : 10000, waitUntil : 'commit'}
    );

    const response =await page.goto("https://google.com",{ 
         timeout : 10000,
         waitUntil : 'domcontentloaded',
         referer : 'https://google.com' //prev page url 
});
})