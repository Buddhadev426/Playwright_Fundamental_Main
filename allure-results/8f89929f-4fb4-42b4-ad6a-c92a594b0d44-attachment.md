# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alert\254_JS_Alert.spec.ts >> Handle all JS alert >> Handle JS Alert - 2
- Location: tests\11_JS_Alert\254_JS_Alert.spec.ts:23:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Handle all JS alert', () => {
> 4  |     test.beforeEach(async({page}) => {
     |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  5  |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
  6  |     });
  7  | 
  8  |   test('Handle JS Alert - 1', async ({ page }) => {
  9  | 
  10 |     
  11 | 
  12 |     page.once('dialog', async dialog =>{
  13 |         console.log('Alert Type : ', dialog.type());
  14 |         console.log('Alert Message : ', dialog.message());
  15 |         expect(dialog.message()).toBe('I am a JS Alert');
  16 |         await dialog.accept();
  17 |     });
  18 | 
  19 |     await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  20 |     
  21 |   }); 
  22 | 
  23 |   test('Handle JS Alert - 2', async ({ page }) => {
  24 | 
  25 |     page.once('dialog', async dialog =>{
  26 |         console.log('Alert Type : ', dialog.type());
  27 |         console.log('Alert Message : ', dialog.message());
  28 |         expect(dialog.message()).toBe('I am a JS Confirm');
  29 |         //await dialog.dismiss();
  30 |         await dialog.accept();
  31 |     });
  32 | 
  33 |      await page.getByRole('button', {name : 'Click for JS Confirm'}).click();
  34 | 
  35 |   }); 
  36 |   
  37 | test('Handle JS Alert - 3', async ({ page }) => {
  38 | 
  39 |     const input = 'Hello i am TTA';
  40 | 
  41 |     page.once('dialog', async dialog =>{
  42 |         expect(dialog.type()).toBe('prompt');
  43 |         await dialog.accept(input);
  44 |     });
  45 | 
  46 |      await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
  47 |     
  48 |     await expect(page.locator('#result')).toHaveText(`You entered: ${input}`)
  49 |    
  50 | });
  51 | 
  52 | });
```