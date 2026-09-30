import { test, expect, FrameLocator, Locator } from '@playwright/test';

  test('Test Multi-Frame', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    //Main frame
    let mainFrame : FrameLocator =  page.frameLocator('//frame[@name="main"]');
    const heading = await mainFrame.locator('#main-heading').innerText();
    console.log(heading);

    const allFrame : Locator [] = await page.locator('//frame').all();
    console.log('Total number of frame is : ', allFrame.length);

    for(const frame of allFrame){
        console.log(await frame.getAttribute('name'));
    }

    //Side frame

    let sideFrame : FrameLocator = page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();

   await mainFrame.locator('#RESULT_TextField-1').fill('Suzuki 800');
    await mainFrame.getByPlaceholder('Aarav Sharma').fill('Buddhadev');
    await mainFrame.getByPlaceholder('MH-12-AB-1234').fill('WB-96-BM-0910');
    await mainFrame.locator('#RESULT_RadioButton-1').selectOption('Electric');
    await mainFrame.locator('#RESULT_TextField-4').fill('2015');
    await mainFrame.locator('#RESULT_TextArea-1').fill('Amazing car');
    await mainFrame.getByTestId('vehicle-submit').click();
    const output = await mainFrame.locator('#vehicle-output').innerText();
    console.log(output);

    
    
    await page.pause();
  });