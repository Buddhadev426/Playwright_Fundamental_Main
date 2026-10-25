/* ## Project :  Pagination in WebTable
Objective : Find the on this page - 
   [app.thetestingacademy.com/playwright/tables/webtable]
   (https://app.thetestingacademy.com/playwright/tables/webtable) 

find the Luca Greco in which country he is present and email ID. */

import { test, expect, Locator, Page } from '@playwright/test';
import { error } from 'node:console';

async function findRowName(page : Page, name : string) : Promise<Locator> {
    while(true){
        const row = page.locator('#employees-tbody tr').filter({hasText : name});
        if(await row.count() > 0){
            return row;
        }
        const next = page.getByTestId('next-page');
        if(await next.isDisabled()){
            throw new Error('Data not found');
        }
        await next.click();
    }
}

  test('Locate the element using pagination', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/webtable');
    let name : string = 'Hannah Becker';
    const row = await findRowName(page, name);


    const email = await row.locator('//td[@data-col="email"]').innerText();
    const country = await row.locator('td[data-col="country"]').innerText()

    console.log(email);
    console.log(country);

    
    await page.pause();
  });