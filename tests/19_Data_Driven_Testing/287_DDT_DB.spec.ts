import { expect, test } from '@playwright/test';
import { isDbConfigured, readLoginDataFromDB } from './util/dbReader';
import { runLoginCase } from './util/loginForm';

test.describe('DDT MySQL', () => {
    test('runs login cases loaded from MySQL', async ({ page }) => {
        test.skip(!isDbConfigured(), 'Set MYSQL_HOST and the other MYSQL_* variables to run database DDT.');

        const loginData = await readLoginDataFromDB();
        expect(loginData, 'The login_data table must contain active test rows').not.toHaveLength(0);

        for (const data of loginData) {
            await test.step(data.description, async () => {
                await runLoginCase(page, data);
            });
        }
    });
});
