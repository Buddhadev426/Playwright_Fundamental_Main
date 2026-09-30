# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_select_Dropdown\245_Advance_MultiDD.spec.ts >> Custom multi-select dropdown
- Location: tests\08_select_Dropdown\245_Advance_MultiDD.spec.ts:3:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('option', { name: 'Pune' })

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('Custom multi-select dropdown', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  5  | 
  6  |     //① Single — searchable
  7  |     await page.getByTestId('rs-single-input').click();
  8  |     await page.getByText('WebdriverIO', {exact : true}).click();
  9  | 
  10 |     //② Multi — chips with remove
  11 |     await page.getByTestId('rs-multi-input').click();
  12 |     await page.getByText('Pytest', {exact : true}).click();
  13 |     await page.getByText('Mocha', {exact : true}).click();
  14 |     await page.getByLabel('Remove Pytest').click();
  15 |      await page.keyboard.press('Escape');
  16 | 
  17 | 
  18 |     //③ Creatable multi — type and Enter
  19 | 
  20 |     await page.getByTestId('rs-creatable-input').click();
  21 |     await page.getByText('performance', {exact : true}).click();
  22 |     await page.getByText('visual-regression', {exact : true}).click();
  23 |     await page.getByLabel('Remove visual-regression').click();
  24 |     await page.keyboard.press('Escape');
  25 | 
  26 |     //⑤ Async — fetched on type
  27 |     //await page.getByTestId('rs-async').click();
  28 |     await page.getByTestId('rs-async-input').fill('Pun');
  29 |     await expect(page.getByTestId("rs-async-menu")).toContainText('Pune');
> 30 |     await page.getByRole('option', {name : 'Pune'}).click();
     |                                                     ^ Error: locator.click: Target page, context or browser has been closed
  31 | 
  32 | 
  33 | 
  34 | 
  35 | 
  36 |     
  37 |     
  38 |     await page.pause();
  39 |   });
```