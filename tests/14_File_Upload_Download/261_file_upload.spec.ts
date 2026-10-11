import { test, expect } from '@playwright/test';
import path from 'node:path';


test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL, {waitUntil : 'domcontentloaded'});
  })
  test('file upload testcase', async ({ page }) => {
    //path of the file
      const filePath = path.join(__dirname,'testdata.txt');
      console.log(filePath);

      await page.locator('#single-upload').setInputFiles(filePath);
      //await page.locator('#file-submit').click();
      //await expect(page.locator('#single-upload')).toContainText('testdata.txt');

    
    
    await page.pause();
  });
    
});