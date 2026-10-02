# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 11_JS_Alert\254_JS_Alert.spec.ts >> Handle all JS alert >> Handle JS Alert - 1
- Location: tests\11_JS_Alert\254_JS_Alert.spec.ts:11:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- iframe [ref=e2]:
  - generic [ref=f1e1]:
    - generic [ref=f1e2]:
      - generic [ref=f1e5]: Application error
      - paragraph [ref=f1e6]:
        - text: An error occurred in the application and your page could not be served. If you are the application owner,
        - link "check your logs for details" [ref=f1e7] [cursor=pointer]:
          - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
        - text: . You can do this from the Heroku CLI with the command
        - code [ref=f1e8]: heroku logs --tail
    - link [ref=f1e15] [cursor=pointer]:
      - /url: https://devcenter.heroku.com/articles/logging#view-logs?utm_source=error-pages&utm_content=application-error
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Handle all JS alert', () => {
> 4  |     test.beforeEach(async({page}) => {
     |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  5  |         await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
  6  |             waitUntil  : 'domcontentloaded',
  7  |             timeout : 60000
  8  |         })
  9  |     });
  10 | 
  11 |   test('Handle JS Alert - 1', async ({ page }) => {
  12 | 
  13 |     
  14 | 
  15 |     page.once('dialog', async dialog =>{
  16 |         console.log('Alert Type : ', dialog.type());
  17 |         console.log('Alert Message : ', dialog.message());
  18 |         expect(dialog.message()).toBe('I am a JS Alert');
  19 |         await dialog.accept();
  20 |     });
  21 | 
  22 |     await page.getByRole('button', {name : 'Click for JS Alert'}).click();
  23 |     
  24 |   }); 
  25 | 
  26 |   test('Handle JS Alert - 2', async ({ page }) => {
  27 | 
  28 |     page.once('dialog', async dialog =>{
  29 |         console.log('Alert Type : ', dialog.type());
  30 |         console.log('Alert Message : ', dialog.message());
  31 |         expect(dialog.message()).toBe('I am a JS Confirm');
  32 |         //await dialog.dismiss();
  33 |         await dialog.accept();
  34 |     });
  35 | 
  36 |      await page.getByRole('button', {name : 'Click for JS Confirm'}).click();
  37 | 
  38 |   }); 
  39 |   
  40 | test('Handle JS Alert - 3', async ({ page }) => {
  41 | 
  42 |     const input = 'Hello i am TTA';
  43 | 
  44 |     page.once('dialog', async dialog =>{
  45 |         expect(dialog.type()).toBe('prompt');
  46 |         await dialog.accept(input);
  47 |     });
  48 | 
  49 |      await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
  50 |     
  51 |     await expect(page.locator('#result')).toHaveText(`You entered: ${input}`)
  52 |    
  53 | });
  54 | 
  55 | });
```