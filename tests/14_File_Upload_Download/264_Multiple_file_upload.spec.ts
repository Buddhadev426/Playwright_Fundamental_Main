import { test, expect } from '@playwright/test';
import path from 'node:path';


test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL, {waitUntil : 'domcontentloaded'});
  })
  test('file upload testcase', async ({ page }) => {
    //path of the file
      const filePath1 = path.join(__dirname,'sample.docx');
      const filePath2 = path.join(__dirname,'sample.pdf');
      const filePath3 = path.join(__dirname,'testdata.txt');

      await page.locator('#multi-upload').setInputFiles([filePath1, filePath2, filePath3]);

    
    
    await page.pause();
  });
    
});