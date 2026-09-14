import {test, expect, webkit} from '@playwright/test';

test.skip('checkout with paypal', async({page}) => {
    //never execute
});

test.only('checkout with credit card', async({page}) => {
    //only this execute, else everything will be skipped
});

test.fail('checkout with debit card', async({page}) => {
    expect(90).toBe(100);
    //this will fail
});
test.fixme('upload 2gb file', async({page}) => {
    //skipped, but flagged as "need fixing"
    
})

test('full regression report', async({page}) => {

    test.slow();
    console.log(test.info().timeout);  //9000 insted of 3000- 3 times 

});

test('mobile layout', async({page, browserName}) => {
    test.fixme(browserName === 'webkit', 'safari renders menu wrong');
});