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

    //FILLED ALL EMPLOYEE DETAILS AND SAVE
    //choose file
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator('button.employee-image-action').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("C:/Users/user/Downloads/ChatGPT Image.png");

    //enter employee details 
    await page.getByPlaceholder('First Name').first().fill('Buddha');
    await page.getByPlaceholder('Middle Name').first().fill('Dev');
    await page.getByPlaceholder('Last Name').first().fill('Maity');
    await page.locator('//input[@class="oxd-input oxd-input--active"]').last().fill('0910');

    // click check and enter username & password
    await page.locator('div.oxd-switch-wrapper').first().click();
    await page.locator('//input[@autocomplete="off"]').first()
    .fill('buddha@gmail.com');
    await page.locator('//input[@autocomplete="off"]').nth(1)
    .fill('Buddha@123');
    await page.locator('//input[@autocomplete="off"]').last()
    .fill('Buddha@123');
    await page.getByRole('button', {name : 'Save'}).click();

    await page.locator('a.oxd-topbar-body-nav-tab-item').first().click();

    //check profile by pagination
    let name : string = 'Buddha Dev Maity';
    let row;
    while(true){
        row =page.locator('//div [@class = "card-item card-body-slot"]')
    .filter({hasText : name});
    // if(await row.count() > 0){
    //     break;
    // }

    // const next = page.locator('button.oxd-pagination-page-item--previous-next');
    // if(await next.isDisabled()){
    //    throw new error('Data not found');
    // }
    // await next.click();

    // }


     // Scroll through the current page
    while (await row.count() === 0) {

        const previousScrollHeight = await page.evaluate(
            () => document.body.scrollHeight
        );

        await page.mouse.wheel(0, 800);
        await page.waitForTimeout(500);

        const currentScrollHeight = await page.evaluate(
            () => document.body.scrollHeight
        );

        const atBottom = await page.evaluate(() => {
            return window.innerHeight + window.scrollY >=
                   document.body.scrollHeight - 10;
        });

        if (atBottom && currentScrollHeight === previousScrollHeight) {
            break;
        }
    }

    // Found on current page
    if (await row.count() > 0) {
        await row.scrollIntoViewIfNeeded();

        console.log('Found:', await row.innerText());

        break;
    }

    // Not found on current page → check pagination
    const next = page.locator(
        'button.oxd-pagination-page-item--previous-next'
    ).last();

    if (await next.isDisabled()) {
        throw new Error(`Data not found: ${name}`);
    }

    // Go to next page
    await next.click();

    // Optional: wait for the new page/cards
    await page.waitForTimeout(500);
}
    







    

    
    
    await page.pause();
  });
})