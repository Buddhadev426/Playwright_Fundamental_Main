import { test, expect, Locator } from '@playwright/test';

test('Verify Drag and Drop in Kanban Board', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    
    
    let source:Locator = page.getByTestId('card-review-pr-21');
    const sBox = (await source.boundingBox())!;

    let target: Locator = page.getByTestId('col-in-progress');
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();

    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + 100, { steps: 10 });
    await page.mouse.up();


console.log('Source count:', await source.count());
console.log('Target count:', await target.count());

console.log('Source box:', sBox);
console.log('Target box:', tBox);


    await page.pause();
});