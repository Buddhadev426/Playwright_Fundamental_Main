import {test, expect} from '@playwright/test';

test('Hover on element', async ({page}) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    await page.getByTestId('test-id-Wifi').click();
    await page.locator('#page-title').click();
    await expect(page.getByTestId('hover-output')).toContainText('clicked');
    const output = await page.getByTestId('hover-output').innerText();
    console.log(output);

    await page.pause();
});