import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
     })

    const data = {
        description : 'valid credential',
        username : 'admin@gmail.com',
        password : 'admin123',
        expectedURL : '/admin/',
        shouldPass : true
    }
 test(`login with ${data.description}`, async ({page}) => {

   //page locators
    let textboxEmail = page.getByPlaceholder('student@thetestingacademy.com');
    let textboxPassword = page.getByPlaceholder('Enter your password');
    let loginButton = page.getByTestId('data-testid="login-button');

    //page methods
    await textboxEmail.fill(data.username);
    await textboxPassword.fill(data.password);
    await loginButton.click();
    await expect(page).toHaveURL(data.expectedURL);
 });
    
});