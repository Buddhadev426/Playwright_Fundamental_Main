import {test, expect} from '@playwright/test';

test('Test The Katalon Demo App', async({page}) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/",{
        waitUntil : "load",
        //timeout : 3000,
        
    });

    const makeAppoinmentBtn = page.locator("#btn-make-appointment");
    await makeAppoinmentBtn.click();

    const userNameField = page.locator("#txt-username");
    await userNameField.fill("John Doe");

    const passwordField = page.locator("#txt-password");
    await passwordField.fill("ThisIsNotAPassword");

    const loginBtn = page.locator("#btn-login");
    await loginBtn.click();

    await expect(page.getByRole('heading', {name : "Make Appointment"})).toBeVisible();
})