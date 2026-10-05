import { test, expect, Locator } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://www.flipkart.com/search';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('SVG testcase', async ({ page }) => {
    await page.getByPlaceholder('Search for products, brands and more').fill('macmini');
    const svgLocator : Locator = page.locator('svg');
   await  svgLocator.first().click();

   await page.waitForLoadState('networkidle');

   const titleResult = await page.locator('//div[@class="nZIRY7"]/div/div/a[2]').all();
   //const count : number = await titleResult.count();

   for(let title of titleResult){
     const name : string | null = await title.textContent();
     console.log(name);
   }

    
    
    await page.pause();
  });
    
});