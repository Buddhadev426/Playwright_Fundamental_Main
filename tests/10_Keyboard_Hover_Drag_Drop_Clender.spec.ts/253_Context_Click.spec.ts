import { test, expect } from '@playwright/test';

  test('Context click- right click', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    await page.locator('span.context-menu-one').first().click({button : 'right'});
    const allOptions = await page.locator('ul.context-menu-list span').allInnerTexts();
    console.log(allOptions);
    await page.locator('ul.context-menu-list span')
    .getByText('Copy', {exact : true}).first().click();
    const output = await page.getByTestId('ctx-output').innerText();
    console.log("----------------------------------------")
    console.log(output);


    
    
    await page.pause();
  });