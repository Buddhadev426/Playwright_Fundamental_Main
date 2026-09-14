import { chromium, Browser, BrowserContext } from "@playwright/test";
async function run() {
    const browser : Browser = await chromium.launch( {headless : false});
    const context : BrowserContext = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.google.com/');
    console.log("Titlle :" + await page.title());

    //Cleanup - reverse order
    await page.close();
    await context.close();
    await browser.close();
    
}
run();