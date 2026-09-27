/* ## Project :  Pagination in WebTable
Objective : Find the on this page - 
   [app.thetestingacademy.com/playwright/tables/webtable]
   (https://app.thetestingacademy.com/playwright/tables/webtable) 

find the Luca Greco in which country he is present and email ID. */

import { test, expect } from '@playwright/test';
import { error } from 'node:console';

  test('Locate the element using pagination', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    let name : string = 'Hannah Becker';
    let row;

    while(true){
        row = page.locator('#employees-tbody tr').filter({hasText : name});
        if(await row.count() > 0){
            break;
        }
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()){
            throw new error('Data not found');
        }
        await next.click();
    }

    const email = await row.locator('//td[@data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText()

    console.log(email);
    console.log(country);

    
    await page.pause();
  });