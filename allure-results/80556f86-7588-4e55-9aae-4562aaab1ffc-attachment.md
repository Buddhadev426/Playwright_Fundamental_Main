# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_webTables\238_ME_filter_Has.spec.ts >> template testcase
- Location: tests\07_webTables\238_ME_filter_Has.spec.ts:3:7

# Error details

```
Error: expect(locator).toHaveAttribute() failed

Locator:  locator('footer a').filter({ hasText: 'Privacy Policy' })
Expected: have attribute
Received: attribute not present
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" locator('footer a').filter({ hasText: 'Privacy Policy' }) with timeout 5000ms
  - waiting for locator('footer a').filter({ hasText: 'Privacy Policy' })
    13 × locator resolved to <a href="#privacy-policy">Privacy Policy</a>
       - unexpected value "attribute not present"

```

```yaml
- link "Privacy Policy":
  - /url: "#privacy-policy"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('template testcase', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  5  |     const forgotPassword = page.locator('a.list-group-item').filter({hasText: 'Forgotten Password'});
  6  |     await forgotPassword.click();
  7  | 
  8  | 
  9  |     const privacyPolicy = page.locator('footer a').filter({hasText : 'Privacy Policy'});
  10 |     await privacyPolicy.click();
  11 | 
> 12 |     await expect(privacyPolicy).toHaveAttribute('href="#privacy-policy"');
     |                                 ^ Error: expect(locator).toHaveAttribute() failed
  13 | 
  14 |     
  15 |     
  16 |     await page.pause();
  17 |   });
```