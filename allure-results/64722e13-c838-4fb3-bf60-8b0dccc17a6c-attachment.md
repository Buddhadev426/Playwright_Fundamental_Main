# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> template testcase
- Location: tests\Practice\06_OrangeHRM.spec.ts:4:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByLabel('Username').first()

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | test.describe('Test the OrangeHRM', () => {
  3  | 
  4  |   test('template testcase', async ({ page }) => {
  5  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
> 6  |     await page.getByLabel('Username').first().fill('Adim');
     |                                               ^ Error: locator.fill: Target page, context or browser has been closed
  7  | 
  8  |     
  9  |     
  10 |     await page.pause();
  11 |   });
  12 | })
```