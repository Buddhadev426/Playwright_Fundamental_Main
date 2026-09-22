# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts >> test case-2 go directly to dashboard - capture artifacts
- Location: tests\05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.screenshot: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.use({
  4  |     storageState: './user-session.json',
  5  |     screenshot: 'on',
  6  |     video: 'on',
  7  |     trace: 'on',
  8  | });
  9  | 
  10 | test('test case-1 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
  11 |     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
  12 |     await testInfo.attach('dashboard-screenshot-1', {
  13 |         body: await page.screenshot(),
  14 |         contentType: 'image/png',
  15 |     });
  16 |     await expect(page).toHaveURL(/dashboard/);
  17 |     console.log('dashboard loaded - no login needed');
  18 |     
  19 | });
  20 | 
  21 | test('test case-2 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
  22 |     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
  23 |     await testInfo.attach('dashboard-screenshot-2', {
> 24 |         body: await page.screenshot(),
     |                          ^ Error: page.screenshot: Target page, context or browser has been closed
  25 |         contentType: 'image/png',
  26 |     });
  27 |     await expect(page).toHaveURL(/dashboard/);
  28 |     console.log('dashboard loaded - no login needed');
  29 |     
  30 | });
  31 | 
  32 | test('test case-3 go directly to dashboard - capture artifacts', async ({ page }, testInfo) => {
  33 |     await page.goto('https://app.wingify.com/#/dashboard?accountId=1281820');
  34 |     await testInfo.attach('dashboard-screenshot-3', {
  35 |         body: await page.screenshot(),
  36 |         contentType: 'image/png',
  37 |     });
  38 |     await expect(page).toHaveURL(/dashboard/);
  39 |     console.log('dashboard loaded - no login needed');
  40 |     
  41 | });
```