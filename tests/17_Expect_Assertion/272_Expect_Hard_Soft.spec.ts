import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://www.flipkart.com/search';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('Assertion hard and soft testcase', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/tables/practice.html');
        let firstName = await page.getByTestId('first-name');

        // Soft : Each line records its own failure. test continue either way. 
        await expect.soft(firstName).toHaveAttribute('id','first-name');
        await expect.soft(firstName).toBeVisible();
        await expect.soft(firstName).toHaveValue('');


        // Hard
         // Final hard assertion still runs after the soft block.
        await expect(firstName).toBeEnabled();
        // this line will not be executed if the above line is fails)
        await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
        await expect(page.locator('#error')).not.toBeVisible();

        let title = await page.title();
        expect(title).not.toContain('error');  
    
    await page.pause();
  });
    
});