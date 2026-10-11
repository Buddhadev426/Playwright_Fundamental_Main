import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('locate shadow dom testcase', async ({ page }) => {
        const card = page.getByTestId('card-account-card');
        await card.getByTestId('card-account-email').fill('buddha@gmail.com');
        await card.getByTestId('card-account-password').fill('12345');
        await card.getByTestId('card-account-submit').click();
        await expect(card.getByTestId('card-account-status'))
        .toContainText('buddha@gmail.com');

    
    
    await page.pause();
  });
    
});