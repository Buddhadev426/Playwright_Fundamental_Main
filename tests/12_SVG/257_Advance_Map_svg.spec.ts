import { test, expect, Locator } from '@playwright/test';

test.describe('Test the application', () => {
const URL = 'https://simplemaps.com/svg/country/in';
  test.beforeEach(async ({page}) =>{
    await page.goto(URL);
  })
  test('template testcase', async ({ page }) => {
    const states = await page.locator( 'path'
        //"//div[@id='admin1_map_holder']//*[name()='path' and contains(@class,'sm_stat')]"
    ).all();

   // page.waitForLoadState('load');

    for(let state of states){
        let allState : string | null = await  state.getAttribute('class');
        console.log(allState);
        //page.waitForLoadState('load');
        if(allState?.includes('INWB')){
            state.click();
        }
    }

    
    
    await page.pause();
  });
    
});