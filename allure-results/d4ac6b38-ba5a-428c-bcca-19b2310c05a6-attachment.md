# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\09_TTA_Hover.spec.ts >> Hover on element
- Location: tests\Practice\09_TTA_Hover.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Wi-Fi', { exact: true })

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Hover on element', async ({page}) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  5  |     await page.getByTestId('nav-add-ons').hover();
  6  |     await page.waitForTimeout(5000);
> 7  |     await page.getByText('Wi-Fi', {exact : true}).click();
     |                                                   ^ Error: locator.click: Target page, context or browser has been closed
  8  |     await expect(page.getByTestId('hover-output')).toHaveText('"testId": "test-id-Wifi"');
  9  | 
  10 |     await page.pause();
  11 | });
```