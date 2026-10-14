import { expect, test } from '@playwright/test';
import path from 'node:path';
import { readLoginDataFromExcel } from './util/excelReader';
import { runLoginCase } from './util/loginForm';

test.describe('DDT Excel', () => {
    test('runs login cases loaded from the Excel workbook', async ({ page }) => {
        const filePath = path.join(__dirname, 'test-data', 'login-data.xlsx');
        const loginData = await readLoginDataFromExcel(filePath);
        expect(loginData, 'The LoginData worksheet must contain test rows').not.toHaveLength(0);

        for (const data of loginData) {
            await test.step(data.description, async () => {
                await runLoginCase(page, data);
            });
        }
    });
});
