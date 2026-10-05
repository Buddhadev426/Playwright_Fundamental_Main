import { test, expect } from '@playwright/test';

  test('verify the web table example-2', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable1.html');


    const rows = await page.locator('//table[@summary="Sample Table"]/tbody/tr').all();
    //const rowsCount = await rows.count();
      let i = 0;
    for(const row of rows){
      i++;
        const columns = await row.locator('xpath=td').allInnerTexts();
        console.log(`Data ${i+1}: ${columns}`);
    }


    
    
    await page.pause();
  });