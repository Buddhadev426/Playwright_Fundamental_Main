# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> TC-1 end-to-end test OrangeHRM
- Location: tests\Practice\06_OrangeHRM.spec.ts:6:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button.oxd-pagination-page-item.oxd-pagination-page-item--previous-next').last()
    - locator resolved to <button type="button" data-v-92137808="" class="oxd-pagination-page-item oxd-pagination-page-item--previous-next">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
  20 |     await page.waitForTimeout(3000);
  21 | 
  22 |     //FILLED ALL EMPLOYEE DETAILS AND SAVE
  23 |     //choose file
  24 |     const fileChooserPromise = page.waitForEvent('filechooser');
  25 |     await page.locator('button.employee-image-action').click();
  26 |     const fileChooser = await fileChooserPromise;
  27 |     await fileChooser.setFiles("C:/Users/user/Pictures/Screenshots/Screenshot (5).png");
  28 | 
  29 |     //enter employee details 
  30 |     await page.getByPlaceholder('First Name').first().fill('Buddha4');
  31 |     await page.getByPlaceholder('Middle Name').first().fill('Dev');
  32 |     await page.getByPlaceholder('Last Name').first().fill('Maity');
  33 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('09103');
  34 | 
  35 |     // click check and enter username & password
  36 |     await page.locator('div.oxd-switch-wrapper').first().click();
  37 |     await page.locator('//input[@autocomplete="off"]').first()
  38 |     .fill('buddha4@gmail.com');
  39 |     await page.locator('//input[@autocomplete="off"]').nth(1)
  40 |     .fill('Buddha4@123');
  41 |     await page.locator('//input[@autocomplete="off"]').last()
  42 |     .fill('Buddha4@123');
  43 |     await page.getByRole('button', {name : 'Save'}).click();
  44 | 
  45 |     await page.waitForTimeout(3000);
  46 | 
  47 |      await page.locator('li.oxd-main-menu-item-wrapper span')
  48 |     .filter({hasText : 'PIM'}).first().click();
  49 | 
  50 |     await page.waitForTimeout(3000);
  51 | 
  52 |     //check profile by pagination
  53 |     let name : string = 'Buddha4 Dev Maity';
  54 |     let row;
  55 |     while(true){
  56 |         row =page.locator('div.oxd-card-table-body div.oxd-table-row')
  57 |     .filter({hasText : name});
  58 |     if(await row.count() > 0){
  59 |         break;
  60 |     }
  61 | 
  62 |     const next = page.locator('button.oxd-pagination-page-item.oxd-pagination-page-item--previous-next').last();
  63 |     if(await next.isDisabled()){
  64 |        throw new error('Data not found');
  65 |     }
> 66 |     await next.click();
     |                ^ Error: locator.click: Target page, context or browser has been closed
  67 | 
  68 |     }
  69 | 
  70 |     await page.waitForTimeout(5000);
  71 |     
  72 |     await page.pause();
  73 |   });
  74 | })
```