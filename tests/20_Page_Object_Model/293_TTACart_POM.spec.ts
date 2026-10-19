import { expect, test } from "@playwright/test";
import { InventoryPage } from "./pages/InventoryPage";
import { LoginPage } from "./pages/LoginPage";
import { Cart } from "./pages/CartPage";
import { Checkout } from "./pages/CheckoutPage";
import { Checkout2 } from "./pages/Checkout2Page";
import { Thankyou } from "./pages/ThankyouPage";

test("login and view the inventory", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new Cart(page);
  const checkoutPage = new Checkout(page);
  const checkout2Page = new Checkout2(page);
  const thankyouPage = new Thankyou(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "tta_secret");
  await expect(page).toHaveURL(/inventory/);

  await expect(inventoryPage.productTitle).toBeVisible();
  await expect(inventoryPage.addToCartButton).toBeVisible();
  await expect(inventoryPage.shoppingCartLink).toBeVisible();

  await inventoryPage.inventory();
  await expect(page).toHaveURL(/cart/);

  await expect(cartPage.removeButton).toBeVisible();
  await cartPage.removeItem();
  await expect(cartPage.emptyMessage).toHaveText('Your cart is empty.');
  await expect(cartPage.continueshoppingBtn).toBeVisible();

  await cartPage.continueShopping();
  await expect(page).toHaveURL(/inventory/);
  await expect(cartPage.productTitle).toBeVisible();
  await expect(cartPage.productCard).toBeVisible();
  await expect(cartPage.addToCartButton).toBeVisible();
  await expect(cartPage.cartLink).toBeVisible();

  await cartPage.addBikeLightToCart();
  await cartPage.openCart();
  await expect(page).toHaveURL(/cart/);
  await expect(cartPage.productTitle).toBeVisible();
  await expect(cartPage.checkoutLink).toBeVisible();
  await cartPage.proceedToCheckout();
  await expect(page).toHaveURL(/checkout-step-one/);

  await expect(checkoutPage.continueBtn).toBeVisible();
  await expect(checkoutPage.cancleBtn).toBeVisible();
  await expect(checkoutPage.firstName).toBeVisible();
  await expect(checkoutPage.lastName).toBeVisible();
  await expect(checkoutPage.zipCode).toBeVisible();

  await checkoutPage.continueButton();
  await expect(checkoutPage.errorMgs).toContainText('First Name is required');
  
  await checkoutPage.cancleButton();
  await expect(page).toHaveURL(/cart/);

  await checkoutPage.checkoutButton();
  await expect(checkoutPage.continueBtn).toBeVisible();
  await expect(checkoutPage.cancleBtn).toBeVisible();
  await expect(checkoutPage.firstName).toBeVisible();
  await expect(checkoutPage.lastName).toBeVisible();
  await expect(checkoutPage.zipCode).toBeVisible();

  await checkoutPage.informationField('buddha', 'dev', '734556');

  await checkoutPage.continueButton();
  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(checkoutPage.productName).toBeVisible();

  await expect(checkout2Page.blockSummary).toContainText('Payment Information');
  await expect(checkout2Page.blockSummary).toContainText('Shipping Information');
  await expect(checkout2Page.blockSummary).toContainText('Price Total');
  await expect(checkout2Page.blockSummary).toContainText('Total');
  await expect(checkout2Page.cancelLink).toBeVisible();
  await expect(checkout2Page.finishBtn).toBeVisible();

  await checkout2Page.cancelButton();
  await expect(page).toHaveURL(/cart/);

  await checkoutPage.checkoutButton()
   await expect(checkoutPage.continueBtn).toBeVisible();
  await expect(checkoutPage.cancleBtn).toBeVisible();
  await expect(checkoutPage.firstName).toBeVisible();
  await expect(checkoutPage.lastName).toBeVisible();
  await expect(checkoutPage.zipCode).toBeVisible();

  await checkoutPage.informationField('buddha', 'dev', '734556');

  await checkoutPage.continueButton();
  await expect(page).toHaveURL(/checkout-step-two/);
  await expect(checkoutPage.productName).toBeVisible();

  await expect(checkout2Page.blockSummary).toContainText('Payment Information');
  await expect(checkout2Page.blockSummary).toContainText('Shipping Information');
  await expect(checkout2Page.blockSummary).toContainText('Price Total');
  await expect(checkout2Page.blockSummary).toContainText('Total');
  await expect(checkout2Page.cancelLink).toBeVisible();
  await expect(checkout2Page.finishBtn).toBeVisible();

  await checkout2Page.finishButton();
  await expect(page).toHaveURL(/checkout-complete/);

  await expect(thankyouPage.completeMsg).toContainText('Checkout: Complete!');
  await expect(thankyouPage.thankyouMsg).toBeVisible();
  await expect(thankyouPage.backHomeLink).toBeVisible();

  await thankyouPage.backToHome();
  await expect(page).toHaveURL(/inventory/);



  await page.pause();
});
