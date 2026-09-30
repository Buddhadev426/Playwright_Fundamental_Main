import { test, expect } from '@playwright/test';

  test('select  custom dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

    //Normal dropdown
    await page.getByTestId("lang-trigger").click();
    await page.getByRole("option", {name : 'JavaScript'}).click();
    //await page.locator('.select-option').nth(2).click();


    //custom dropdown
    await page.getByTestId('experience-trigger').click();
    await page.getByText('Mid-level (4-6 years)', {exact : true}).click();
    
    

    

    

    
    
    await page.pause();
  });