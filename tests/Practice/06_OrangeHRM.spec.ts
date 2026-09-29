import {test, expect, } from '@playwright/test';
import { error } from 'node:console';

test.describe('Test the OrangeHRM', () => {

  test('TC-1 end-to-end test OrangeHRM', async ({ page }) => {

    // LOGIN
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').first().fill('Admin');
    await page.getByPlaceholder('Password').first().fill('admin123');
    await page.getByRole('button', {name : 'Login'}).first().click();
    await expect(page.getByRole('heading', {name : 'Dashboard'})).toBeVisible();

    // NAVIGATE TO PIN AND CLICK ON ADD EMPLOYEE BUTTON
    await page.locator('li.oxd-main-menu-item-wrapper span')
    .filter({hasText : 'PIM'}).first().click();
    await page.getByRole('button', {name : 'Add'}).first().click();

    await page.waitForTimeout(3000);

    //FILLED ALL EMPLOYEE DETAILS AND SAVE
    //choose file
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('button.employee-image-action').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("C:/Users/user/Pictures/Screenshots/Screenshot (5).png");

    //enter employee details 
    await page.getByPlaceholder('First Name').first().fill('Buddha9');
    await page.getByPlaceholder('Middle Name').first().fill('Dev');
    await page.getByPlaceholder('Last Name').first().fill('Maity');
    await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('09109');

    // click check and enter username & password
    await page.locator('div.oxd-switch-wrapper').first().click();
    await page.locator('//input[@autocomplete="off"]').first()
    .fill('buddha9@gmail.com');
    await page.locator('//input[@autocomplete="off"]').nth(1)
    .fill('Buddha9@123');
    await page.locator('//input[@autocomplete="off"]').last()
    .fill('Buddha9@123');
    await page.getByRole('button', {name : 'Save'}).click();

    await page.waitForTimeout(3000);
      //CLICK ON PIM FOR EMPLOYEE LIST
     await page.locator('li.oxd-main-menu-item-wrapper span')
    .filter({hasText : 'PIM'}).first().click();

    await page.waitForTimeout(3000);

    //CHECK PROFILE BY PAGINATION
    let firstName : string = 'Buddha9 Dev';
    let row;
    while(true){
        row =page.locator('div.oxd-table-card')
    .filter({hasText : firstName});
    console.log('Row count:', await row.count());
    if(await row.count() > 0){
       console.log('✅ Name found:', firstName);
        break;
    }
    const next = page.locator('button.oxd-pagination-page-item--previous-next:has(i.bi-chevron-right)');
    console.log('Next button count:', await next.count());
    if(await next.isDisabled()){
       throw new Error('Data not found');
    }
    await next.click();
    }

    // NAVIGATE AND CLICK ON DELETE
    await row.locator('button:has(i.bi-trash)').click();
     await page.waitForTimeout(3000);

     //HANDALING POP-UP
     const popup = page.locator('div.orangehrm-dialog-popup');
     await popup.getByRole('button', {name : 'Yes, Delete'}).click();
    
    await page.pause();
  });
})