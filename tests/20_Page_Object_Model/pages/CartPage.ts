import { type Locator, type Page } from '@playwright/test';

export class Cart{
    readonly page : Page;
    readonly removeButton : Locator;
    readonly emptyMessage : Locator;
    readonly continueshoppingBtn : Locator;
    readonly productTitle : Locator;
    readonly productCard : Locator;
    readonly addToCartButton : Locator;
    readonly cartLink : Locator;
    readonly checkoutLink : Locator;

    constructor(page : Page){
        this.page = page;
        this.removeButton = page.getByRole('button', {name : 'Remove'});
        this.emptyMessage = page.getByText('Your cart is empty.', { exact: true });
        this.continueshoppingBtn = page.getByRole('link', {name : 'Continue Shopping'});
        this.productTitle = page.getByRole('link', {name : 'TTA Bike Light'});
        this.productCard = page.getByRole('article').filter({has : this.productTitle});
        this.addToCartButton = this.productCard.getByRole('button', {name : 'Add to cart'});
        this.cartLink = page.getByRole('link', {name : "Shopping cart"});;
        this.checkoutLink = page.getByRole('link', {name : 'Checkout'});
    }

    async removeItem() {
        await this.removeButton.click();
    }

    async continueShopping() {
        await this.continueshoppingBtn.click();
    }

    async addBikeLightToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutLink.click();
    }
}