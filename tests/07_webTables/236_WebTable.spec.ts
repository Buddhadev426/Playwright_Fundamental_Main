/* ### Project - Webtable Project
> Zeta

URL - > [awesomeqa.com/webtable.html](https://awesomeqa.com/webtable.html) 

**Objective** :  To find the Helen Bankett first in the web table, and following the 
web table, please find which country she belongs to.

**Concept** -  following sibling, Dynamic XPath creation. -> Playwright Locator. */

//    //td[.="Helen Bennett"]/following-sibling::td[1]
//    //table[@id="customers"]/tbody/tr[5]/td[2]/following-sibling::td



import { test, expect } from '@playwright/test';

  test('Verify the web table example-1', async ({ page }) => {

    await page.goto('https://awesomeqa.com/webtable.html');   
    
     const firstPart = '//table[@id="customers"]/tbody/tr[';
     const secondPart = ']/td[';
     const thirdPart  = ']';
     
     const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
     const columns = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
      
     for(let i = 2; i <= rows; i++){
        for(let j = 1; j <= columns; j++){
            const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(dynamicXpath);
            const data = await page.locator(dynamicXpath).innerText();
            //console.log(data);

            if(data.includes('Helen Bennett')){
                const countryPath = `${dynamicXpath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('--------');
                console.log(`Helen Bennet is in - ${countryText}`);
            }
        }
     }
    await page.pause();
  });