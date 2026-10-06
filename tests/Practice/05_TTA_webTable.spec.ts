import { test, expect } from '@playwright/test';

  test('Verify data in TTA web table', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    //await page.locator('//tbody [@id="employee-body"]/tr[3]/td[3]/preceding-sibling::td[2]').click();
    //await page.locator('//strong[.="Rohan Mehta"]/../../../preceding-sibling::td[2]').click();
    //await page.locator('//strong[.="Rohan Mehta"]/ancestor::td/preceding-sibling::td[2]').click();;
    
    // const firstPart = '//tbody [@id="employee-body"]/tr[';
    // const secondPart = ']/td[';
    // const thirdPart = ']';

    const rows = await page.locator('//tbody [@id="employee-body"]/tr/td[3]').all();
    //const columns = await page.locator('//tbody [@id="employee-body"]/tr[1]/td').count();


    // for(let i = 1; i <= rows; i++){
    //     for(let j = 1; j <= columns; j++){
    //         const allPath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            //console.log(allPath);
            for(const row of rows){
            const data :string | null = await row.textContent();
            console.log(data);

            if(data?.includes('Rohan Mehta')){
              await row.locator(`xpath=preceding-sibling::td[2]/input`).click();
              
            }

          }
          await page.pause();
  });