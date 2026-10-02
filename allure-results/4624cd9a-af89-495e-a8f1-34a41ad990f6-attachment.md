# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alert\254_JS_Alert.spec.ts >> Handle all JS alert >> Handle JS Alert - 1
- Location: tests\11_JS_Alert\254_JS_Alert.spec.ts:8:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Click for JS Alert' })
    - locator resolved to <button onclick="jsAlert()">Click for JS Alert</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph
  - generic [ref=e19]:
    - separator [ref=e20]
    - generic [ref=e21]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e22] [cursor=pointer]:
        - /url: http://elementalselenium.com/
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
  10 |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  11 | 
  12 |     
  13 | 
  14 |     page.once('dialog', async dialog =>{
  15 |         console.log('Alert Type : ', dialog.type());
  16 |         console.log('Alert Message : ', dialog.message());
  17 |         expect(dialog.message()).toBe('I am a JS Alert');
  18 |         await dialog.accept();
  19 |     })
> 20 |     await page.getByRole('button', {name : 'Click for JS Alert'}).click();
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     
  22 |    
  23 |   }); 
  24 | 
  25 | //   test('Handle JS Alert - 2', async ({ page }) => {
  26 | 
  27 | //     await page.getByRole('button', {name : 'Click for JS Confirm'}).click();
  28 | 
  29 | //     page.once('dialog', async dialog =>{
  30 | //         console.log('Alert Type : ', dialog.type());
  31 | //         console.log('Alert Message : ', dialog.message());
  32 | //         expect(dialog.message()).toBe('I am a JS Confirm');
  33 | //         //await dialog.dismiss();
  34 | //         await dialog.accept();
  35 | //     })
  36 | 
  37 | 
  38 | //   }); 
  39 |   
  40 | // test('Handle JS Alert - 3', async ({ page }) => {
  41 | 
  42 | //     const input = 'Hello i am TTA';
  43 | 
  44 | //     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
  45 | 
  46 | //     page.once('dialog', async dialog =>{
  47 | //         expect(dialog.type()).toBe('prompt');
  48 | //         await dialog.accept(input);
  49 | //     })
  50 |     
  51 | //     await expect(page.locator('#result')).toHaveText(`You entered: ${input}`)
  52 | //    await page.pause();
  53 | // });
  54 | 
  55 | });
```