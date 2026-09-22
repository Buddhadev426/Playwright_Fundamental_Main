import {test, expect} from 'playwright/test';
test('Test wingify login with invalid input', async function({page}){
    await page .goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link', {name: 'Make Appointment', exact : true}).click();
    
    await page.pause();
})