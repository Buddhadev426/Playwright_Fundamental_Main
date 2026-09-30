# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_select_Dropdown\243_select_dropdown.spec.ts >> select normal dropdown
- Location: tests\08_select_Dropdown\243_select_dropdown.spec.ts:3:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('Option 2')
    - locator resolved to <option value="2">Option 2</option>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    22 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('select normal dropdown', async ({ page }) => {
  4  |     await page.goto('https://the-internet.herokuapp.com/dropdown');
  5  |     await page.locator('#dropdown').click();
  6  |     //await page.selectOption('#dropdown', 'Option 2');
> 7  |     await page.getByText('Option 2').click();
     |                                      ^ Error: locator.click: Target page, context or browser has been closed
  8  |     //await page.selectOption('#dropdown', {index : 2});
  9  | 
  10 | 
  11 |     
  12 |     
  13 |     await page.pause();
  14 |   });
```