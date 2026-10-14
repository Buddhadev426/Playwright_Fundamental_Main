import { expect, type Page } from '@playwright/test';
import type { LoginRow } from './yamlReader';

const loginUrl = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

export async function runLoginCase(page: Page, data: LoginRow): Promise<void> {
    await page.goto(loginUrl);

    const email = page.getByRole('textbox', { name: 'Email Address' });
    const password = page.getByRole('textbox', { name: 'Password' });

    await email.fill(data.username);
    await password.fill(data.password);
    await expect(email).toHaveValue(data.username);
    await expect(password).toHaveValue(data.password);

    await page.getByTestId('login-button').click();

    await expect(page).toHaveURL(/\/multiple_element_filter(?:[?#]|$)/);
    await expect(page.getByTestId('login-button')).toBeVisible();
}
