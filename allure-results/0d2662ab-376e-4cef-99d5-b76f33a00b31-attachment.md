# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> TC-1 end-to-end test OrangeHRM
- Location: tests\Practice\06_OrangeHRM.spec.ts:6:7

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test, expect, } from '@playwright/test';
  2  | import { error } from 'node:console';
  3  | 
  4  | test.describe('Test the OrangeHRM', () => {
  5  | 
  6  |   test('TC-1 end-to-end test OrangeHRM', async ({ page }) => {
  7  | 
  8  |     // LOGIN
  9  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  10 |     await page.getByPlaceholder('Username').first().fill('Admin');
  11 |     await page.getByPlaceholder('Password').first().fill('admin123');
  12 |     await page.getByRole('button', {name : 'Login'}).first().click();
  13 |     await expect(page.getByRole('heading', {name : 'Dashboard'})).toBeVisible();
  14 | 
  15 |     // NAVIGATE TO PIN AND CLICK ON ADD EMPLOYEE BUTTON
  16 |     await page.locator('li.oxd-main-menu-item-wrapper span')
  17 |     .filter({hasText : 'PIM'}).first().click();
  18 |     await page.getByRole('button', {name : 'Add'}).first().click();
  19 | 
  20 |     //FILLED ALL EMPLOYEE DETAILS AND SAVE
  21 |     //choose file
  22 |     const fileChooserPromise = page.waitForEvent('filechooser');
  23 |     await page.locator('button.employee-image-action').click();
  24 |     const fileChooser = await fileChooserPromise;
  25 |     await fileChooser.setFiles("C:/Users/user/Pictures/Screenshots/Screenshot (5).png");
  26 | 
  27 |     //enter employee details 
  28 |     await page.getByPlaceholder('First Name').first().fill('Buddha2');
  29 |     await page.getByPlaceholder('Middle Name').first().fill('Dev');
  30 |     await page.getByPlaceholder('Last Name').first().fill('Maity');
  31 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('09102');
  32 | 
  33 |     // click check and enter username & password
  34 |     await page.locator('div.oxd-switch-wrapper').first().click();
  35 |     await page.locator('//input[@autocomplete="off"]').first()
  36 |     .fill('buddha2@gmail.com');
  37 |     await page.locator('//input[@autocomplete="off"]').nth(1)
  38 |     .fill('Buddha2@123');
  39 |     await page.locator('//input[@autocomplete="off"]').last()
  40 |     .fill('Buddha2@123');
  41 |     await page.getByRole('button', {name : 'Save'}).click();
  42 | 
  43 |     await page.waitForTimeout(5000);
  44 | 
  45 |      await page.locator('li.oxd-main-menu-item-wrapper span')
  46 |     .filter({hasText : 'PIM'}).first().click();
  47 | 
> 48 |     await page.waitForTimeout(5000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  49 | 
  50 |     //check profile by pagination
  51 |     let name : string = 'Buddha2 Dev Maity';
  52 |     let row;
  53 |     while(true){
  54 |         row =page.locator('div.oxd-card-table-body div.oxd-table-row')
  55 |     .filter({hasText : name});
  56 |     if(await row.count() > 0){
  57 |         break;
  58 |     }
  59 | 
  60 |     const next = page.locator('button.oxd-pagination-page-item i').last();
  61 |     if(await next.isDisabled()){
  62 |        throw new error('Data not found');
  63 |     }
  64 |     await next.click();
  65 | 
  66 |     }
  67 | 
  68 |     await page.waitForTimeout(5000);
  69 |     
  70 |     await page.pause();
  71 |   });
  72 | })
```