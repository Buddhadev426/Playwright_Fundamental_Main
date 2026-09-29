# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\07_Flipkart_search.spec.ts >> Test the application >> Search prduct price respect to product name
- Location: tests\Practice\07_Flipkart_search.spec.ts:3:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTitle('Search for Products, Brands and More').last()
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
    35 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms
    - waiting for "https://www.flipkart.com/login?ret=/" navigation to finish...
    - navigated to "https://www.flipkart.com/login?ret=/"
    - waiting for element to be visible, enabled and editable
  - element was detached from the DOM, retrying
    - locator resolved to <input readonly value="" name="q" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/>
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
    7 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e4]:
    - banner [ref=f1e6]:
      - generic "Browse Flipkart" [ref=f1e8]:
        - generic [ref=f1e9]:
          - link "Flipkart marketplace dropdown" [ref=f1e10] [cursor=pointer]:
            - /url: /
            - img "FLIPKART" [ref=f1e11]
          - img "Chevron" [ref=f1e12]
      - generic [ref=f1e16]:
        - button "Search for Products, Brands and More" [ref=f1e17] [cursor=pointer]:
          - img "Search Icon" [ref=f1e18]
        - textbox "Search for Products, Brands and More" [ref=f1e22]
      - generic [ref=f1e23]:
        - generic [ref=f1e28]:
          - link "Login" [ref=f1e29] [cursor=pointer]:
            - /url: /login?ret=/
            - img "Login" [ref=f1e30]
          - img "Chevron" [ref=f1e32]
        - generic [ref=f1e37]:
          - link "More" [ref=f1e38] [cursor=pointer]:
            - /url: "#"
          - img "Chevron" [ref=f1e40]
        - link "Cart Cart" [ref=f1e43] [cursor=pointer]:
          - /url: /viewcart?marketplace=FLIPKART
          - img "Cart" [ref=f1e44]
          - generic [ref=f1e45]: Cart
    - generic [ref=f1e46]:
      - generic [ref=f1e47]:
        - text: Login
        - paragraph [ref=f1e48]: Login to access your orders, exclusive offers, rewards and recommendations
      - generic [ref=f1e51]:
        - generic [ref=f1e53]:
          - generic [ref=f1e54]: Log in for the best experience
          - generic [ref=f1e55]: Enter your phone number to continue
          - generic [ref=f1e56]:
            - button "+91" [ref=f1e57]
            - spinbutton "Phone Number" [active] [ref=f1e60]
            - generic: Phone Number
          - generic [ref=f1e61]:
            - paragraph
          - generic [ref=f1e62]:
            - paragraph
          - generic [ref=f1e63]: Use Email-ID
        - generic [ref=f1e66]:
          - text: By continuing, you confirm that you are above 18 years of age, and you agree to the Flipkart's
          - link "Terms of Use" [ref=f1e67] [cursor=pointer]:
            - /url: https://www.flipkart.com/pages/terms
          - text: and
          - link "Privacy Policy" [ref=f1e68] [cursor=pointer]:
            - /url: https://www.flipkart.com/pages/privacypolicy
        - button "Continue" [disabled] [ref=f1e71]
    - contentinfo [ref=f1e72]:
      - generic [ref=f1e74]:
        - generic [ref=f1e75]:
          - generic [ref=f1e76]:
            - generic [ref=f1e77]: ABOUT
            - link "Contact Us" [ref=f1e78] [cursor=pointer]:
              - /url: /helpcentre?otracker=footer_navlinks
            - link "About Us" [ref=f1e79] [cursor=pointer]:
              - /url: https://corporate.flipkart.net/corporate-home
            - link "Careers" [ref=f1e80] [cursor=pointer]:
              - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
            - link "Flipkart Stories" [ref=f1e81] [cursor=pointer]:
              - /url: http://stories.flipkart.com/?otracker=footer_navlinks
            - link "Press" [ref=f1e82] [cursor=pointer]:
              - /url: http://stories.flipkart.com/category/top-stories/news/
            - link "Corporate Information" [ref=f1e83] [cursor=pointer]:
              - /url: /corporate-information
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: GROUP COMPANIES
            - link "Myntra" [ref=f1e86] [cursor=pointer]:
              - /url: https://www.myntra.com/
            - link "Cleartrip" [ref=f1e87] [cursor=pointer]:
              - /url: https://www.cleartrip.com/
            - link "Shopsy" [ref=f1e88] [cursor=pointer]:
              - /url: https://www.shopsy.in
          - generic [ref=f1e89]:
            - generic [ref=f1e90]: HELP
            - link "Payments" [ref=f1e91] [cursor=pointer]:
              - /url: /pages/payments
            - link "Shipping" [ref=f1e92] [cursor=pointer]:
              - /url: /pages/shipping
            - link "Cancellation & Returns" [ref=f1e93] [cursor=pointer]:
              - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
            - link "FAQ" [ref=f1e94] [cursor=pointer]:
              - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
          - generic [ref=f1e95]:
            - generic [ref=f1e96]: CONSUMER POLICY
            - link "Cancellation & Returns" [ref=f1e97] [cursor=pointer]:
              - /url: /pages/returnpolicy?otracker=footer_navlinks
            - link "Terms Of Use" [ref=f1e98] [cursor=pointer]:
              - /url: /pages/terms?otracker=footer_navlinks
            - link "Security" [ref=f1e99] [cursor=pointer]:
              - /url: /pages/paymentsecurity?otracker=footer_navlinks
            - link "Privacy" [ref=f1e100] [cursor=pointer]:
              - /url: /pages/privacypolicy?otracker=footer_navlinks
            - link "Sitemap" [ref=f1e101] [cursor=pointer]:
              - /url: /sitemap?otracker=footer_navlinks
            - link "Grievance Redressal" [ref=f1e102] [cursor=pointer]:
              - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
            - link "EPR Compliance" [ref=f1e103] [cursor=pointer]:
              - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
            - link "FSSAI Food Safety Connect App" [ref=f1e104] [cursor=pointer]:
              - /url: https://fssai.gov.in/cms/food-safety-connect.php
          - generic [ref=f1e105]:
            - generic [ref=f1e106]: "Mail Us:"
            - generic [ref=f1e107]:
              - paragraph [ref=f1e108]: Flipkart Internet Private Limited,
              - paragraph [ref=f1e109]: Buildings Alyssa, Begonia &
              - paragraph [ref=f1e110]: Clove Embassy Tech Village,
              - paragraph [ref=f1e111]: Outer Ring Road, Devarabeesanahalli Village,
              - paragraph [ref=f1e112]: Bengaluru, 560103,
              - paragraph [ref=f1e113]: Karnataka, India
            - generic [ref=f1e114]: "Social:"
            - generic [ref=f1e115]:
              - link "Facebook" [ref=f1e117] [cursor=pointer]:
                - /url: https://www.facebook.com/flipkart
                - img "Facebook" [ref=f1e118]
              - link "Twitter" [ref=f1e120] [cursor=pointer]:
                - /url: https://www.twitter.com/flipkart
                - img "Twitter" [ref=f1e121]
              - link "YouTube" [ref=f1e123] [cursor=pointer]:
                - /url: https://www.youtube.com/flipkart
                - img "YouTube" [ref=f1e124]
              - link "Instagram" [ref=f1e126] [cursor=pointer]:
                - /url: https://www.instagram.com/flipkart
                - img "Instagram" [ref=f1e127]
          - generic [ref=f1e128]:
            - generic [ref=f1e129]: "Registered Office Address:"
            - generic [ref=f1e130]:
              - paragraph [ref=f1e131]: Flipkart Internet Private Limited,
              - paragraph [ref=f1e132]: Buildings Alyssa, Begonia &
              - paragraph [ref=f1e133]: Clove Embassy Tech Village,
              - paragraph [ref=f1e134]: Outer Ring Road, Devarabeesanahalli Village,
              - paragraph [ref=f1e135]: Bengaluru, 560103,
              - paragraph [ref=f1e136]: Karnataka, India
              - paragraph [ref=f1e137]: "CIN : U51109KA2012PTC066107"
              - paragraph
              - paragraph [ref=f1e138]:
                - text: "Telephone:"
                - link "044-45614700" [ref=f1e139] [cursor=pointer]:
                  - /url: tel:044-45614700
                - text: /
                - link "044-67415800" [ref=f1e140] [cursor=pointer]:
                  - /url: tel:044-67415800
        - generic [ref=f1e141]:
          - generic [ref=f1e142]:
            - img "Become a Seller" [ref=f1e143]
            - link "Become a Seller" [ref=f1e144] [cursor=pointer]:
              - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
          - generic [ref=f1e145]:
            - img "Advertise" [ref=f1e146]
            - generic "Advertise" [ref=f1e147]
          - generic [ref=f1e148]:
            - img "Gift Cards" [ref=f1e149]
            - link "Gift Cards" [ref=f1e150] [cursor=pointer]:
              - /url: /the-gift-card-store?otracker=footer_navlinks
          - generic [ref=f1e151]:
            - img "Help Center" [ref=f1e152]
            - link "Help Center" [ref=f1e153] [cursor=pointer]:
              - /url: /helpcentre?otracker=footer_navlinks
          - generic [ref=f1e154]: © 2007-2026 Flipkart.com
          - img "Payment methods" [ref=f1e155]
  - contentinfo
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | test.describe("Test the application", () => {
  3  |     test("Search prduct price respect to product name", async ({page}) => {
  4  |         await page.goto('https://www.flipkart.com/');
> 5  |         await page.getByTitle('Search for Products, Brands and More').last().fill('DSLR Camera');
     |                                                                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  6  | 
  7  | 
  8  |         await page.pause();
  9  |     })
  10 | })
```