import {test, expect} from '@playwright/test';

//load the saves login session
test.use(
    {
        storageState : "./user-session.json"
    }
);

//test.describe('dashboard without login', () =>{

test("test case-1 go diectly to dashboard- no login", async function({page}) {
     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
     await expect(page).toHaveURL(/dashboard/);
     console.log("dashboard loaded - no login needed");
     await page.waitForTimeout(3000);
    });

    test("test case-2 go diectly to dashboard- no login", async function({page}) {
     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
     await expect(page).toHaveURL(/dashboard/);
     console.log("dashboard loaded - no login needed");
     await page.waitForTimeout(3000);
    });

    test("test case-3 go diectly to dashboard- no login", async function({page}) {
     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
     await expect(page).toHaveURL(/dashboard/);
     console.log("dashboard loaded - no login needed");
     await page.waitForTimeout(3000);
    });
        
//});