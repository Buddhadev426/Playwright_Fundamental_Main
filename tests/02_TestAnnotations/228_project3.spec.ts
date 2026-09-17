import {test, expect} from '@playwright/test';

test("Test wingify login with invalid input", async function({page}) {

    await page.goto("https://wingify.com/free-trial/");
    const enterEmail = page.locator('//input[@id="free-trial-step1-email"]');
    await enterEmail.fill("abcd");
    const checkBox1 = page.locator('//input[@id="free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox"]');
    await checkBox1.click();
    await page.locator('//input[@id="free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox"]').click();
    await page.locator('//button[@data-qa="page-su-submit"]').first().click();
    const err_msg = page.locator('//div[contains(@class,"invalid-reason")]').first();
    await expect(err_msg).toContainText('The email address you entered is incorrect');
    await page.pause();
    

})
