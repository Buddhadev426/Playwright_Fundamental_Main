import {test, expect} from '@playwright/test';
import UserData from './280_User.json';
test.describe('test the application', () => {

    const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
    test.beforeEach(async({page}) => {
        await page.goto(URL)
    });

    test('Verify DDT', async({page}) => {
        console.log(UserData.username);
        console.log(UserData.password);
    })
})