import { test, expect, Locator } from '@playwright/test';

test.describe('Test the application', () => {

  const URL = 'https://app.thetestingacademy.com/playwright/widgets/svg';

  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test('Advance SVG testcase', async ({ page }) => {
    const circleShape: Locator = page.locator('#circle-red');
    await circleShape.click();

    const output = await page.locator('#shapes-output').innerText();
    expect(output).toContain('circle-red');



    const allBar = await page.locator('.bar').all();

for(let bar of allBar){
    let q = await bar.getAttribute('data-quarter');
    let h = await bar.getAttribute('height');
    console.log(`${q} - ${h}`);
}

await page.pause();
  });

});