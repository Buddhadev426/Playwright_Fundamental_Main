# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_Scroll_toElement\267_Scroll.spec.ts >> Test the application >> Perform scroll testcase
- Location: tests\16_Scroll_toElement\267_Scroll.spec.ts:8:7

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('deep-anchor')

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
  8  |   test('Perform scroll testcase', async ({ page }) => {
> 9  |     await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
     |                                           ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  10 |     await page.getByTestId('deep-anchor').click();
  11 | 
  12 |     
  13 |     
  14 |     await page.pause();
  15 |   });
  16 |     
  17 | });
```