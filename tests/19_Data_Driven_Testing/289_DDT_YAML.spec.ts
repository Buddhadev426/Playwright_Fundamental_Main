import { expect, test } from '@playwright/test';
import path from 'node:path';
import { readYAML, type LoginRow } from './util/yamlReader';
import { runLoginCase } from './util/loginForm';

const loginData = readYAML<LoginRow>(
    path.join(__dirname, 'test-data', 'login-data.yaml')
);

if (loginData.length === 0) {
    throw new Error('The login-data.yaml fixture must contain at least one test row.');
}

test.describe('DDT YAML', () => {
    for (const data of loginData) {
        test(`login with ${data.description}`, async ({ page }) => {
            await runLoginCase(page, data);
        });
    }
});
