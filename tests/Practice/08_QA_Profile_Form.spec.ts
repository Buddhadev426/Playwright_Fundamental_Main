import { test, expect } from '@playwright/test';

  test('QA profile form', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice#page');
    await page.getByTestId('first-name').fill('Buddhadev');
    await page.getByTestId('last-name').fill('Maity');
    await page.getByTestId('gender-male').click();
    await page.getByTestId('years-experience').selectOption({index : 3});
    await page.getByTestId('profile-date').fill('2000-03-25');
    await page.getByTestId('profession-automation').click();
    await page.getByTestId('tool-uft').click();
    await page.getByTestId('tool-selenium').click();
    await page.getByTestId('continent-asia').click();
    await page.getByTestId('upload-image')
    .setInputFiles("C:/Users/user/Pictures/Screenshots/Screenshot (5).png");
    await page.getByTestId('profile-submit').click();
    const output = await page.locator('#submission-output').innerText();
    console.log(output); 
    
    await page.pause();
  });