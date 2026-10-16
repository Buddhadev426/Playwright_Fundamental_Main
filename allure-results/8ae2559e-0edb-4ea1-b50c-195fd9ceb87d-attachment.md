# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\293.spec.ts >> login and view the inventory
- Location: tests\20_Page_Object_Model\293.spec.ts:6:5

# Error details

```
TypeError: page.Locator is not a function
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class Cart{
  4  |     readonly page : Page;
  5  |     readonly removeButton : Locator;
  6  |     readonly emptyMessage : Locator;
  7  |     readonly continueshoppingBtn : Locator;
  8  |     readonly productTitle : Locator;
  9  |     readonly productCard : Locator;
  10 |     readonly addToCartButton : Locator;
  11 |     readonly cartLink : Locator;
  12 |     readonly checkoutLink : Locator;
  13 | 
  14 |     constructor(page : page){
  15 |         this.page = page;
  16 |         this.removeButton = page.getByRole('button', {name : 'Remove'});
  17 |         this.emptyMessage = page.getByRole('paragraph');
  18 |         this.continueshoppingBtn = page.getByRole('link', {name : 'Continue Shopping'});
  19 |         this.productTitle = page.getByRole('link', {name : 'TTA Bike Light'});
  20 |         this.productCard = page.getByRole('article').filter({has : this.productTitle});
  21 |         this.addToCartButton = this.productCard.getByRole('button', {name : 'Add to cart'});
> 22 |         this.cartLink = page.Locator('[data-test="shopping-cart-link"]');
     |                              ^ TypeError: page.Locator is not a function
  23 |         this.checkoutLink = page.getByRole('link', {name : 'Checkout'});
  24 |     }
  25 | 
  26 |     async cart(){
  27 |         await this.removeButton.click();
  28 |         await this.continueshoppingBtn.click();
  29 |         await this.addToCartButton.click();
  30 |         await this.cartLink.click();
  31 |         await this.checkoutLink.click();
  32 |     }
  33 | 
  34 | }
```