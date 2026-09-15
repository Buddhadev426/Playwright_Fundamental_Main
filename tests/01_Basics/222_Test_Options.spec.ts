import {test, expect} from '@playwright/test';
test('context with options', async({browser}) => {
    const context = await browser.newContext({
        viewport : {height : 1920, width : 1080},
        locale : 'fr-FR',
        timezoneId : 'Europe/Paris',
        geolocation : {latitude : 12.345, longitude : 67.890},
        permissions : ['geolocation']
    });


    const page = await context.newPage();
    await page.goto("https://courses.thetestingacademy.com/courses/playwright-automation-mastery-3x/dashboard");

    await page.close();
    await context.close();
    await browser.close();
});

test('mobile context', async({browser}) => {
    const iPhone = {
        viewport : { width : 375, height : 667},
        userAgent : "Mozila/5.0",
        deviceScaleFactor : 2,
        isMobile : true,
        hasTouch : true
    };

    const context = await browser.newContext(iPhone);
    const page = await context.newPage();
    await page.goto("https://courses.thetestingacademy.com/courses/playwright-automation-mastery-3x/dashboard");

    await page.close();
    await context.close();
    await browser.close();
})