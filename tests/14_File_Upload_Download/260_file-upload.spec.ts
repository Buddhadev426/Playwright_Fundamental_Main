import { test, expect } from '@playwright/test';
import path from 'node:path';


test.describe('Test the application', () => {
const URL = 'https://the-internet.herokuapp.com/upload';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL, {waitUntil : 'domcontentloaded'});
  })
  test('file upload testcase', async ({ page }) => {
    //path of the file
      const filePath = path.join(__dirname,'testdata.txt');
      console.log(filePath);

      await page.locator('#file-upload').setInputFiles(filePath);
      await page.locator('#file-submit').click();
      await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');

    
    
    await page.pause();
  });
    
});