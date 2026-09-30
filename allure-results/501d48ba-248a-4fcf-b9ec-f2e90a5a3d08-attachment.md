# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_iFrame_Frame\146_iFrame.spec.ts >> Access single i-frame
- Location: tests\09_iFrame_Frame\146_iFrame.spec.ts:3:7

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#frame-one').contentFrame().locator('#RESULT_TextField-1')

```

# Test source

```ts
  1  | import { test, expect, FrameLocator } from '@playwright/test';
  2  | 
  3  |   test('Access single i-frame', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  5  |     let VechicleiFrame : FrameLocator = page.frameLocator('#frame-one');
> 6  |     await VechicleiFrame.locator('#RESULT_TextField-1').fill('Suzuki 800');
     |                                                         ^ Error: locator.fill: Target page, context or browser has been closed
  7  |     await VechicleiFrame.getByPlaceholder('Aarav Sharma').fill('Buddhadev');
  8  |     await VechicleiFrame.getByPlaceholder('MH-12-AB-1234').fill('WB-96-BM-0910');
  9  |     await VechicleiFrame.locator('#RESULT_RadioButton-1').selectOption('Electric');
  10 |     await VechicleiFrame.locator('RESULT_TextField-4').fill('2015');
  11 |     await VechicleiFrame.locator('#RESULT_TextArea-1').fill('Amazing car');
  12 |     await VechicleiFrame.getByTestId('vehicle-submit').click();
  13 |     const output = await VechicleiFrame.locator('#vehicle-output').innerText();
  14 |     console.log(output);
  15 |     
  16 | 
  17 | 
  18 | 
  19 |     
  20 |     
  21 |     await page.pause();
  22 |   });
```