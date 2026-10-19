import {type Locator, type Page} from '@playwright/test';
export class Thankyou{
    readonly page : Page;
    readonly completeMsg : Locator;
    readonly thankyouMsg : Locator;
    readonly backHomeLink : Locator;

    constructor(page : Page){
        this.page = page;
        this.completeMsg = page.locator('[data-test="title-row"]');
        this.thankyouMsg = page.getByRole('heading', {name : 'Thank you for your order!'});
        this.backHomeLink = page.getByRole('link', {name : 'Back Home'});
    }
    async backToHome(){
        await this.backHomeLink.click();
    }
}