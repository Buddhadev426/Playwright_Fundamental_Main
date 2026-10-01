import {test, expect} from '@playwright/test';
test('Keyboard Functionality', async ({page}) => {
    await page.goto('https://www.toptal.com/developers/keycode');
    await page.keyboard.press('A');
    await page.screenshot({path : 'A.png'});

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({path : "Arrowleft.png"});

    await page.keyboard.press('Shift+0');
    await page.screenshot({path : "0.png"});

    await page.keyboard.up('Shift');
    await page.keyboard.down('Shift');


    await page.pause();
});