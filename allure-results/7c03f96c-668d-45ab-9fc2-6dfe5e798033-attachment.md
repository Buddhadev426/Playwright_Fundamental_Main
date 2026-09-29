# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> TC-1 end-to-end test OrangeHRM
- Location: tests\Practice\06_OrangeHRM.spec.ts:6:7

# Error details

```
Error: locator.isDisabled: Target page, context or browser has been closed
Call log:
  - waiting for locator('button.oxd-pagination-page-item--previous-next')

```

# Test source

```ts
  1   | import {test, expect, } from '@playwright/test';
  2   | import { error } from 'node:console';
  3   | 
  4   | test.describe('Test the OrangeHRM', () => {
  5   | 
  6   |   test('TC-1 end-to-end test OrangeHRM', async ({ page }) => {
  7   | 
  8   |     // LOGIN
  9   |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  10  |     await page.getByPlaceholder('Username').first().fill('Admin');
  11  |     await page.getByPlaceholder('Password').first().fill('admin123');
  12  |     await page.getByRole('button', {name : 'Login'}).first().click();
  13  |     await expect(page.getByRole('heading', {name : 'Dashboard'})).toBeVisible();
  14  | 
  15  |     // NAVIGATE TO PIN AND CLICK ON ADD EMPLOYEE BUTTON
  16  |     await page.locator('li.oxd-main-menu-item-wrapper span')
  17  |     .filter({hasText : 'PIM'}).first().click();
  18  |     await page.getByRole('button', {name : 'Add'}).first().click();
  19  | 
  20  |     //FILLED ALL EMPLOYEE DETAILS AND SAVE
  21  |     //choose file
  22  |     const fileChooserPromise = page.waitForEvent('filechooser');
  23  |     await page.locator('button.employee-image-action').click();
  24  |     const fileChooser = await fileChooserPromise;
  25  |     await fileChooser.setFiles("C:/Users/user/Pictures/Screenshots/Screenshot (5).png");
  26  | 
  27  |     //enter employee details 
  28  |     await page.getByPlaceholder('First Name').first().fill('Buddha');
  29  |     await page.getByPlaceholder('Middle Name').first().fill('Dev');
  30  |     await page.getByPlaceholder('Last Name').first().fill('Maity');
  31  |     await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('0910');
  32  | 
  33  |     // click check and enter username & password
  34  |     await page.locator('div.oxd-switch-wrapper').first().click();
  35  |     await page.locator('//input[@autocomplete="off"]').first()
  36  |     .fill('buddha1@gmail.com');
  37  |     await page.locator('//input[@autocomplete="off"]').nth(1)
  38  |     .fill('Buddha1@123');
  39  |     await page.locator('//input[@autocomplete="off"]').last()
  40  |     .fill('Buddha1@123');
  41  |     await page.getByRole('button', {name : 'Save'}).click();
  42  | 
  43  |     await page.waitForTimeout(5000);
  44  | 
  45  |      await page.locator('li.oxd-main-menu-item-wrapper span')
  46  |     .filter({hasText : 'PIM'}).first().click();
  47  | 
  48  |     //check profile by pagination
  49  |     let name : string = 'Buddha Dev Maity';
  50  |     let row;
  51  |     while(true){
  52  |         row =page.locator('//div [@class = "card-item card-body-slot"]')
  53  |     .filter({hasText : name});
  54  |     if(await row.count() > 0){
  55  |         break;
  56  |     }
  57  | 
  58  |     const next = page.locator('button.oxd-pagination-page-item--previous-next');
> 59  |     if(await next.isDisabled()){
      |                   ^ Error: locator.isDisabled: Target page, context or browser has been closed
  60  |        throw new error('Data not found');
  61  |     }
  62  |     await next.click();
  63  | 
  64  |     }
  65  | 
  66  | 
  67  | //      // Scroll through the current page
  68  | //     while (await row.count() === 0) {
  69  | 
  70  | //         const previousScrollHeight = await page.evaluate(
  71  | //             () => document.body.scrollHeight
  72  | //         );
  73  | 
  74  | //         await page.mouse.wheel(0, 800);
  75  | //         await page.waitForTimeout(500);
  76  | 
  77  | //         const currentScrollHeight = await page.evaluate(
  78  | //             () => document.body.scrollHeight
  79  | //         );
  80  | 
  81  | //         const atBottom = await page.evaluate(() => {
  82  | //             return window.innerHeight + window.scrollY >=
  83  | //                    document.body.scrollHeight - 10;
  84  | //         });
  85  | 
  86  | //         if (atBottom && currentScrollHeight === previousScrollHeight) {
  87  | //             break;
  88  | //         }
  89  | //     }
  90  | 
  91  | //     // Found on current page
  92  | //     if (await row.count() > 0) {
  93  | //         await row.scrollIntoViewIfNeeded();
  94  | 
  95  | //         console.log('Found:', await row.innerText());
  96  | 
  97  | //         break;
  98  | //     }
  99  | 
  100 | //     // Not found on current page → check pagination
  101 | //     const next = page.locator(
  102 | //         'button.oxd-pagination-page-item--previous-next'
  103 | //     ).last();
  104 | 
  105 | //     if (await next.isDisabled()) {
  106 | //         throw new Error(`Data not found: ${name}`);
  107 | //     }
  108 | 
  109 | //     // Go to next page
  110 | //     await next.click();
  111 | 
  112 | //     // Optional: wait for the new page/cards
  113 | //     await page.waitForTimeout(500);
  114 | // }
  115 |     
  116 |     
  117 |     
  118 |     await page.pause();
  119 |   });
  120 | })
```