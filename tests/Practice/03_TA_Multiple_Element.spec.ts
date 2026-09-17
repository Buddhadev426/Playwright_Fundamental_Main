import {test, expect} from '@playwright/test';

test("Test the multiple element in testing-academy", async function({page}){
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    const enterEmail = page.locator('//input[@id="email"]');
    await enterEmail.fill('buddha@gmail.com');

    const enterPassword = page.locator('//input[@id="password"]');
    await enterPassword.fill("buddha123");

    await page.locator('//input[@type="checkbox"]').click();

    await page.locator('//button[contains(@class,"login")]').click();

    await expect(page).toHaveURL(/multiple_element_filter/);

    await page.pause();

})