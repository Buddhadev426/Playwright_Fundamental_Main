import { test, expect } from '@playwright/test';

  test('verify the web table example-2', async ({ page }) => {
    await page.goto('https://awesomeqa.com/webtable1.html');


    const rows = page.locator('//table[@summary="Sample Table"]/tbody/tr');
    const rowsCount = await rows.count();

    for(let i=1; i <=rowsCount; i++){
        const columns = await rows.nth(i - 1).locator('td').allInnerTexts();
        console.log(`Data ${i}: ${columns}`);
    }


    
    
    await page.pause();
  });