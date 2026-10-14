import { faker } from '@faker-js/faker';
import { expect, test } from '@playwright/test';

const loginUrl = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

faker.seed(290);

const fakeUsers = Array.from({ length: 3 }, () => ({
    email: faker.internet.email(),
    password: faker.internet.password({ length: 16 }),
}));

test.describe('DDT with Faker', () => {
    for (const [index, user] of fakeUsers.entries()) {
        test(`submits generated user ${index + 1}`, async ({ page }) => {
            await page.goto(loginUrl);
            await page.getByRole('textbox', { name: 'Email Address' }).fill(user.email);
            await page.getByRole('textbox', { name: 'Password' }).fill(user.password);

            await expect(page.getByRole('textbox', { name: 'Email Address' })).toHaveValue(user.email);
            await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue(user.password);

            await page.getByTestId('login-button').click();
            await expect(page).toHaveURL(/#login-success$/);
        });
    }
});
