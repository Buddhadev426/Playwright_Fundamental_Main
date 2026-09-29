# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\07_Flipkart_search.spec.ts >> Test the application >> Search prduct price respect to product name
- Location: tests\Practice\07_Flipkart_search.spec.ts:3:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('//input[@class="nw1UBF v1zwn26"]').last()
    - locator resolved to <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/>
    - fill("DSLR Camera")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | test.describe("Test the application", () => {
  3  |     test("Search prduct price respect to product name", async ({page}) => {
  4  |         await page.goto('https://www.flipkart.com/');
  5  | 
> 6  |         await page.locator('//input[@class="nw1UBF v1zwn26"]').last().fill('DSLR Camera');
     |                                                                       ^ Error: locator.fill: Target page, context or browser has been closed
  7  | 
  8  | 
  9  |         await page.pause();
  10 |     })
  11 | })
```