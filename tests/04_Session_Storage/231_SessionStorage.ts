import {chromium} from '@playwright/test';
import dotenv from "dotenv";

dotenv.config();

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

async function sessionSorage() {
    let browser = await chromium.launch({headless : false});
    let context = await browser.newContext();
    let page = await context.newPage();


    await page.goto('https://app.wingify.com/#/login');

    await page.fill('#login-username', VWO_USER);
    await page.fill('#login-password', VWO_PASS);

    await page.click('#js-login-btn');

    await page.waitForURL(/#\/dashboard/, {timeout : 15000});

    await context.storageState({path: "./user-session.json"});
    console.log("session saved to user_session.jason");

    await browser.close();
}

sessionSorage();