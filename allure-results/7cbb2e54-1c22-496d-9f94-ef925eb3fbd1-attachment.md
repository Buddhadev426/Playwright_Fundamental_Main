# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\293_TTACart_POM.spec.ts >> login and view the inventory
- Location: tests\20_Page_Object_Model\293_TTACart_POM.spec.ts:8:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('[class="summary-block"] div')
Expected substring: "Payment Information"
Error: strict mode violation: locator('[class="summary-block"] div') resolved to 9 elements:
    1) <div>…</div> aka getByText('Payment Information:TTACard #')
    2) <div data-test="payment-info-value">TTACard #31337</div> aka locator('[data-test="payment-info-value"]')
    3) <div>…</div> aka getByText('Shipping Information:Free TTA')
    4) <div data-test="shipping-info-value">Free TTA Express Delivery!</div> aka locator('[data-test="shipping-info-value"]')
    5) <div>…</div> aka getByText('Price TotalItem total: $9.')
    6) <div class="summary-totals">…</div> aka getByText('Item total: $9.99Tax: $0.')
    7) <div class="row" data-test="subtotal-label">Item total: $9.99</div> aka locator('[data-test="subtotal-label"]')
    8) <div class="row" data-test="tax-label">Tax: $0.80</div> aka locator('[data-test="tax-label"]')
    9) <div class="row total-row" data-test="total-label">Total: $10.79</div> aka locator('[data-test="total-label"]')

Call log:
  - Expect "toContainText" locator('[class="summary-block"] div') with timeout 5000ms
  - waiting for locator('[class="summary-block"] div')

```

# Page snapshot

```yaml
- generic [active] [ref=f8e1]:
  - complementary [ref=f8e2]:
    - button "Close menu" [ref=f8e3] [cursor=pointer]: ×
    - link "All Items" [ref=f8e4] [cursor=pointer]:
      - /url: ./inventory.html
    - link "About" [ref=f8e5] [cursor=pointer]:
      - /url: https://app.thetestingacademy.com/
    - link "Logout" [ref=f8e6] [cursor=pointer]:
      - /url: "#"
    - link "Reset App State" [ref=f8e7] [cursor=pointer]:
      - /url: "#"
  - banner [ref=f8e8]:
    - button "Open menu" [ref=f8e9] [cursor=pointer]
    - generic [ref=f8e12]: TTACart
    - link "Shopping cart" [ref=f8e13] [cursor=pointer]:
      - /url: ./cart.html
      - generic [ref=f8e18]: "1"
  - generic [ref=f8e19]: "Checkout: Overview"
  - main [ref=f8e21]:
    - generic [ref=f8e23]:
      - generic [ref=f8e24]:
        - generic [ref=f8e25]: QTY
        - generic [ref=f8e26]: Description
      - generic [ref=f8e27]:
        - generic [ref=f8e28]: "1"
        - generic [ref=f8e30]:
          - generic [ref=f8e31]: TTA Bike Light
          - generic [ref=f8e32]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=f8e33]: $9.99
      - generic [ref=f8e34]:
        - generic [ref=f8e35]:
          - heading "Payment Information:" [level=4] [ref=f8e36]
          - generic [ref=f8e37]: "TTACard #31337"
        - generic [ref=f8e38]:
          - heading "Shipping Information:" [level=4] [ref=f8e39]
          - generic [ref=f8e40]: Free TTA Express Delivery!
        - generic [ref=f8e41]:
          - heading "Price Total" [level=4] [ref=f8e42]
          - generic [ref=f8e43]:
            - generic [ref=f8e44]: "Item total: $9.99"
            - generic [ref=f8e45]: "Tax: $0.80"
            - generic [ref=f8e46]: "Total: $10.79"
      - generic [ref=f8e47]:
        - link "Cancel" [ref=f8e48] [cursor=pointer]:
          - /url: ./cart.html
        - button "Finish" [ref=f8e51] [cursor=pointer]
  - contentinfo [ref=f8e53]:
    - generic [ref=f8e54]:
      - link "Twitter" [ref=f8e55] [cursor=pointer]:
        - /url: https://twitter.com/TheTestingAcad
      - link "Facebook" [ref=f8e58] [cursor=pointer]:
        - /url: https://facebook.com/
      - link "LinkedIn" [ref=f8e61] [cursor=pointer]:
        - /url: https://linkedin.com/
    - generic [ref=f8e64]:
      - text: (c) 2026 TTACart - The Testing Academy. All Rights Reserved.
      - link "Terms of Service" [ref=f8e65] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
      - text: "|"
      - link "Privacy Policy" [ref=f8e66] [cursor=pointer]:
        - /url: https://app.thetestingacademy.com/
```

# Test source

```ts
  1   | import { expect, test } from "@playwright/test";
  2   | import { InventoryPage } from "./pages/InventoryPage";
  3   | import { LoginPage } from "./pages/LoginPage";
  4   | import { Cart } from "./pages/CartPage";
  5   | import { Checkout } from "./pages/CheckoutPage";
  6   | import { Checkout2 } from "./pages/Checkout2Page";
  7   | 
  8   | test("login and view the inventory", async ({ page }) => {
  9   |   const loginPage = new LoginPage(page);
  10  |   const inventoryPage = new InventoryPage(page);
  11  |   const cartPage = new Cart(page);
  12  |   const checkoutPage = new Checkout(page);
  13  |   const checkout2Page = new Checkout2(page);
  14  | 
  15  |   await loginPage.goto();
  16  |   await loginPage.login("standard_user", "tta_secret");
  17  |   await expect(page).toHaveURL(/inventory/);
  18  | 
  19  |   await expect(inventoryPage.productTitle).toBeVisible();
  20  |   await expect(inventoryPage.addToCartButton).toBeVisible();
  21  |   await expect(inventoryPage.shoppingCartLink).toBeVisible();
  22  | 
  23  |   await inventoryPage.inventory();
  24  |   await expect(page).toHaveURL(/cart/);
  25  | 
  26  |   await expect(cartPage.removeButton).toBeVisible();
  27  |   await cartPage.removeItem();
  28  |   await expect(cartPage.emptyMessage).toHaveText('Your cart is empty.');
  29  |   await expect(cartPage.continueshoppingBtn).toBeVisible();
  30  | 
  31  |   await cartPage.continueShopping();
  32  |   await expect(page).toHaveURL(/inventory/);
  33  |   await expect(cartPage.productTitle).toBeVisible();
  34  |   await expect(cartPage.productCard).toBeVisible();
  35  |   await expect(cartPage.addToCartButton).toBeVisible();
  36  |   await expect(cartPage.cartLink).toBeVisible();
  37  | 
  38  |   await cartPage.addBikeLightToCart();
  39  |   await cartPage.openCart();
  40  |   await expect(page).toHaveURL(/cart/);
  41  |   await expect(cartPage.productTitle).toBeVisible();
  42  |   await expect(cartPage.checkoutLink).toBeVisible();
  43  |   await cartPage.proceedToCheckout();
  44  |   await expect(page).toHaveURL(/checkout-step-one/);
  45  | 
  46  |   await expect(checkoutPage.continueBtn).toBeVisible();
  47  |   await expect(checkoutPage.cancleBtn).toBeVisible();
  48  |   await expect(checkoutPage.firstName).toBeVisible();
  49  |   await expect(checkoutPage.lastName).toBeVisible();
  50  |   await expect(checkoutPage.zipCode).toBeVisible();
  51  | 
  52  |   await checkoutPage.continueButton();
  53  |   await expect(checkoutPage.errorMgs).toContainText('First Name is required');
  54  |   
  55  |   await checkoutPage.cancleButton();
  56  |   await expect(page).toHaveURL(/cart/);
  57  | 
  58  |   await checkoutPage.checkoutButton();
  59  |   await expect(checkoutPage.continueBtn).toBeVisible();
  60  |   await expect(checkoutPage.cancleBtn).toBeVisible();
  61  |   await expect(checkoutPage.firstName).toBeVisible();
  62  |   await expect(checkoutPage.lastName).toBeVisible();
  63  |   await expect(checkoutPage.zipCode).toBeVisible();
  64  | 
  65  |   await checkoutPage.informationField('buddha', 'dev', '734556');
  66  | 
  67  |   await checkoutPage.continueButton();
  68  |   await expect(page).toHaveURL(/checkout-step-two/);
  69  |   await expect(checkoutPage.productName).toBeVisible();
  70  | 
> 71  |   await expect(checkout2Page.blockSummary).toContainText('Payment Information');
      |                                            ^ Error: expect(locator).toContainText(expected) failed
  72  |   await expect(checkout2Page.blockSummary).toContainText('Shipping Information');
  73  |   await expect(checkout2Page.blockSummary).toContainText('Price Total');
  74  |   await expect(checkout2Page.blockSummary).toContainText('Total');
  75  |   await expect(checkout2Page.cancelLink).toBeVisible();
  76  |   await expect(checkout2Page.finishBtn).toBeVisible();
  77  | 
  78  |   await checkout2Page.cancelButton();
  79  |   await expect(page).toHaveURL(/cart/);
  80  | 
  81  |   await checkoutPage.checkoutButton()
  82  |    await expect(checkoutPage.continueBtn).toBeVisible();
  83  |   await expect(checkoutPage.cancleBtn).toBeVisible();
  84  |   await expect(checkoutPage.firstName).toBeVisible();
  85  |   await expect(checkoutPage.lastName).toBeVisible();
  86  |   await expect(checkoutPage.zipCode).toBeVisible();
  87  | 
  88  |   await checkoutPage.informationField('buddha', 'dev', '734556');
  89  | 
  90  |   await checkoutPage.continueButton();
  91  |   await expect(page).toHaveURL(/checkout-step-two/);
  92  |   await expect(checkoutPage.productName).toBeVisible();
  93  | 
  94  |   await expect(checkout2Page.blockSummary).toContainText('Payment Information');
  95  |   await expect(checkout2Page.blockSummary).toContainText('Shipping Information');
  96  |   await expect(checkout2Page.blockSummary).toContainText('Price Total');
  97  |   await expect(checkout2Page.blockSummary).toContainText('Total');
  98  |   await expect(checkout2Page.cancelLink).toBeVisible();
  99  |   await expect(checkout2Page.finishBtn).toBeVisible();
  100 | 
  101 |   await checkout2Page.finishButton();
  102 |   await expect(page).toHaveURL(/checkout-complete/);
  103 | 
  104 | 
  105 | 
  106 | 
  107 | 
  108 |   await page.pause();
  109 | });
  110 | 
```