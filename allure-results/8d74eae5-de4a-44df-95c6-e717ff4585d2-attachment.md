# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alert\254_JS_Alert.spec.ts >> Handle all JS alert >> Handle JS Alert - 3
- Location: tests\11_JS_Alert\254_JS_Alert.spec.ts:31:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#result')
Expected: "You entered:Hello i am TTA"
Received: "You entered: Hello i am TTA"

Call log:
  - Expect "toHaveText" locator('#result') with timeout 5000ms
  - waiting for locator('#result')
    8 × locator resolved to <p id="result">You entered: Hello i am TTA</p>
      - unexpected value "You entered: Hello i am TTA"
  - Target page, context or browser has been closed

```

```yaml
- paragraph: "You entered: Hello i am TTA"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Handle all JS alert', () => {
  4  |     test.beforeEach(async({page}) => {
  5  |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
  6  |     });
  7  | 
  8  |   test('Handle JS Alert - 1', async ({ page }) => {
  9  |     page.once('dialog', async dialog =>{
  10 |         console.log('Alert Type : ', dialog.type());
  11 |         console.log('Alert Message : ', dialog.message());
  12 |         expect(dialog.message).toBe('I am a JS Alert');
  13 |         await dialog.accept();
  14 |     })
  15 |     await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  16 |    await page.pause();
  17 |   }); 
  18 | 
  19 |   test('Handle JS Alert - 2', async ({ page }) => {
  20 |     page.once('dialog', async dialog =>{
  21 |         console.log('Alert Type : ', dialog.type());
  22 |         console.log('Alert Message : ', dialog.message());
  23 |         expect(dialog.message).toBe('I am a JS Confirm');
  24 |         //await dialog.dismiss();
  25 |         await dialog.accept();
  26 |     })
  27 |     await page.getByRole('button', {name : 'Click for JS Confirm'}).click();
  28 |    await page.pause();
  29 |   }); 
  30 |   
  31 | test('Handle JS Alert - 3', async ({ page }) => {
  32 | 
  33 |     const input = 'Hello i am TTA';
  34 | 
  35 |     page.once('dialog', async dialog =>{
  36 |         expect(dialog.type()).toBe('prompt');
  37 |         await dialog.accept(input);
  38 |     })
  39 |     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
> 40 |     await expect(page.locator('#result')).toHaveText(`You entered:${input}`)
     |                                           ^ Error: expect(locator).toHaveText(expected) failed
  41 |    await page.pause();
  42 | });
  43 | 
  44 | });
```