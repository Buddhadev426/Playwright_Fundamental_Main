import { test, expect } from '@playwright/test';
import path from 'node:path';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/student/settings';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('TTA File upload testcase', async ({ page }) => {
    const filePath1 = path.join(__dirname, 'Screenshot (5).png');
    await page.locator('#avatar-upload').setInputFiles(filePath1);

    
    
    await page.pause();
  });
    
});