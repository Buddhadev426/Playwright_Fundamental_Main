import {test, expect} from 'playwright/test';
test('Test wingify login with invalid input', async function({page}){
    await page .goto("https://app.wingify.com/#/login");
    await page.getByRole('textbox', {name: 'email', exact: true}).fill('buddha@gmail.com');
    await page.getByRole('textbox',{name: 'password'}).fill('abc@123');

    await page.pause();
})