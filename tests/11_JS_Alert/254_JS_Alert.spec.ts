import { test, expect } from '@playwright/test';

test.describe('Handle all JS alert', () => {
    test.beforeEach(async({page}) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts', {
            waitUntil  : 'domcontentloaded',
        })
    });

  test('Handle JS Alert - 1', async ({ page }) => {

    

    page.once('dialog', async dialog =>{
        console.log('Alert Type : ', dialog.type());
        console.log('Alert Message : ', dialog.message());
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });

    await page.getByRole('button', {name : 'Click for JS Alert'}).click();
    
  }); 

  test('Handle JS Alert - 2', async ({ page }) => {

    page.once('dialog', async dialog =>{
        console.log('Alert Type : ', dialog.type());
        console.log('Alert Message : ', dialog.message());
        expect(dialog.message()).toBe('I am a JS Confirm');
        //await dialog.dismiss();
        await dialog.accept();
    });

     await page.getByRole('button', {name : 'Click for JS Confirm'}).click();

  }); 
  
test('Handle JS Alert - 3', async ({ page }) => {

    const input = 'Hello i am TTA';

    page.once('dialog', async dialog =>{
        expect(dialog.type()).toBe('prompt');
        await dialog.accept(input);
    });

     await page.getByRole('button', {name : 'Click for JS Prompt'}).click();
    
    await expect(page.locator('#result')).toHaveText(`You entered: ${input}`)
   
});

});

