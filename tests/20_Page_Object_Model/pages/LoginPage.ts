import { Locator } from "@playwright/test";

export class LoginPage {
    readonly page : Page;
    readonly emailInput : Locator;
    readonly passwordField : Locator;
    readonly LoginButton : Locator;

    //page locators
    constructor(page : page){
        this.page = page;
        this.emailInput = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.LoginButton = page.getByRole('button', {name : 'Login'});

    }

    //page actions
    async goto(){
        await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    }

    async login(username : string, password : string){
        await this.emailInput.fill(username);
        await this.passwordField.fill(password);
        await this.LoginButton.click();
    }



}