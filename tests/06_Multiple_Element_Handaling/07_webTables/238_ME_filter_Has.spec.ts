import { test, expect } from '@playwright/test';

  test('template testcase', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    const forgotPassword = page.locator('a.list-group-item').filter({hasText: 'Forgotten Password'});
    await forgotPassword.click();


    const privacyPolicy = page.locator('footer a').filter({hasText : 'Privacy Policy'});
    await privacyPolicy.click();

    await expect(privacyPolicy).toHaveAttribute('href', "#privacy-policy");

    
    
    await page.pause();
  });