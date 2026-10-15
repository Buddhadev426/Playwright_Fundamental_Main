import {test, expect} from "@playwright/test";
import {LoginPage} from './pages/LoginPage';

test.describe('Login the TTA Cart using POM', () => {

test('login with valid credential', async({page}) =>{

 const loginPage = new LoginPage(page);
 await loginPage.goto();
 await loginPage.login('standard_user', 'tta_secret');
 await expect(page).toHaveURL(/inventory/)


  });
});