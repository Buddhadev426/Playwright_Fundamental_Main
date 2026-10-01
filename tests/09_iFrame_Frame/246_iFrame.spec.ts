import { test, expect, FrameLocator } from '@playwright/test';

  test('Access single i-frame', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    let VechicleiFrame : FrameLocator = page.frameLocator('#frame-one');
    await VechicleiFrame.locator('#RESULT_TextField-1').fill('Suzuki 800');
    await VechicleiFrame.getByPlaceholder('Aarav Sharma').fill('Buddhadev');
    await VechicleiFrame.getByPlaceholder('MH-12-AB-1234').fill('WB-96-BM-0910');
    await VechicleiFrame.locator('#RESULT_RadioButton-1').selectOption('Electric');
    await VechicleiFrame.locator('#RESULT_TextField-4').fill('2015');
    await VechicleiFrame.locator('#RESULT_TextArea-1').fill('Amazing car');
    await VechicleiFrame.getByTestId('vehicle-submit').click();
    const output = await VechicleiFrame.locator('#vehicle-output').innerText();
    console.log(output);
 
    
    await page.pause();
  });