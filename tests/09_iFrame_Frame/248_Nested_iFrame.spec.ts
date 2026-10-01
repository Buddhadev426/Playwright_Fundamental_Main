import { test, FrameLocator } from '@playwright/test';

test('Locate nested i-Frame', async ({ page }) => {

    await page.goto('https://selectorshub.com/iframe-scenario/');

  
    const mainFrame = page.locator('#pact1').nth(0).contentFrame();
    const NestedFrame1 = mainFrame.frameLocator('#pact2');
    const NestedFrame2 = NestedFrame1.frameLocator('#pact3');

await mainFrame.locator('#inp_val').fill('Rakul Preet');
await NestedFrame1.locator('#jex').fill('Kiara Advani');
await NestedFrame2.locator('#glaf').fill('Playwright');

    await page.pause();
});