# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alert\254_JS_Alert.spec.ts >> Handle all JS alert >> Handle JS Alert - 1
- Location: tests\11_JS_Alert\254_JS_Alert.spec.ts:8:7

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Handle all JS alert', () => {
  4  |     // test.beforeEach(async({page}) => {
  5  |     //     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
  6  |     // });
  7  | 
  8  |   test('Handle JS Alert - 1', async ({ page }) => {
  9  | 
> 10 |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     |                ^ Error: page.goto: Target page, context or browser has been closed
  11 | 
  12 |     await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  13 | 
  14 |     page.once('dialog', async dialog =>{
  15 |         console.log('Alert Type : ', dialog.type());
  16 |         console.log('Alert Message : ', dialog.message());
  17 |         expect(dialog.message()).toBe('I am a JS Alert');
  18 |         await dialog.accept();
  19 |     })
  20 |     
  21 |    
  22 |   }); 
  23 | 
  24 | //   test('Handle JS Alert - 2', async ({ page }) => {
  25 | 
  26 | //     await page.getByRole('button', {name : 'Click for JS Confirm'}).click();
  27 | 
  28 | //     page.once('dialog', async dialog =>{
  29 | //         console.log('Alert Type : ', dialog.type());
  30 | //         console.log('Alert Message : ', dialog.message());
  31 | //         expect(dialog.message()).toBe('I am a JS Confirm');
  32 | //         //await dialog.dismiss();
  33 | //         await dialog.accept();
  34 | //     })
  35 | 
  36 | 
  37 | //   }); 
  38 |   
  39 | // test('Handle JS Alert - 3', async ({ page }) => {
  40 | 
  41 | //     const input = 'Hello i am TTA';
  42 | 
  43 | //     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
  44 | 
  45 | //     page.once('dialog', async dialog =>{
  46 | //         expect(dialog.type()).toBe('prompt');
  47 | //         await dialog.accept(input);
  48 | //     })
  49 |     
  50 | //     await expect(page.locator('#result')).toHaveText(`You entered: ${input}`)
  51 | //    await page.pause();
  52 | // });
  53 | 
  54 | });
```