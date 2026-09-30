import { test, expect } from '@playwright/test';

  test('Custom multi-select dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

    //① Single — searchable
    await page.getByTestId('rs-single-input').click();
    await page.getByText('WebdriverIO', {exact : true}).click();

    //② Multi — chips with remove
    await page.getByTestId('rs-multi-input').click();
    await page.getByText('Pytest', {exact : true}).click();
    await page.getByText('Mocha', {exact : true}).click();
    await page.getByLabel('Remove Pytest').click();
     await page.keyboard.press('Escape');


    //③ Creatable multi — type and Enter

    await page.getByTestId('rs-creatable-input').click();
    await page.getByText('performance', {exact : true}).click();
    await page.getByText('visual-regression', {exact : true}).click();
    await page.getByLabel('Remove visual-regression').click();
    await page.keyboard.press('Escape');

    //⑤ Async — fetched on type
    await page.getByTestId('rs-async').click();
    await page.getByTestId('rs-async-input').fill('De');
    await expect(page.getByTestId("rs-async-menu")).toContainText('Delhi');
    await page.getByRole("option", {name : 'Delhi'}).click();





    
    
    await page.pause();
  });