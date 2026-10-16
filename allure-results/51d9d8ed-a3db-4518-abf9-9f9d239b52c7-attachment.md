# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\293.spec.ts >> login and view the inventory
- Location: tests\20_Page_Object_Model\293.spec.ts:6:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: getByRole('paragraph')
Expected substring: "Your cart is empty."
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" getByRole('paragraph') with timeout 5000ms
  - waiting for getByRole('paragraph')

```

```yaml
- complementary:
  - button "Close menu": ×
  - link "All Items":
    - /url: ./inventory.html
  - link "About":
    - /url: https://app.thetestingacademy.com/
  - link "Logout":
    - /url: "#"
  - link "Reset App State":
    - /url: "#"
- banner:
  - button "Open menu":
    - img
  - text: TTACart
  - link "Shopping cart":
    - /url: ./cart.html
    - img
    - text: "1"
- text: "Checkout: Your Information"
- main:
  - textbox "First Name"
  - textbox "Last Name"
  - textbox "Zip/Postal Code"
  - link "Cancel":
    - /url: ./cart.html
    - img
    - text: Cancel
  - button "Continue"
- contentinfo:
  - link "Twitter":
    - /url: https://twitter.com/TheTestingAcad
    - img
  - link "Facebook":
    - /url: https://facebook.com/
    - img
  - link "LinkedIn":
    - /url: https://linkedin.com/
    - img
  - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
  - link "Terms of Service":
    - /url: https://app.thetestingacademy.com/
  - text: "|"
  - link "Privacy Policy":
    - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { InventoryPage } from "./pages/InventoryPage";
  3  | import { LoginPage } from "./pages/LoginPage";
  4  | import { Cart } from "./pages/CartPage";
  5  | 
  6  | test("login and view the inventory", async ({ page }) => {
  7  |   const loginPage = new LoginPage(page);
  8  |   const inventoryPage = new InventoryPage(page);
  9  |   const cartPage = new Cart(page);
  10 | 
  11 |   await loginPage.goto();
  12 |   await loginPage.login("standard_user", "tta_secret");
  13 |   await expect(page).toHaveURL(/inventory/);
  14 | 
  15 |   await expect(inventoryPage.productTitle).toBeVisible();
  16 |   await expect(inventoryPage.addToCartButton).toBeVisible();
  17 |   await expect(inventoryPage.shoppingCartLink).toBeVisible();
  18 |   await expect(page).toHaveURL(/cart/);
  19 | 
  20 |   await inventoryPage.inventory();
  21 |   await expect(inventoryPage.productTitle).toBeVisible();
  22 | 
  23 |   
  24 |   await expect(cartPage.removeButton).toBeVisible();
  25 |   await cartPage.cart();
> 26 |   await expect(cartPage.emptyMessage).toContainText('Your cart is empty.');
     |                                       ^ Error: expect(locator).toContainText(expected) failed
  27 |   await expect(cartPage.continueshoppingBtn).toBeVisible();
  28 |   await expect(cartPage.productTitle).toBeVisible();
  29 |   await expect(cartPage.productCard).toBeVisible();
  30 |   await expect(cartPage.addToCartButton).toBeVisible();
  31 |   await expect(cartPage.cartLink).toBeVisible();
  32 |   await expect(cartPage.productTitle).toBeVisible();
  33 |   await expect(cartPage.checkoutLink).toBeVisible();
  34 |   await expect(page).toHaveURL(/checkout-step-one/);
  35 |   
  36 | 
  37 |   await page.pause();
  38 | });
  39 | 
```