

npx playwright test playwright-assertions.spec.ts -g "<test-name>"

# ⚡ Quick Reference Cheat Sheet
| Category | Assertion | Auto Retry |
| ----- | ----- | ----- |
| Visibility | `toBeVisible()`  | ✅ |
| Visibility | `toBeHidden()`  | ✅ |
| Presence | `toBeAttached()`  | ✅ |
| Viewport | `toBeInViewport()`  | ✅ |
| State | `toBeEnabled()`  | ✅ |
| State | `toBeDisabled()`  | ✅ |
| State | `toBeEditable()`  | ✅ |
| State | `toBeChecked()`  | ✅ |
| State | `toBeFocused()`  | ✅ |
| Text | `toHaveText()`  | ✅ |
| Text | `toContainText()`  | ✅ |
| Attribute | `toHaveAttribute()`  | ✅ |
| CSS | `toHaveCSS()`  | ✅ |
| JS Property | `toHaveJSProperty()`  | ✅ |
| Values | `toHaveValue()`  | ✅ |
| Count | `toHaveCount()`  | ✅ |
| Accessibility | `toHaveRole()`  | ✅ |
| Accessibility | `toHaveAccessibleName()`  | ✅ |
| Accessibility | `toMatchAriaSnapshot()`  | ✅ |
| Screenshot | `toHaveScreenshot()`  | ✅ |
| Page | `toHaveTitle()`  | ✅ |
| Page | `toHaveURL()`  | ✅ |
| API | `toBeOK()`  | ❌ |
| Equality | `toBe()`  | ❌ |
| Equality | `toEqual()`  | ❌ |
| Equality | `toStrictEqual()`  | ❌ |
| Numeric | `toBeGreaterThan()`  | ❌ |
| Numeric | `toBeCloseTo()`  | ❌ |
| Arrays | `toContain()`  | ❌ |
| Regex | `toMatch()`  | ❌ |
| Objects | `toHaveProperty()`  | ❌ |
| Errors | `toThrow()`  | ❌ |
---

# 🧠 Rule of Thumb
- **Locator/Page Assertions** → Auto-retry until timeout
- **Generic Assertions** → Execute once immediately
- Use `.soft`  → Continue execution after failures
- Use `expect.poll`  → Poll non-locator values repeatedly
- Prefer `toHaveCount(0)`  over `.not.toBeVisible()`  for lists
# _expect()_ in Playwright
```
import { test, **expect** } from '@playwright/test';
```
await expect(page.locator('#username').**toBeVisible()**

#### What an assertion actually does
When Playwright hits `expect(locator).toBeVisible()`, three things happen:

1. It checks the condition (is the element visible?)
2. If true → test continues silently
3. If false → it throws an `AssertionError`  with the expected vs. actual value, a screenshot, the trace, and the line number
