import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/scroll';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('Perform scroll testcase', async ({ page }) => {

    // 1- way
    await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
     await page.getByTestId('deep-anchor').click();

    //2- way using js execute
    await page.evaluate(() => window.scrollBy(0, 1000));

    

    //3- way jump to button
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await page.waitForTimeout(5000);

    //4- way jump to above
    await page.evaluate(() => window.scrollTo(0, 0));

    
    
    await page.pause();
  });
    
});