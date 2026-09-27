# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> TC-1 end-to-end test OrangeHRM
- Location: tests\Practice\06_OrangeHRM.spec.ts:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//input[@class="oxd-input oxd-input--active"]').nth(4)

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: manda user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e147]:
      - heading "Add Employee" [level=6] [ref=f4e148]
      - separator [ref=f4e149]
      - generic [ref=f4e150]:
        - generic [ref=f4e151]:
          - generic [ref=f4e152]:
            - generic [ref=f4e153]:
              - generic [ref=f4e154]:
                - button "Choose File"
                - generic [ref=f4e155]:
                  - img "profile picture" [ref=f4e157]
                  - button "" [ref=f4e158] [cursor=pointer]
              - generic [ref=f4e160]: Attachment Size Exceeded
            - paragraph [ref=f4e161]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f4e162]:
            - generic [ref=f4e163]:
              - generic [ref=f4e166]:
                - generic [ref=f4e167]: Employee Full Name*
                - generic [ref=f4e169]:
                  - textbox "First Name" [ref=f4e172]: Buddha
                  - textbox "Middle Name" [ref=f4e175]: Dev
                  - textbox "Last Name" [ref=f4e178]: Maity
              - generic [ref=f4e181]:
                - generic [ref=f4e182]: Employee Id
                - textbox [ref=f4e185]: "0910"
            - separator [ref=f4e186]
            - generic [ref=f4e187]:
              - paragraph [ref=f4e188]: Create Login Details
              - checkbox [checked] [ref=f4e191]
            - generic [ref=f4e194]:
              - generic [ref=f4e196]:
                - generic [ref=f4e197]: Username*
                - textbox [ref=f4e200]: buddha@getMaxListeners.com
              - generic [ref=f4e202]:
                - generic [ref=f4e203]: Status
                - generic [ref=f4e205]:
                  - generic [ref=f4e209] [cursor=pointer]:
                    - radio "Enabled" [checked] [ref=f4e210]
                    - text: Enabled
                  - generic [ref=f4e215] [cursor=pointer]:
                    - radio "Disabled" [ref=f4e216]
                    - text: Disabled
            - generic [ref=f4e219]:
              - generic [ref=f4e220]:
                - generic [ref=f4e221]:
                  - generic [ref=f4e222]: Password*
                  - textbox [ref=f4e225]
                - paragraph [ref=f4e226]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f4e228]:
                - generic [ref=f4e229]: Confirm Password*
                - textbox [active] [ref=f4e232]: buddha123
                - generic [ref=f4e233]: Passwords do not match
        - separator [ref=f4e234]
        - generic [ref=f4e235]:
          - paragraph [ref=f4e236]: "* Required"
          - button "Cancel" [ref=f4e237] [cursor=pointer]
          - button "Save" [ref=f4e238] [cursor=pointer]
    - generic [ref=f4e239]:
      - paragraph [ref=f4e240]: OrangeHRM OS 5.9
      - paragraph [ref=f4e241]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e242] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  25 |     await fileChooser.setFiles("C:/Users/user/Downloads/ChatGPT Image.png");
  26 | 
  27 |     //enter employee details 
  28 |     await page.getByPlaceholder('First Name').first().fill('Buddha');
  29 |     await page.getByPlaceholder('Middle Name').first().fill('Dev');
  30 |     await page.getByPlaceholder('Last Name').first().fill('Maity');
  31 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('0910');
  32 | 
  33 |     // click check and enter username & password
  34 |     await page.locator('div.oxd-switch-wrapper').first().click();
  35 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').nth(2)
  36 |     .fill('buddha@getMaxListeners.com');
  37 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').nth(3)
  38 |     .fill('buddha123');
  39 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').nth(4)
> 40 |     .fill('buddha123');
     |      ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  41 |     await page.getByRole('button', {name : 'Save'}).click();
  42 | 
  43 |     //check profile by pagination
  44 |     let name : string = 'Buddha Dev Maity';
  45 |     let row;
  46 |     while(true){
  47 |         row =page.locator('//div [@class = "card-item card-body-slot"]')
  48 |     .filter({hasText : name});
  49 |     if(await row.count() > 0){
  50 |         break;
  51 |     }
  52 | 
  53 |     const next = page.locator('button.oxd-pagination-page-item--previous-next');
  54 |     if(await next.isDisabled()){
  55 |        throw new error('Data not found');
  56 |     }
  57 |     await next.click();
  58 | 
  59 |     }
  60 |     
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | 
  68 |     
  69 | 
  70 |     
  71 |     
  72 |     await page.pause();
  73 |   });
  74 | })
```