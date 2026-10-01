# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 10_Keyboard_Hover_Drag_Drop_Clender.spec.ts\252_Advance_Drag_Drop.spec.ts >> Drag and Drop in kanban board
- Location: tests\10_Keyboard_Hover_Drag_Drop_Clender.spec.ts\252_Advance_Drag_Drop.spec.ts:3:7

# Error details

```
Error: locator.boundingBox: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('[data-status="in-progress"]')

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test';
  2  | 
  3  |   test('Drag and Drop in kanban board', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd'); 
  5  |   const source : Locator = page.locator('#card-write-spec');
  6  |   const sBox = (await source.boundingBox())!;
  7  | 
  8  |   const target : Locator = page.getByTestId('[data-status="in-progress"]');
> 9  |   const tBox = (await target.boundingBox())!;
     |                              ^ Error: locator.boundingBox: Target page, context or browser has been closed
  10 | 
  11 |   await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
  12 |   await page.mouse.down();
  13 |   await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 20});
  14 |   await page.mouse.up();
  15 | 
  16 |     
  17 | 
  18 |     
  19 |     
  20 |     await page.pause();
  21 |   });
```