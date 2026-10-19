# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\293.spec.ts >> login and view the inventory
- Location: tests\20_Page_Object_Model\293.spec.ts:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Error: First Name is required"
Received: {"_apiName": "Locator", "_frame": {"_guid": "frame@0e9ab78cfda0bfac766919312f06c468", "_type": "Frame"}, "_selector": "internal:role=alert[name=\"Error: First Name is required\"i]", Symbol(nodejs.util.inspect.custom): [Function anonymous]}
```

# Page snapshot

```yaml
- generic [ref=f5e1]:
  - complementary [ref=f5e2]:
    - button "Close menu" [ref=f5e3] [cursor=pointer]: ×
    - link "All Items" [ref=f5e4] [cursor=pointer]:
      - /url: ./inventory.html
    - link "About" [ref=f5e5] [cursor=pointer]:
      - /url: https://app.thetestingacademy.com/
    - link "Logout" [ref=f5e6] [cursor=pointer]:
      - /url: "#"
    - link "Reset App State" [ref=f5e7] [cursor=pointer]:
      - /url: "#"
  - banner [ref=f5e8]:
    - button "Open menu" [ref=f5e9] [cursor=pointer]
    - generic [ref=f5e12]: TTACart
    - link "Shopping cart" [ref=f5e13] [cursor=pointer]:
      - /url: ./cart.html
      - generic [ref=f5e18]: "1"
  - generic [ref=f5e19]: "Checkout: Your Information"
  - main [ref=f5e21]:
    - generic [ref=f5e22]:
      - generic [ref=f5e24]:
        - textbox "First Name" [ref=f5e25]
        - textbox "Last Name" [ref=f5e26]
        - textbox "Zip/Postal Code" [ref=f5e27]
        - alert [ref=f5e28]: "Error: First Name is required"
      - generic [ref=f5e29]:
        - link "Cancel" [ref=f5e30] [cursor=pointer]:
          - /url: ./cart.html
        - button "Continue" [active] [ref=f5e33] [cursor=pointer]
  - contentinfo [ref=f5e35]:
    - generic [ref=f5e36]:
      - link "Twitter" [ref=f5e37] [cursor=pointer]:
        - /url: https://twitter.com/TheTestingAcad
      - link "Facebook" [ref=f5e40] [cursor=pointer]:
        - /url: https://facebook.com/
      - link "LinkedIn" [ref=f5e43] [cursor=pointer]:
        - /url: https://linkedin.com/
    - generic [ref=f5e46]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=f5e47] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=f5e48] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { InventoryPage } from "./pages/InventoryPage";
  3  | import { LoginPage } from "./pages/LoginPage";
  4  | import { Cart } from "./pages/CartPage";
  5  | import { Checkout } from "./pages/CheckoutPage";
  6  | 
  7  | test("login and view the inventory", async ({ page }) => {
  8  |   const loginPage = new LoginPage(page);
  9  |   const inventoryPage = new InventoryPage(page);
  10 |   const cartPage = new Cart(page);
  11 |   const checkoutPage = new Checkout(page);
  12 | 
  13 |   await loginPage.goto();
  14 |   await loginPage.login("standard_user", "tta_secret");
  15 |   await expect(page).toHaveURL(/inventory/);
  16 | 
  17 |   await expect(inventoryPage.productTitle).toBeVisible();
  18 |   await expect(inventoryPage.addToCartButton).toBeVisible();
  19 |   await expect(inventoryPage.shoppingCartLink).toBeVisible();
  20 | 
  21 |   await inventoryPage.inventory();
  22 |   await expect(page).toHaveURL(/cart/);
  23 | 
  24 |   await expect(cartPage.removeButton).toBeVisible();
  25 |   await cartPage.removeItem();
  26 |   await expect(cartPage.emptyMessage).toHaveText('Your cart is empty.');
  27 |   await expect(cartPage.continueshoppingBtn).toBeVisible();
  28 | 
  29 |   await cartPage.continueShopping();
  30 |   await expect(page).toHaveURL(/inventory/);
  31 |   await expect(cartPage.productTitle).toBeVisible();
  32 |   await expect(cartPage.productCard).toBeVisible();
  33 |   await expect(cartPage.addToCartButton).toBeVisible();
  34 |   await expect(cartPage.cartLink).toBeVisible();
  35 | 
  36 |   await cartPage.addBikeLightToCart();
  37 |   await cartPage.openCart();
  38 |   await expect(page).toHaveURL(/cart/);
  39 |   await expect(cartPage.productTitle).toBeVisible();
  40 |   await expect(cartPage.checkoutLink).toBeVisible();
  41 |   await cartPage.proceedToCheckout();
  42 |   await expect(page).toHaveURL(/checkout-step-one/);
  43 | 
  44 |   await expect(checkoutPage.continueBtn).toBeVisible();
  45 |   await expect(checkoutPage.cancleBtn).toBeVisible();
  46 |   await expect(checkoutPage.firstName).toBeVisible();
  47 |   await expect(checkoutPage.lastName).toBeVisible();
  48 |   await expect(checkoutPage.zipCode).toBeVisible();
  49 | 
  50 |   await checkoutPage.continueButton();
> 51 |   expect(checkoutPage.errorMgs).toBe('Error: First Name is required');
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  52 |   
  53 |   await checkoutPage.cancleButton();
  54 |   await expect(page).toHaveURL(/cart/);
  55 | 
  56 |   await checkoutPage.checkoutButton();
  57 |   await expect(checkoutPage.continueBtn).toBeVisible();
  58 |   await expect(checkoutPage.cancleBtn).toBeVisible();
  59 |   await expect(checkoutPage.firstName).toBeVisible();
  60 |   await expect(checkoutPage.lastName).toBeVisible();
  61 |   await expect(checkoutPage.zipCode).toBeVisible();
  62 | 
  63 |   await checkoutPage.informationField('buddha', 'dev', '734556');
  64 | 
  65 |   await checkoutPage.continueButton();
  66 |   await expect(page).toHaveURL(/checkout-step-two/);
  67 |   await expect(checkoutPage.productName).toBeVisible();
  68 | 
  69 |   await page.pause();
  70 | });
  71 | 
```