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
Error: locator.isDisabled: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button.oxd-pagination-page-item--previous-next')

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e153]:
              - generic [ref=f3e154]:
                - button "Choose File"
                - generic [ref=f3e155]:
                  - img "profile picture" [ref=f3e157]
                  - button "" [ref=f3e158] [cursor=pointer]
              - generic [ref=f3e160]: Attachment Size Exceeded
            - paragraph [ref=f3e161]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e162]:
            - generic [ref=f3e163]:
              - generic [ref=f3e166]:
                - generic [ref=f3e167]: Employee Full Name*
                - generic [ref=f3e169]:
                  - textbox "First Name" [ref=f3e172]: Buddha
                  - textbox "Middle Name" [ref=f3e175]: Dev
                  - textbox "Last Name" [ref=f3e178]: Maity
              - generic [ref=f3e181]:
                - generic [ref=f3e182]: Employee Id
                - textbox [ref=f3e185]: "0910"
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [checked] [ref=f3e191]
            - generic [ref=f3e194]:
              - generic [ref=f3e196]:
                - generic [ref=f3e197]: Username*
                - textbox [ref=f3e200]: buddha123
              - generic [ref=f3e202]:
                - generic [ref=f3e203]: Status
                - generic [ref=f3e205]:
                  - generic [ref=f3e209] [cursor=pointer]:
                    - radio "Enabled" [checked] [ref=f3e210]
                    - text: Enabled
                  - generic [ref=f3e215] [cursor=pointer]:
                    - radio "Disabled" [ref=f3e216]
                    - text: Disabled
            - generic [ref=f3e219]:
              - generic [ref=f3e220]:
                - generic [ref=f3e221]:
                  - generic [ref=f3e222]: Password*
                  - textbox [ref=f3e225]
                  - generic [ref=f3e226]: Required
                - paragraph [ref=f3e227]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f3e229]:
                - generic [ref=f3e230]: Confirm Password*
                - textbox [ref=f3e233]: buddha123
                - generic [ref=f3e234]: Passwords do not match
        - separator [ref=f3e235]
        - generic [ref=f3e236]:
          - paragraph [ref=f3e237]: "* Required"
          - button "Cancel" [ref=f3e238] [cursor=pointer]
          - button "Save" [active] [ref=f3e239] [cursor=pointer]
    - generic [ref=f3e240]:
      - paragraph [ref=f3e241]: OrangeHRM OS 5.9
      - paragraph [ref=f3e242]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e243] [cursor=pointer]:
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
  37 |     await page.locator('//input[@autocomplete="off"]').first()
  38 |     .fill('buddha123');
  39 |     await page.locator('//input[@autocomplete="off"]').last()
  40 |     .fill('buddha123');
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
> 54 |     if(await next.isDisabled()){
     |                   ^ Error: locator.isDisabled: Test timeout of 30000ms exceeded.
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