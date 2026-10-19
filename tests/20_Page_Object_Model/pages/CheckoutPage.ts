import { tr } from "@faker-js/faker";
import { type Locator, type Page } from "@playwright/test";

export class Checkout{
    readonly page : Page;
    readonly continueBtn : Locator;
    readonly errorMgs : Locator;
    readonly cancleBtn : Locator;
    readonly checkoutBtn : Locator;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly zipCode: Locator;
    readonly productName : Locator;

    constructor(page : Page){
        this.page = page;
        this.continueBtn = page.getByRole('button', {name : 'Continue'});
        this.errorMgs = page.locator('#checkout-error');
        this.cancleBtn = page.getByRole('link', {name : 'Cancel'});
        this.checkoutBtn = page.getByRole('link', {name : 'Checkout'});
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.zipCode = page.getByPlaceholder('Zip/Postal Code');
        this.productName = page.getByText('TTA Bike Light', {exact : true});
    }

    async continueButton(){
        await this.continueBtn.click();
    };
    async cancleButton(){
        await this.cancleBtn.click();
    };
    async checkoutButton(){
        await this.checkoutBtn.click();

    }
    async informationField(firstName : string, lastName : string, zipCode : string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
    };


}