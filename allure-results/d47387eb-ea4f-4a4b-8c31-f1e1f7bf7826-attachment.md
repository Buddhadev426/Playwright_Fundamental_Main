# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\13_TTA_Login.spec.ts >> Test the application >> TTA Login testcase
- Location: tests\Practice\13_TTA_Login.spec.ts:8:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#toast')
Timeout: 5000ms
- Expected  - 1
+ Received  + 3

- now assert the URL/hash or visible toast in Playwright
+
+     Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
+   

Call log:
  - Expect "toHaveText" locator('#toast') with timeout 5000ms
  - waiting for locator('#toast')
    10 × locator resolved to <div id="toast" role="status" aria-live="polite" class="toast visible">↵    Forgotten Password clicked — now assert the …</div>
       - unexpected value "
    Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
  "
    3 × locator resolved to <div id="toast" class="toast" role="status" aria-live="polite">↵    Forgotten Password clicked — now assert the …</div>
      - unexpected value "
    Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
  "

```

```yaml
- status: Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Test the application', () => {
  4  | const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
  5  | //   test.beforeEach(async ({page}) =>{
  6  | //     await page.goto(URL);
  7  | //   })
  8  |   test('TTA Login testcase', async ({ page }) => {
  9  | 
  10 |     await test.step('open the page', async()=>{
  11 |         await page.goto(URL, {waitUntil : 'domcontentloaded'});
  12 |     });
  13 |     await test.step('field are visible', async () => {
  14 |         await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeVisible();
  15 |         await expect(page.getByRole('textbox', {name : 'Password'})).toBeVisible();
  16 |         await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeEnabled();
  17 |         await expect(page.getByRole('textbox', {name : 'Password'})).toBeEnabled();
  18 |         await expect(page.getByRole('textbox', {name : 'Email Address'})).toBeEmpty();
  19 |         await expect(page.getByRole('textbox', {name : 'Password'})).toBeEmpty();
  20 |     });
  21 |     await test.step('enter login details', async () => {
  22 |         await page.getByPlaceholder('student@thetestingacademy.com').fill('buddha@gmail.com');
  23 |         await page.getByPlaceholder('Enter your password').fill('12345');
  24 |         await page.getByText('Remember me', {exact : true}).click();
  25 |         await page.getByTestId('form-forgot-password').click();
  26 |     });
  27 |     await test.step('checked & forgot message are displayed', async() =>{
  28 |         await expect(page.getByText('Remember me', {exact : true})).toBeChecked();
  29 |         await expect(page.getByText('Remember me', {exact : true})).toBeEnabled();
  30 |         await expect(page.locator('#toast')).toContainText('Forgotten Password clicked');
  31 |         await expect(page.locator('#toast'))
> 32 |         .toHaveText('now assert the URL/hash or visible toast in Playwright');
     |          ^ Error: expect(locator).toHaveText(expected) failed
  33 |         expect(page.locator('#toast'))
  34 |         .toBe('Forgotten Password clicked — now assert the URL/hash or visible toast in Playwright.');
  35 |     });
  36 |     
  37 |     await test.step('before login assertion', async() =>{
  38 |         await expect(page.getByTestId('login-button')).toHaveClass('login-btn');
  39 |         await expect(page.getByTestId('login-button')).toHaveAttribute('type', 'submit');
  40 |         await expect(page.getByTestId('login-button')).toBeEnabled();
  41 |         await expect(page.getByTestId('login-button')).toContainText('Login to Practice Account');
  42 |     });
  43 | 
  44 |     await test.step('Click on login', async () =>{
  45 |         await page.getByTestId('login-button').click();
  46 |     });
  47 | 
  48 |     await test.step('after login assertion', async() =>{
  49 |         await expect(page).toHaveURL(/password=12345#login-success/);
  50 |     }); 
  51 |     
  52 |     await page.pause();
  53 |   });
  54 |     
  55 | });
```