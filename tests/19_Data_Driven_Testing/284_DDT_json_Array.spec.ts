import { test, expect } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  });

  // TEST DATA — array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin123@ymail.com",
            password: "wrongpass",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectedURL: /admin123/,
            shouldPass: false
        },
        {
            description: "empty password",
            username: "pramod@ppp.com",
            password: "",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "both empty",
            username: "",
            password: "",
            expectedURL: /multiple_element_filter/,
            shouldPass: false
        }
    ];

    for(const data of loginData){
        test(`login with ${data.description}`, async ({page}) => {
             await page.getByPlaceholder('student@thetestingacademy.com')
        .fill(data.username);
        await page.getByPlaceholder('Enter your password')
        .fill(data.password);
        await page.getByTestId('login-button').click();

        })
    }
  
    
});