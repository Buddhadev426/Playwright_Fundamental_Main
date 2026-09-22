import {test, expect} from '@playwright/test';
test('tc#1 - veriify the vwo page is loaded', async({page}) =>{
await page.goto("https://app.wingify.com/#/login",{
    waitUntil : 'domcontentloaded',
    timeout : 3000,
    referer : "https://sdet.live"
});

// <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >

    let userNameField = page.locator("#login-username");

    //await page.waitForTimeout(5000);
    let passwordField = page.locator("#login-password");

    let loginButton = page.locator("#js-login-btn");

    await userNameField.fill("abc@gmail.com");
    await passwordField.fill("pass123");
    await loginButton.click();

    let error_msg = page.locator("#js-notification-box-msg");
    await expect(error_msg).toContainText("Your email, password, IP address or location did not match");
     
    await page.pause();
})