import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://www.flipkart.com/search';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('assertion to visible, enable... testcase', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
    const automationCheckBox = page.getByRole('checkbox', { name: /UFT/ });
    await automationCheckBox.check();
    await expect(automationCheckBox).toBeChecked();

    const submitBtn = page.getByTestId('profile-submit');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toBeEnabled();

     await expect(page).toHaveTitle(/QA Profile/);

    const appUrl = page.url();
    expect(appUrl).toContain('thetestingacademy');

    
    
    await page.pause();
  });
    
});