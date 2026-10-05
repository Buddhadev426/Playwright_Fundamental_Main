import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://www.flipkart.com/search';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('template testcase', async ({ page }) => {

    
    
    await page.pause();
  });
    
});