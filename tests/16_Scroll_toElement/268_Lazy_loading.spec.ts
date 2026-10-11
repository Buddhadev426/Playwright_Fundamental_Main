import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/scroll';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('Lazy loading testcase', async ({ page }) => {
    await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
    await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

    const list = page.getByTestId('lazy-list').locator('li');
    const listCount = await list.count();

    await list.last().scrollIntoViewIfNeeded();

    await expect.poll(async () => list.count(),{
      message : 'expected_items>10',
      timeout: 10_000
    }).toBeGreaterThan(listCount);

    const finalCount = await list.count();
    console.log(finalCount);

    await page.waitForTimeout(10000);
    
    //await page.pause();
  });
    
});