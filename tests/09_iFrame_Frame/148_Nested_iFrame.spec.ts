import { test, expect, FrameLocator } from '@playwright/test';

  test('Locate nested i-Frame', async ({ page }) => {
    await page.goto('https://selectorshub.com/iframe-scenario/');
    const mainFrame : FrameLocator = page.frameLocator('#pact1');
     const NestedFrame1 : FrameLocator = page.frameLocator('#pact2');
     const NestedFrame2 : FrameLocator = page.frameLocator('#pact3');

     await mainFrame.locator('#inp_val').fill('Rakul Preet');
     await NestedFrame1.locator('#jex').fill('Kiara Advani');
     await NestedFrame2.locator('#glaf').fill('Playwright');

    
    
    await page.pause();
  });