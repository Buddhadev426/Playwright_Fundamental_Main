import { test, expect } from '@playwright/test';
import { Buffer } from 'node:buffer';
import path from 'node:path';


test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL, {waitUntil : 'domcontentloaded'});
  })
  test('multiple file upload testcase', async ({ page }) => {
    //path of the file

      await page.locator('#multi-upload').setInputFiles([
        {
            name : 'file1.jpg',
            mimeType : 'image/jpeg',
            buffer : Buffer.from('this file')

        },
        {
            name : 'file2.jpg',
            mimeType : 'image/jpeg',
            buffer : Buffer.from('this file')

        }
      ]);
      
    
    
    await page.pause();
  });
    
});