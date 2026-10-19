import { type Locator, type Page } from "@playwright/test";
export class Checkout2{
    readonly page : Page;
    readonly blockSummary : Locator;
    readonly finishBtn : Locator;
    readonly cancelLink :Locator;

    constructor(page : Page){
        this.page = page;
        this.blockSummary = page.locator('[class="summary-block"]');
        this.finishBtn = page.getByRole('button', {name : 'Finish'});
        this.cancelLink = page.getByRole('link', {name : 'Cancel'});
       }

    async finishButton (){
        await this.finishBtn.click();
    };
    async cancelButton(){
        await this.cancelLink.click();
    }

}