# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\07_Flipkart_search.spec.ts >> Test the application >> Search prduct price respect to product name
- Location: tests\Practice\07_Flipkart_search.spec.ts:4:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class="q7ywiQ"]').locator('//span[@class="b3wTlE"]')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { serialize } from 'node:v8';
  3  | test.describe("Test the application", () => {
  4  |     test("Search prduct price respect to product name", async ({page}) => {
  5  |         await page.goto('https://www.flipkart.com/');
  6  |         await page.waitForTimeout(3000);
  7  |         const popup = page.locator('//div[@class="q7ywiQ"]');
> 8  |         await popup.locator('//span[@class="b3wTlE"]').click();
     |                                                        ^ Error: locator.click: Target page, context or browser has been closed
  9  | 
  10 |         const searchbox = page.locator('//input[@class="nw1UBF v1zwn26"]').nth(0);
  11 |         await searchbox.fill('DSLR Camera');
  12 |         await searchbox.press('Enter');
  13 | 
  14 |         await page.waitForTimeout(5000);
  15 | 
  16 |         
  17 | 
  18 |         while(true){
  19 |         const products = page.locator('.jIjQ8S');
  20 |         const count = await products.count();
  21 |         console.log('Total products : ', count);
  22 |         
  23 |             for(let i = 0; i < count; i++){
  24 |         const product = products.nth(i);
  25 |         const nameLocator = product.locator('.RG5Slk');
  26 |         const priceLocator = product.locator('.hZ3P6w.DeU9vF');
  27 | 
  28 | 
  29 |     if (await nameLocator.count() === 0) {
  30 |         console.log('Product name not found');
  31 |         continue;
  32 |     }
  33 | 
  34 |     if (await priceLocator.count() === 0) {
  35 |         console.log('Price not found');
  36 |         continue;
  37 |     }
  38 |             const name = await product.locator('.RG5Slk').innerText();
  39 |             const price = await product.locator('.hZ3P6w.DeU9vF').innerText();
  40 | 
  41 |             console.log(`Product ${i + 1} :`);
  42 |             console.log(`Product Name : ${name}`);
  43 |             console.log(`Product Price : ${price}`);
  44 |         }
  45 |     
  46 | 
  47 |      const next = page.locator('a.jgg0SZ').filter({ hasText: 'Next' });
  48 | 
  49 |     // If Next doesn't exist → last page
  50 |     if (await next.count() === 0) {
  51 |         console.log('No Next link. Last page reached.');
  52 |         break;
  53 |     }
  54 | 
  55 |     // Click Next
  56 |     await next.click();
  57 | 
  58 | 
  59 |     // Wait for next page
  60 |     await page.waitForLoadState('domcontentloaded');
  61 | 
  62 |     console.log('........Moved to next page......');
  63 |             
  64 | 
  65 |         }
  66 | 
  67 |         
  68 |         
  69 | 
  70 | 
  71 | 
  72 |         await page.pause();
  73 |     })
  74 | })
```