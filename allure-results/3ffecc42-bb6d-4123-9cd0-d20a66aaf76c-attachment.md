# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\09_TTA_Hover.spec.ts >> Hover on element
- Location: tests\Practice\09_TTA_Hover.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('hover-output')
    - locator resolved to <div id="output" class="submission-output" data-testid="hover-output">{↵  "clicked": "📶\nWi-Fi",↵  "testId": "test-id-W…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a href="#" role="menuitem" class="submenu-item" data-testid="test-id-Meal">…</a> from <nav class="navbar" aria-label="Travel main">…</nav> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <a href="#" role="menuitem" class="submenu-item" data-testid="test-id-Meal">…</a> from <nav class="navbar" aria-label="Travel main">…</nav> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 100ms
    14 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <a href="#" role="menuitem" class="submenu-item" data-testid="test-id-Meal">…</a> from <nav class="navbar" aria-label="Travel main">…</nav> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | test('Hover on element', async ({page}) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
  5  |     await page.getByTestId('nav-add-ons').hover();
  6  |     await page.waitForTimeout(5000);
  7  |     await page.getByTestId('test-id-Wifi').click();
> 8  |     await page.getByTestId('hover-output').click();
     |                                            ^ Error: locator.click: Target page, context or browser has been closed
  9  |     await expect(page.getByTestId('hover-output')).toContainText('clicked');
  10 |     const output = await page.getByTestId('hover-output').innerText();
  11 |     console.log(output);
  12 | 
  13 |     await page.pause();
  14 | });
```