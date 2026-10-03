import {test, expect} from '@playwright/test';
import { serialize } from 'node:v8';
test.describe("Test the application", () => {
    test("Search prduct price respect to product name", async ({page}) => {
        await page.goto('https://www.flipkart.com/');
        await page.waitForTimeout(3000);
        const popup = page.locator('//div[@class="q7ywiQ"]');
        await popup.locator('//span[@class="b3wTlE"]').click();

        const searchbox = page.locator('//input[@class="nw1UBF v1zwn26"]').nth(0);
        await searchbox.fill('DSLR Camera');
        await searchbox.press('Enter');

        await page.waitForTimeout(5000);

        

        while(true){
         const products = page.locator('.jIjQ8S').filter({
        has: page.locator('.RG5Slk')});
        const count = await products.count();
        console.log('Total products : ', count);
        
            for(let i = 0; i < count; i++){
        const product = products.nth(i);
        const nameLocator = product.locator('.RG5Slk');
        const priceLocator = product.locator('.hZ3P6w.DeU9vF');


    if (await nameLocator.count() === 0) {
        console.log('Product name not found');
        continue;
    }

    if (await priceLocator.count() === 0) {
        console.log('Price not found');
        continue;
    }
            const name = await product.locator('.RG5Slk').innerText();
            const price = await product.locator('.hZ3P6w.DeU9vF').innerText();

            console.log(`Product ${i + 1} :`);
            console.log(`Product Name : ${name}`);
            console.log(`Product Price : ${price}`);
        }
    

     const next = page.locator('a.jgg0SZ').filter({ hasText: 'Next' });

    // If Next doesn't exist → last page
    if (await next.count() === 0) {
        console.log('No Next link. Last page reached.');
        break;
    }

    // Click Next
    await next.click();


    // Wait for next page
    await page.waitForLoadState('domcontentloaded');

    console.log('........Moved to next page......');
            

        }

        
        



        await page.pause();
    })
})