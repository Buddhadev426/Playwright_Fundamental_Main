# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_Scroll_toElement\268_Lazy_loading.spec.ts >> Test the application >> Lazy loading testcase
- Location: tests\16_Scroll_toElement\268_Lazy_loading.spec.ts:8:7

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('section-lazy')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Test the application', () => {
  4  | const URL = 'https://www.flipkart.com/search';
  5  |   test.beforeEach(async ({page}) =>{
  6  |     await page.goto(URL);
  7  |   })
  8  |   test('Lazy loading testcase', async ({ page }) => {
> 9  |     await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
     |                                            ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  10 |     await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
  11 | 
  12 |     const list = page.getByTestId('lazy-list').locator('li');
  13 |     const listCount = await list.count();
  14 | 
  15 |     await list.last().scrollIntoViewIfNeeded();
  16 | 
  17 |     await expect.poll(async () => list.count(),{
  18 |       message : 'expected_items>10',
  19 |       timeout: 10_000
  20 |     }).toBeGreaterThan(listCount);
  21 | 
  22 |     const finalCount = await list.count();
  23 |     console.log(finalCount);
  24 |     
  25 |     //await page.pause();
  26 |   });
  27 |     
  28 | });
```