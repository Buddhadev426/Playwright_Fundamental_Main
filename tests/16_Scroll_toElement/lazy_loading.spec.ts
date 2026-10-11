
import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
  const URL = 'https://app.thetestingacademy.com/playwright/widgets/scroll';

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Lazy loading testcase', async ({ page }) => {
    await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();

    const list = page.getByTestId('lazy-list').locator('li');

    await expect(list.first()).toBeVisible();

    let previousCount = 0;
    let currentCount = await list.count();

    while (previousCount !== currentCount) {
      previousCount = currentCount;

      await list.last().scrollIntoViewIfNeeded();

      await page.waitForTimeout(1000);

      currentCount = await list.count();

      console.log('Loaded items:', currentCount);
    }

    console.log('Final item count:', currentCount);
  });
});
