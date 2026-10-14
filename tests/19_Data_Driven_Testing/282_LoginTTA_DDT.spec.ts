import {test, expect} from '@playwright/test';
import UserData from './test-data/LoginData.json';
test.describe('test the application', () => {

    const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
    test.beforeEach(async({page}) => {
        await page.goto(URL)
    });

    test('Verify user with valid data by DDT', async({page}) => {
        await page.getByPlaceholder('student@thetestingacademy.com')
        .fill(UserData.validUser.email);
        await page.getByPlaceholder('Enter your password')
        .fill(UserData.validUser.password);
        await page.getByTestId('login-button').click();

        });

      test('Verify user with invalid data by DDT', async({page}) => {
        await page.getByPlaceholder('student@thetestingacademy.com')
        .fill(UserData.invalidUser.email);
        await page.getByPlaceholder('Enter your password')
        .fill(UserData.invalidUser.password);
        await page.getByTestId('login-button').click();

        await page.pause();

    })
})