import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('file download testcase', async ({ page }) => {

    const [staticDownload] = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-text').click()
    ]);
    await staticDownload.saveAs('./out/' + staticDownload.suggestedFilename());
    
    await page.pause();
  });
    
});