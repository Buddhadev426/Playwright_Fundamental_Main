import { expect, test } from "@playwright/test";
import { InventoryPage } from "./pages/InventoryPage";
import { LoginPage } from "./pages/LoginPage";
import { Cart } from "./pages/CartPage";

test("login and view the inventory", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new Cart(page);

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

  await page.pause();
});
