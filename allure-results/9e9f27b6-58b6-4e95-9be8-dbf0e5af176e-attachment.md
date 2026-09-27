# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\06_OrangeHRM.spec.ts >> Test the OrangeHRM >> TC-1 end-to-end test OrangeHRM
- Location: tests\Practice\06_OrangeHRM.spec.ts:6:7

# Error details

```
Error: locator.isDisabled: Error: strict mode violation: locator('button.oxd-pagination-page-item--previous-next') resolved to 2 elements:
    1) <button type="button" data-v-92137808="" class="oxd-pagination-page-item oxd-pagination-page-item--previous-next">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(3)
    2) <button type="button" data-v-92137808="" class="oxd-pagination-page-item oxd-pagination-page-item--previous-next">…</button> aka getByRole('button').filter({ hasText: /^$/ }).nth(4)

Call log:
  - waiting for locator('button.oxd-pagination-page-item--previous-next')

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
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - table [ref=f4e231]
        - navigation "Pagination Navigation" [ref=f4e236]:
          - list [ref=f4e237]:
            - listitem [ref=f4e238]:
              - button "" [ref=f4e239] [cursor=pointer]
            - listitem [ref=f4e241]:
              - button "1" [ref=f4e242] [cursor=pointer]
            - listitem [ref=f4e243]:
              - button "2" [ref=f4e244] [cursor=pointer]
            - listitem [ref=f4e245]:
              - button "3" [ref=f4e246] [cursor=pointer]
            - listitem [ref=f4e247]:
              - button "" [active] [ref=f4e248] [cursor=pointer]
    - generic [ref=f4e250]:
      - paragraph [ref=f4e251]: OrangeHRM OS 5.9
      - paragraph [ref=f4e252]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e253] [cursor=pointer]:
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
  35 |     await page.locator('//input[@autocomplete="off"]').first()
  36 |     .fill('buddha@gmail.com');
  37 |     await page.locator('//input[@autocomplete="off"]').nth(1)
  38 |     .fill('Buddha@123');
  39 |     await page.locator('//input[@autocomplete="off"]').last()
  40 |     .fill('Buddha@123');
  41 |     await page.getByRole('button', {name : 'Save'}).click();
  42 | 
  43 |     await page.locator('a.oxd-topbar-body-nav-tab-item').first().click();
  44 | 
  45 |     //check profile by pagination
  46 |     let name : string = 'Buddha Dev Maity';
  47 |     let row;
  48 |     while(true){
  49 |         row =page.locator('//div [@class = "card-item card-body-slot"]')
  50 |     .filter({hasText : name});
  51 |     if(await row.count() > 0){
  52 |         break;
  53 |     }
  54 | 
  55 |     const next = page.locator('button.oxd-pagination-page-item--previous-next');
> 56 |     if(await next.isDisabled()){
     |                   ^ Error: locator.isDisabled: Error: strict mode violation: locator('button.oxd-pagination-page-item--previous-next') resolved to 2 elements:
  57 |        throw new error('Data not found');
  58 |     }
  59 |     await next.click();
  60 | 
  61 |     }
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
  72 |     
  73 |     
  74 |     await page.pause();
  75 |   });
  76 | })
```