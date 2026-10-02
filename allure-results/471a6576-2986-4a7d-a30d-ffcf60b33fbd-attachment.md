# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\10_Advance.spec.ts >> Advance playwright script
- Location: tests\Practice\10_Advance.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1996.22
Received: 1996.2199999999998
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - link "ACME" [ref=f1e5] [cursor=pointer]:
      - /url: "#"
    - generic [ref=f1e8]:
      - generic [ref=f1e9]:
        - text: 
        - textbox "Start typing to search..." [ref=f1e10]
      - generic [ref=f1e11] [cursor=pointer]:
        - generic [ref=f1e12]: 
        - generic [ref=f1e13]: "7"
      - generic [ref=f1e14] [cursor=pointer]: 
  - text:          
  - generic [ref=f1e19]:
    - generic [ref=f1e20]:
      - generic [ref=f1e22]:
        - generic [ref=f1e24]:
          - generic [ref=f1e25]: Jack Gomez
          - generic [ref=f1e26]: Customer
        - generic [ref=f1e27]: 
      - list [ref=f1e29]:
        - listitem [ref=f1e30]:
          - generic [ref=f1e31]: Card types
        - listitem [ref=f1e32]:
          - link "  Credit cards" [ref=f1e33] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=f1e34]: 
            - generic [ref=f1e36]: Credit cards
        - listitem [ref=f1e37]:
          - link "  Debit cards" [ref=f1e38] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=f1e39]: 
            - generic [ref=f1e41]: Debit cards
        - listitem [ref=f1e42]:
          - generic [ref=f1e43]: Lending
        - listitem [ref=f1e44]:
          - link "  Loans" [ref=f1e45] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=f1e46]: 
            - generic [ref=f1e48]: Loans
        - listitem [ref=f1e49]:
          - link "  Mortgages" [ref=f1e50] [cursor=pointer]:
            - /url: ""
            - text: 
            - generic [ref=f1e51]: 
            - generic [ref=f1e53]: Mortgages
    - generic [ref=f1e56]:
      - generic [ref=f1e57]:
        - generic [ref=f1e58]:
          - link " Add Account" [ref=f1e59] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f1e60]: 
            - generic [ref=f1e61]: Add Account
          - link " Make Payment" [ref=f1e62] [cursor=pointer]:
            - /url: "#"
            - generic [ref=f1e63]: 
            - generic [ref=f1e64]: Make Payment
        - 'heading "Your nearest branch closes in: 30m 5s" [level=6] [ref=f1e65]'
        - heading "Financial Overview" [level=6] [ref=f1e66]
        - generic [ref=f1e70]:
          - generic [ref=f1e71]:
            - generic [ref=f1e72]: Total Balance
            - generic [ref=f1e73]:
              - generic [ref=f1e74]: $350
              - generic [ref=f1e75]:
                - generic [ref=f1e76]: "%7"
                - generic [ref=f1e77]: 
            - link "View Statement " [ref=f1e79] [cursor=pointer]:
              - /url: "#"
              - text: View Statement
              - generic [ref=f1e80]: 
          - generic [ref=f1e81]:
            - generic [ref=f1e82]: Credit Available
            - generic [ref=f1e83]: $17,800
            - link "Request Increase " [ref=f1e85] [cursor=pointer]:
              - /url: "#"
              - text: Request Increase
              - generic [ref=f1e86]: 
          - generic [ref=f1e87]:
            - generic [ref=f1e88]: Due Today
            - generic [ref=f1e89]: $180
            - link "Pay Now " [ref=f1e91] [cursor=pointer]:
              - /url: "#"
              - text: Pay Now
              - generic [ref=f1e92]: 
      - generic [ref=f1e93]:
        - heading "Recent Transactions" [level=6] [ref=f1e94]
        - table [ref=f1e97]:
          - rowgroup [ref=f1e98]:
            - row [ref=f1e99]:
              - columnheader "Status" [ref=f1e100]
              - columnheader "Date" [ref=f1e101]
              - columnheader "Description" [ref=f1e102]
              - columnheader "Category" [ref=f1e103]
              - columnheader "Amount" [ref=f1e104]
          - rowgroup [ref=f1e105]:
            - row [ref=f1e106]:
              - cell "Complete" [ref=f1e107]
              - cell "Today1:52am" [ref=f1e110]
              - cell "Starbucks coffee" [ref=f1e111]
              - cell [ref=f1e113]:
                - link "Restaurant / Cafe" [ref=f1e114] [cursor=pointer]:
                  - /url: ""
              - cell "+ 1,250 USD" [ref=f1e115]
            - row [ref=f1e116]:
              - cell "Declined" [ref=f1e117]
              - cell "Jan 19th3:22pm" [ref=f1e120]
              - cell "Stripe Payment Processing" [ref=f1e121]
              - cell [ref=f1e123]:
                - link "Finance" [ref=f1e124] [cursor=pointer]:
                  - /url: ""
              - cell "+ 952.23 USD" [ref=f1e125]
            - row [ref=f1e126]:
              - cell "Pending" [ref=f1e127]
              - cell "Yesterday7:45am" [ref=f1e130]
              - cell "MailChimp Services" [ref=f1e131]
              - cell [ref=f1e133]:
                - link "Software" [ref=f1e134] [cursor=pointer]:
                  - /url: ""
              - cell "- 320 USD" [ref=f1e135]
            - row [ref=f1e136]:
              - cell "Pending" [ref=f1e137]
              - cell "Jan 23rd2:7pm" [ref=f1e140]
              - cell "Shopify product" [ref=f1e141]
              - cell [ref=f1e143]:
                - link "Shopping" [ref=f1e144] [cursor=pointer]:
                  - /url: ""
              - cell "+ 17.99 USD" [ref=f1e145]
            - row [ref=f1e146]:
              - cell "Complete" [ref=f1e147]
              - cell "Jan 7th9:51am" [ref=f1e150]
              - cell "Ebay Marketplace" [ref=f1e151]
              - cell [ref=f1e153]:
                - link "Ecommerce" [ref=f1e154] [cursor=pointer]:
                  - /url: ""
              - cell "- 244 USD" [ref=f1e155]
            - row [ref=f1e156]:
              - cell "Pending" [ref=f1e157]
              - cell "Jan 9th7:45pm" [ref=f1e160]
              - cell "Templates Inc" [ref=f1e161]
              - cell [ref=f1e163]:
                - link "Business" [ref=f1e164] [cursor=pointer]:
                  - /url: ""
              - cell "+ 340 USD" [ref=f1e165]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { calculateSpendVsEarned } from '../../utils/amount_summary';
  3  | 
  4  | test('Advance playwright script', async ({page}) => {
  5  |     await page.goto('https://demo.applitools.com/');
  6  |     await page.locator('#username').fill('Admin');
  7  |     await page.locator('#password').fill('Password@123');
  8  |     await page.locator('#log-in').click();
  9  |     await expect(page).toHaveURL(/app.html/);
  10 | 
  11 |     const amountCells= page.locator('table.table-padded tbody tr td:last-child');
  12 |      const amountCount = await amountCells.count();
  13 |     const amounts: string[] = [];
  14 | 
  15 |     for (let i = 0; i < amountCount; i++) {
  16 |         const amount = await amountCells.nth(i).innerText();
  17 |         amounts.push(amount);
  18 |     }
  19 | 
  20 |     const result = calculateSpendVsEarned(amounts);
> 21 |     expect(result.net).toBe(1996.22);
     |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  22 | 
  23 |     await page.pause();
  24 | })
```