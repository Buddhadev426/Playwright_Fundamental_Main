import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
//   test.beforeEach(async ({page}) =>{
//     await page.goto(URL);
//   })
  test('TTA Login testcase', async ({ page }) => {

    await test.step('open the page', async()=>{
        await page.goto(URL, {waitUntil : 'domcontentloaded'});
    });
    await test.step('field are visible', async () => {
        await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeVisible();
        await expect(page.getByRole('textbox', {name : 'Password'})).toBeVisible();
        await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeEnabled();
        await expect(page.getByRole('textbox', {name : 'Password'})).toBeEnabled();
        await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeEmpty();
        await expect(page.getByRole('textbox', {name : 'Password'})).toBeEmpty();
    });

    await test.step('enter login details', async () => {
        await page.getByPlaceholder('student@thetestingacademy.com').fill('buddha@gmail.com');
        await page.getByPlaceholder('Enter your password').fill('12345');
        await page.getByText('Remember me', {exact : true}).click();
        await page.getByTestId('form-forgot-password').click();
    });
    
    await test.step('checked & forgot message are displayed', async() =>{
        await expect(page.getByText('Remember me', {exact : true})).toBeChecked();
        await expect(page.getByText('Remember me', {exact : true})).toBeEnabled();
        await expect(page.locator('#toast')).toContainText('Forgotten Password clicked');
        expect(page.locator('#toast'))
        .toHaveText('Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.');
    });
    
    await test.step('before login assertion', async() =>{
        await expect(page.getByTestId('login-button')).toHaveClass('login-btn');
        await expect(page.getByTestId('login-button')).toHaveAttribute('type', 'submit');
        await expect(page.getByTestId('login-button')).toBeEnabled();
        await expect(page.getByTestId('login-button')).toContainText('Login to Practice Account');
    });

    await test.step('Click on login', async () =>{
        await page.getByTestId('login-button').click();
    });

    await test.step('after login assertion', async() =>{
        await expect(page).toHaveURL(/login-success/);
    }); 
    
    await page.pause();
  });
    
});