import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly productTitle: Locator;
  readonly productCard: Locator;
  readonly addToCartButton: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTitle = page.getByRole("link", { name: "Test.allTheThings() T-Shirt (Red)" });
    this.productCard = page.getByRole("article").filter({ has: this.productTitle });
    this.addToCartButton = this.productCard.getByRole("button", { name: "Add to cart" });
    this.shoppingCartLink = page.getByRole("link", { name: "Shopping cart" });
  }

  async goto() {
    await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/inventory");
  }

  async inventory(){
    await this.addToCartButton.click();
    await this.shoppingCartLink.click();
  }
}
