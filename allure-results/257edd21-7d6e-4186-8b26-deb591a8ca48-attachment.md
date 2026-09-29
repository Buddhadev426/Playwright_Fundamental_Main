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
  - waiting for locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)')

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
              - paragraph [ref=f4e127]: John Doe
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
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: (205) Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup [ref=f4e266]:
            - row [ref=f4e268] [cursor=pointer]:
              - cell "" [ref=f4e269]:
                - generic [ref=f4e272]:
                  - checkbox "" [ref=f4e273]
                  - generic [ref=f4e274]: 
              - cell "0249" [ref=f4e276]
              - cell "Virat" [ref=f4e278]
              - cell "Kohli" [ref=f4e280]
              - cell [ref=f4e282]
              - cell [ref=f4e283]
              - cell [ref=f4e284]
              - cell [ref=f4e285]
              - cell [ref=f4e286]:
                - generic [ref=f4e287]:
                  - button "" [ref=f4e288]
                  - button "" [ref=f4e290]
            - row [ref=f4e293] [cursor=pointer]:
              - cell "" [ref=f4e294]:
                - generic [ref=f4e297]:
                  - checkbox "" [ref=f4e298]
                  - generic [ref=f4e299]: 
              - cell "0555" [ref=f4e301]
              - cell "William Charles" [ref=f4e303]
              - cell "Taylor" [ref=f4e305]
              - cell [ref=f4e307]
              - cell [ref=f4e308]
              - cell [ref=f4e309]
              - cell [ref=f4e310]
              - cell [ref=f4e311]:
                - generic [ref=f4e312]:
                  - button "" [ref=f4e313]
                  - button "" [ref=f4e315]
            - row [ref=f4e318] [cursor=pointer]:
              - cell "" [ref=f4e319]:
                - generic [ref=f4e322]:
                  - checkbox "" [ref=f4e323]
                  - generic [ref=f4e324]: 
              - cell "09876" [ref=f4e326]
              - cell "yedghjb1 ru84" [ref=f4e328]
              - cell "90jsnd" [ref=f4e330]
              - cell [ref=f4e332]
              - cell [ref=f4e333]
              - cell [ref=f4e334]
              - cell [ref=f4e335]
              - cell [ref=f4e336]:
                - generic [ref=f4e337]:
                  - button "" [ref=f4e338]
                  - button "" [ref=f4e340]
            - row [ref=f4e343] [cursor=pointer]:
              - cell "" [ref=f4e344]:
                - generic [ref=f4e347]:
                  - checkbox "" [ref=f4e348]
                  - generic [ref=f4e349]: 
              - cell "0311" [ref=f4e351]
              - cell "yqlluQZYFR" [ref=f4e353]
              - cell "yaTQBtZgLf" [ref=f4e355]
              - cell [ref=f4e357]
              - cell [ref=f4e358]
              - cell [ref=f4e359]
              - cell [ref=f4e360]
              - cell [ref=f4e361]:
                - generic [ref=f4e362]:
                  - button "" [ref=f4e363]
                  - button "" [ref=f4e365]
            - row [ref=f4e368] [cursor=pointer]:
              - cell "" [ref=f4e369]:
                - generic [ref=f4e372]:
                  - checkbox "" [ref=f4e373]
                  - generic [ref=f4e374]: 
              - cell "0259" [ref=f4e376]
              - cell "zlnudvgazrzlnudvgazr" [ref=f4e378]
              - cell "smzocpbvswsmzocpbvsw" [ref=f4e380]
              - cell [ref=f4e382]
              - cell [ref=f4e383]
              - cell [ref=f4e384]
              - cell [ref=f4e385]
              - cell [ref=f4e386]:
                - generic [ref=f4e387]:
                  - button "" [ref=f4e388]
                  - button "" [ref=f4e390]
        - navigation "Pagination Navigation" [ref=f4e393]:
          - list [ref=f4e394]:
            - listitem [ref=f4e395]:
              - button "" [ref=f4e396] [cursor=pointer]
            - listitem [ref=f4e398]:
              - button "1" [ref=f4e399] [cursor=pointer]
            - listitem [ref=f4e400]:
              - button "2" [ref=f4e401] [cursor=pointer]
            - listitem [ref=f4e402]:
              - button "3" [ref=f4e403] [cursor=pointer]
            - listitem [ref=f4e404]:
              - button "4" [ref=f4e405] [cursor=pointer]
            - listitem [ref=f4e406]:
              - button "5" [ref=f4e407] [cursor=pointer]
    - generic [ref=f4e408]:
      - paragraph [ref=f4e409]: OrangeHRM OS 5.9
      - paragraph [ref=f4e410]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e411] [cursor=pointer]:
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
  30 |     await page.getByPlaceholder('First Name').first().fill('Buddha6');
  31 |     await page.getByPlaceholder('Middle Name').first().fill('Dev');
  32 |     await page.getByPlaceholder('Last Name').first().fill('Maity');
  33 |     await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('09106');
  34 | 
  35 |     // click check and enter username & password
  36 |     await page.locator('div.oxd-switch-wrapper').first().click();
  37 |     await page.locator('//input[@autocomplete="off"]').first()
  38 |     .fill('buddha6@gmail.com');
  39 |     await page.locator('//input[@autocomplete="off"]').nth(1)
  40 |     .fill('Buddha6@123');
  41 |     await page.locator('//input[@autocomplete="off"]').last()
  42 |     .fill('Buddha6@123');
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
  53 |     let name : string = 'Buddha6 Dev';
  54 |     let row;
  55 |     while(true){
  56 |         row =page.locator('div.oxd-card-table-body div.oxd-table-row')
  57 |     .filter({hasText : name});
  58 |     if(await row.count() > 0){
  59 |         console.log('Data found');
  60 |         break;
  61 |     }
  62 | 
  63 |     const next = page.locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)');
> 64 |     if(await next.isDisabled()){
     |                   ^ Error: locator.isDisabled: Test timeout of 30000ms exceeded.
  65 |        throw new Error('Data not found');
  66 |     }
  67 |     await next.click();
  68 | 
  69 |     }
  70 | 
  71 |     await page.waitForTimeout(5000);
  72 |     
  73 |     await page.pause();
  74 |   });
  75 | })
```