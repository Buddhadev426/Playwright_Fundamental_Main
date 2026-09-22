import {test, expect} from '@playwright/test';

test.describe('login page', () => {
    test('valid credentials', async({page}) => {
        await page.goto("https://app.thetestingacademy.com/login");

    });

    test('invalid credentials', async({page}) =>{
        await page.goto("https://app.thetestingacademy.com/login");
    });

    test.skip('checkout with paypal', async({page}) => {
    //never execute
});

test.only('checkout with paypa2', async({page}) => {
    //never execute
});

})