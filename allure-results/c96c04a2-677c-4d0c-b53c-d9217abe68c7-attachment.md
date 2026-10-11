# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_Scroll_toElement\268_Lazy_loading.spec.ts >> Test the application >> Lazy loading testcase
- Location: tests\16_Scroll_toElement\268_Lazy_loading.spec.ts:11:7

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 15
Received:   15

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - 'region "Announcement: Playwright Automation Mastery new batch" [ref=e2]':
    - generic [ref=e3]: LIVE
    - generic [ref=e5]: Playwright Automation Mastery
    - generic [ref=e6]: New batch
    - generic [ref=e7]: "|"
    - generic [ref=e8]: Starts 28 Sept · Mon, Wed, Fri · 7 AM IST
    - generic [ref=e9]: "|"
    - emphasis [ref=e11]: UP TO 10% OFF
    - generic [ref=e12]:
      - text: Code
      - code [ref=e13]: PROMODE
    - link "Enroll" [ref=e14] [cursor=pointer]:
      - /url: https://class.thetestingacademy.com/playwright-automation-mastery-course
    - link "Chat on WhatsApp" [ref=e15] [cursor=pointer]:
      - /url: https://sdet.live/WhatsApp
      - text: ☎
    - button "Dismiss banner" [ref=e16] [cursor=pointer]: ×
  - generic [ref=e17]:
    - complementary "Practice navigation" [ref=e18]:
      - generic [ref=e19]:
        - link "T The Testing Academy" [ref=e20] [cursor=pointer]:
          - /url: ../index.html
          - generic [ref=e21]: T
          - strong [ref=e23]: The Testing Academy
        - button "Toggle sidebar" [ref=e24] [cursor=pointer]
      - generic [ref=e28]:
        - searchbox / [ref=e32]
        - generic [ref=e33]: /
      - navigation [ref=e34]:
        - generic [ref=e35]:
          - button "JavaScript" [expanded] [ref=e36] [cursor=pointer]
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link "Overview" [ref=e45] [cursor=pointer]:
                - /url: ../learn/javascript/index.html
            - listitem [ref=e51]:
              - link "Foundations (ch 1-4)" [ref=e52] [cursor=pointer]:
                - /url: ../learn/javascript/foundations.html
            - listitem [ref=e55]:
              - generic [ref=e56]:
                - generic [ref=e58]: Control flow (ch 5-7)
                - generic [ref=e59]: soon
            - listitem [ref=e60]:
              - generic [ref=e61]:
                - generic [ref=e63]: Data structures (ch 8-12)
                - generic [ref=e64]: soon
            - listitem [ref=e65]:
              - generic [ref=e66]:
                - generic [ref=e68]: Functions (ch 9 + 13)
                - generic [ref=e69]: soon
            - listitem [ref=e70]:
              - generic [ref=e71]:
                - generic [ref=e73]: Async (ch 14-15)
                - generic [ref=e74]: soon
            - listitem [ref=e75]:
              - generic [ref=e76]:
                - generic [ref=e78]: OOP (ch 16-17)
                - generic [ref=e79]: soon
            - listitem [ref=e80]:
              - link "JS notes" [ref=e81] [cursor=pointer]:
                - /url: ../notes.html
        - generic [ref=e88]:
          - button "TypeScript" [expanded] [ref=e89] [cursor=pointer]
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Overview" [ref=e98] [cursor=pointer]:
                - /url: ../learn/typescript/index.html
            - listitem [ref=e104]:
              - link "Setup + basics soon" [ref=e105] [cursor=pointer]:
                - /url: ../learn/typescript/setup.html
                - generic [ref=e107]: Setup + basics
                - generic [ref=e108]: soon
            - listitem [ref=e109]:
              - link "Types deep dive soon" [ref=e110] [cursor=pointer]:
                - /url: ../learn/typescript/types.html
                - generic [ref=e112]: Types deep dive
                - generic [ref=e113]: soon
            - listitem [ref=e114]:
              - link "Interfaces soon" [ref=e115] [cursor=pointer]:
                - /url: ../learn/typescript/interfaces.html
                - generic [ref=e117]: Interfaces
                - generic [ref=e118]: soon
            - listitem [ref=e119]:
              - link "Enums soon" [ref=e120] [cursor=pointer]:
                - /url: ../learn/typescript/enums.html
                - generic [ref=e122]: Enums
                - generic [ref=e123]: soon
            - listitem [ref=e124]:
              - link "Generics soon" [ref=e125] [cursor=pointer]:
                - /url: ../learn/typescript/generics.html
                - generic [ref=e127]: Generics
                - generic [ref=e128]: soon
            - listitem [ref=e129]:
              - link "Access modifiers + classes soon" [ref=e130] [cursor=pointer]:
                - /url: ../learn/typescript/classes.html
                - generic [ref=e132]: Access modifiers + classes
                - generic [ref=e133]: soon
        - generic [ref=e134]:
          - button "Playwright fundamentals" [expanded] [ref=e135] [cursor=pointer]
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "Overview" [ref=e144] [cursor=pointer]:
                - /url: ../learn/playwright-fundamentals/overview.html
            - listitem [ref=e150]:
              - link "Architecture deep dive" [ref=e151] [cursor=pointer]:
                - /url: ../playwright-e2e-architecture-blueprint.html
            - listitem [ref=e154]:
              - link "LangChain agent guide" [ref=e155] [cursor=pointer]:
                - /url: ../playwright-agent-with-langchain.html
            - listitem [ref=e158]:
              - link "Playwright MCP tutorial" [ref=e159] [cursor=pointer]:
                - /url: ../playwright-mcp.html
            - listitem [ref=e162]:
              - link "AI agents guide" [ref=e163] [cursor=pointer]:
                - /url: ../playwright-ai-agents.html
            - listitem [ref=e166]:
              - link "Curriculum hub" [ref=e167] [cursor=pointer]:
                - /url: ../learn/playwright-fundamentals/index.html
            - listitem [ref=e170]:
              - link "Multiple Element Filter" [ref=e171] [cursor=pointer]:
                - /url: ../multiple_element_filter.html
            - listitem [ref=e177]:
              - link "Web Table Directory" [ref=e178] [cursor=pointer]:
                - /url: ../webtable.html
            - listitem [ref=e186]:
              - link "QA Profile Form" [ref=e187] [cursor=pointer]:
                - /url: ../tables/practice.html
            - listitem [ref=e193]:
              - link "Companies Table" [ref=e194] [cursor=pointer]:
                - /url: ../tables/webtable.html
            - listitem [ref=e200]:
              - link "Tall Buildings Table" [ref=e201] [cursor=pointer]:
                - /url: ../tables/webtable1.html
            - listitem [ref=e206]:
              - link "Custom Dropdowns" [ref=e207] [cursor=pointer]:
                - /url: ../tables/dropdowns.html
            - listitem [ref=e213]:
              - link "Select Box Variants" [ref=e214] [cursor=pointer]:
                - /url: ../tables/select-boxes.html
            - listitem [ref=e220]:
              - link "Sortable Admin Table" [ref=e221] [cursor=pointer]:
                - /url: ../tables/sortable.html
            - listitem [ref=e228]:
              - link "Cricket Scorecard" [ref=e229] [cursor=pointer]:
                - /url: ../tables/scorecard.html
            - listitem [ref=e235]:
              - link "Frames overview" [ref=e236] [cursor=pointer]:
                - /url: ../frames/index.html
            - listitem [ref=e241]:
              - link "Multi-frame frameset" [ref=e242] [cursor=pointer]:
                - /url: ../frames/multi-frames.html
            - listitem [ref=e250]:
              - link "Nested iframes" [ref=e251] [cursor=pointer]:
                - /url: ../frames/nested-iframes.html
            - listitem [ref=e258]:
              - link "Courses frameset" [ref=e259] [cursor=pointer]:
                - /url: ../frames/courses-frameset.html
            - listitem [ref=e264]:
              - link "SVG locators" [ref=e265] [cursor=pointer]:
                - /url: ../widgets/svg.html
            - listitem [ref=e272]:
              - link "Shadow DOM" [ref=e273] [cursor=pointer]:
                - /url: ../widgets/shadow-dom.html
            - listitem [ref=e278]:
              - link "Calendar / date picker" [ref=e279] [cursor=pointer]:
                - /url: ../widgets/calendar.html
            - listitem [ref=e284]:
              - link "Drag and drop" [ref=e285] [cursor=pointer]:
                - /url: ../widgets/dnd.html
            - listitem [ref=e288]:
              - link "Toasts and notifications" [ref=e289] [cursor=pointer]:
                - /url: ../widgets/toasts.html
            - listitem [ref=e292]:
              - link "Native dialogs" [ref=e293] [cursor=pointer]:
                - /url: ../widgets/dialogs.html
            - listitem [ref=e298]:
              - link "Hover menus" [ref=e299] [cursor=pointer]:
                - /url: ../widgets/hover-menu.html
            - listitem [ref=e304]:
              - link "Right-click menu" [ref=e305] [cursor=pointer]:
                - /url: ../widgets/context-menu.html
            - listitem [ref=e310]:
              - link "Keyboard navigation" [ref=e311] [cursor=pointer]:
                - /url: ../widgets/keyboard-form.html
            - listitem [ref=e317]:
              - link "Windows and Tabs" [ref=e318] [cursor=pointer]:
                - /url: ../widgets/windows-tabs.html
            - listitem [ref=e321]:
              - link "Upload and Download" [ref=e322] [cursor=pointer]:
                - /url: ../widgets/upload-download.html
            - listitem [ref=e325]:
              - link "Scroll" [ref=e326] [cursor=pointer]:
                - /url: ../widgets/scroll.html
            - listitem [ref=e332]:
              - link "Assertions (expect)" [ref=e333] [cursor=pointer]:
                - /url: ../widgets/expect.html
            - listitem [ref=e338]:
              - link "Test modifiers, hooks, data" [ref=e339] [cursor=pointer]:
                - /url: ../widgets/test-modifiers.html
            - listitem [ref=e342]:
              - link "Data-driven + POM" [ref=e343] [cursor=pointer]:
                - /url: ../widgets/data-driven.html
            - listitem [ref=e350]:
              - link "Network interception" [ref=e351] [cursor=pointer]:
                - /url: ../network/intercept.html
            - listitem [ref=e356]:
              - link "TTACart demo" [ref=e357] [cursor=pointer]:
                - /url: ../ttacart/index.html
            - listitem [ref=e364]:
              - link "TTAStays booking" [ref=e365] [cursor=pointer]:
                - /url: ../booking/index.html
            - listitem [ref=e371]:
              - link "Advance Playwright framework" [ref=e372] [cursor=pointer]:
                - /url: ../advance-framework.html
        - generic [ref=e378]:
          - button "Playwright API Testing" [expanded] [ref=e379] [cursor=pointer]
          - list [ref=e386]:
            - listitem [ref=e387]:
              - link "Overview" [ref=e388] [cursor=pointer]:
                - /url: ../learn/playwright-api/index.html
            - listitem [ref=e394]:
              - link "CRUD basics" [ref=e395] [cursor=pointer]:
                - /url: ../learn/playwright-api/crud.html
            - listitem [ref=e398]:
              - link "Auth + Schema" [ref=e399] [cursor=pointer]:
                - /url: ../learn/playwright-api/auth-schema.html
            - listitem [ref=e402]:
              - link "Network monitoring" [ref=e403] [cursor=pointer]:
                - /url: ../learn/playwright-api/network.html
        - generic [ref=e406]:
          - button "Playwright BDD (Cucumber)" [expanded] [ref=e407] [cursor=pointer]
          - list [ref=e415]:
            - listitem [ref=e416]:
              - link "Overview" [ref=e417] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/index.html
            - listitem [ref=e423]:
              - link "Setup + first run" [ref=e424] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/setup.html
            - listitem [ref=e427]:
              - link "Data-driven" [ref=e428] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/data-driven.html
            - listitem [ref=e431]:
              - link "CI + tags + env" [ref=e432] [cursor=pointer]:
                - /url: ../learn/playwright-cucumber/ci-tags-env.html
        - generic [ref=e435]:
          - button "Playwright DevOps" [expanded] [ref=e436] [cursor=pointer]
          - list [ref=e445]:
            - listitem [ref=e446]:
              - link "NPM Registry (JFrog/Nexus)" [ref=e447] [cursor=pointer]:
                - /url: ../learn/playwright-registry/index.html
            - listitem [ref=e450]:
              - link "Docker setup" [ref=e451] [cursor=pointer]:
                - /url: ../learn/playwright-docker/index.html
            - listitem [ref=e454]:
              - link "Sharding multi-container" [ref=e455] [cursor=pointer]:
                - /url: ../learn/playwright-shard/index.html
        - generic [ref=e458]:
          - button "Playwright AI" [expanded] [ref=e459] [cursor=pointer]
          - list [ref=e467]:
            - listitem [ref=e468]:
              - link "Curriculum hub" [ref=e469] [cursor=pointer]:
                - /url: ../learn/playwright-ai-agents/index.html
            - listitem [ref=e472]:
              - link "Framework + AI (V2)" [ref=e473] [cursor=pointer]:
                - /url: ../advance-framework-ai.html
            - listitem [ref=e476]:
              - link "TTACart + AI live demo" [ref=e477] [cursor=pointer]:
                - /url: ../ttacart-ai/index.html
            - listitem [ref=e480]:
              - link "TTA AI Chat sandbox" [ref=e481] [cursor=pointer]:
                - /url: ../ai-chat/index.html
        - generic [ref=e484]:
          - button "Playwright MCP" [expanded] [ref=e485] [cursor=pointer]
          - list [ref=e494]:
            - listitem [ref=e495]:
              - link "Curriculum hub" [ref=e496] [cursor=pointer]:
                - /url: ../learn/playwright-mcp/index.html
        - generic [ref=e499]:
          - button "Playwright CLI" [expanded] [ref=e500] [cursor=pointer]
          - list [ref=e507]:
            - listitem [ref=e508]:
              - link "Curriculum hub" [ref=e509] [cursor=pointer]:
                - /url: ../learn/playwright-cli/index.html
            - listitem [ref=e512]:
              - link "SnapLocator (Chrome ext)" [ref=e513] [cursor=pointer]:
                - /url: ../snaplocator.html
      - generic [ref=e519]:
        - generic [ref=e520]: © The Testing Academy · 2026
        - button "Toggle dark mode" [ref=e521] [cursor=pointer]
    - generic [ref=e524]:
      - banner [ref=e525]:
        - button "Open sidebar" [ref=e526] [cursor=pointer]
        - generic [ref=e529]:
          - link "Practice" [ref=e530] [cursor=pointer]:
            - /url: ../index.html
          - generic [ref=e533]: Widgets
          - strong [ref=e536]: Scroll
        - generic [ref=e537]:
          - generic [ref=e538] [cursor=pointer]:
            - checkbox "Locator markers" [checked] [ref=e539]
            - generic [ref=e540]: Locator markers
          - generic [ref=e541]: scrollIntoView · scrollBy
          - button "Toggle dark mode" [ref=e542] [cursor=pointer]
      - main [ref=e548]:
        - region [ref=e549]:
          - generic [ref=e550]: Widget practice · Scroll
          - heading [level=1] [ref=e552]:
            - text: Scrolling
            - emphasis [ref=e553]: patterns
          - paragraph [ref=e554]:
            - text: One long page with hero · mid section · a deeply nested anchor · lazy-loaded list · CTA at bottom. Practise
            - code [ref=e555]: locator.scrollIntoViewIfNeeded()
            - text: ","
            - code [ref=e556]: page.evaluate(() => window.scrollBy/scrollTo)
            - text: ", and asserting infinite-scroll reveal."
        - generic [ref=e557]:
          - generic [ref=e558]:
            - generic [ref=e559]:
              - generic [ref=e560]: "Scroll position: 2479 px"
              - button "↑ Top" [ref=e561] [cursor=pointer]
              - button "↓ Bottom" [ref=e562] [cursor=pointer]
              - button "⇣ Mid" [ref=e563] [cursor=pointer]
              - button "Find deep anchor" [ref=e564] [cursor=pointer]
            - article [ref=e565]:
              - heading "Long scrollable page" [level=2] [ref=e566]
              - paragraph [ref=e567]: 5 sections in a single container — total height ~3500px. The deepest anchor is inside section 4. Last section has a CTA that only loads after you scroll.
              - generic [ref=e568]:
                - generic [ref=e570]:
                  - heading "Hero · top of page" [level=3] [ref=e571]
                  - paragraph [ref=e572]:
                    - text: Start scrolling. The buttons above let you jump; tests should drive scroll via
                    - code [ref=e573]: scrollIntoViewIfNeeded()
                    - text: or
                    - code [ref=e574]: evaluate
                    - text: .
                - generic [ref=e576]:
                  - heading "Mid section" [level=3] [ref=e577]
                  - paragraph [ref=e578]:
                    - text: About
                    - code [ref=e579]: scrollBy(0, 1000)
                    - text: away from the hero. Use
                    - code [ref=e580]: scrollIntoViewIfNeeded
                    - text: to bring it into view.
                - generic [ref=e582]:
                  - heading "Section 3" [level=3] [ref=e583]
                  - paragraph [ref=e584]: Below this paragraph is a deep anchor element that's well off-screen. Tests should click it without manually scrolling.
                  - button "Deep anchor" [ref=e585]: ★
                - generic [ref=e587]:
                  - heading "Lazy-loaded list" [level=3] [ref=e588]
                  - paragraph [ref=e589]: Items appear as you scroll closer (IntersectionObserver). 30 items total.
                  - list [ref=e590]:
                    - listitem [ref=e591]: lazy-item-01 · grz7cqu1
                    - listitem [ref=e592]: lazy-item-02 · uedrutz6
                    - listitem [ref=e593]: lazy-item-03 · v6ouo23n
                    - listitem [ref=e594]: lazy-item-04 · xhhhcf4z
                    - listitem [ref=e595]: lazy-item-05 · 2ewiq0fd
                    - listitem [ref=e596]: lazy-item-06 · wc6rsxuy
                    - listitem [ref=e597]: lazy-item-07 · cixny5yk
                    - listitem [ref=e598]: lazy-item-08 · u1l8t6r3
                    - listitem [ref=e599]: lazy-item-09 · ifrx30gc
                    - listitem [ref=e600]: lazy-item-10 · l4cpqhzf
                    - listitem [ref=e601]: lazy-item-11 · yde2hsst
                    - listitem [ref=e602]: lazy-item-12 · ymjlbaz8
                    - listitem [ref=e603]: lazy-item-13 · tpw7ya6m
                    - listitem [ref=e604]: lazy-item-14 · vcrxwjwn
                    - listitem [ref=e605]: lazy-item-15 · 0hbirlwt
                  - generic [ref=e606]: Loading more…
                - generic [ref=e608]:
                  - heading "CTA at the bottom" [level=3] [ref=e609]
                  - paragraph [ref=e610]: The button below only enables after you've scrolled past 75% of the page.
                  - button "Confirm scroll-through" [ref=e611] [cursor=pointer]
              - generic [ref=e612]:
                - generic [ref=e613]:
                  - generic [ref=e614]: data-testid
                  - text: =scroll-page · section-hero · section-mid · section-deep · section-lazy · section-cta · deep-anchor · cta-button · lazy-loader · lazy-list
                - generic [ref=e615]:
                  - generic [ref=e616]: scroll target
                  - text: =document.scrollingElement (use
                  - code [ref=e617]: page.evaluate(() => window.scrollTo/By(...))
                  - text: )
              - generic [ref=e618]: No scroll action yet.
          - complementary [ref=e619]:
            - generic [ref=e620]:
              - heading "What students should practise" [level=3] [ref=e621]
              - list [ref=e622]:
                - listitem [ref=e623]:
                  - text: Click the
                  - code [ref=e624]: deep-anchor
                  - text: by calling
                  - code [ref=e625]: scrollIntoViewIfNeeded()
                  - text: first.
                - listitem [ref=e626]:
                  - text: Drive scroll via
                  - code [ref=e627]: page.evaluate(() => window.scrollBy(0, 1000))
                  - text: .
                - listitem [ref=e628]:
                  - text: "Jump to bottom:"
                  - code [ref=e629]: window.scrollTo(0, document.body.scrollHeight)
                  - text: "; back to top:"
                  - code [ref=e630]: scrollTo(0, 0)
                  - text: .
                - listitem [ref=e631]:
                  - text: Wait for the
                  - code [ref=e632]: cta-button
                  - text: to become enabled —
                  - code [ref=e633]: expect(button).toBeEnabled()
                  - text: .
                - listitem [ref=e634]:
                  - text: Assert lazy-list count grows past 10 once
                  - code [ref=e635]: section-lazy
                  - text: is on screen.
            - group [ref=e636]:
              - generic "Playwright solution scrollIntoViewIfNeeded + evaluate scrollBy/scrollTo. Show solution" [ref=e637] [cursor=pointer]:
                - generic [ref=e641]:
                  - strong [ref=e642]: Playwright solution
                  - generic [ref=e643]: scrollIntoViewIfNeeded + evaluate scrollBy/scrollTo.
                - generic [ref=e644]: Show solution
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test.describe('Test the application', () => {
  5  |   const URL = 'https://app.thetestingacademy.com/playwright/widgets/scroll';
  6  | 
  7  |   test.beforeEach(async ({ page }) => {
  8  |     await page.goto(URL);
  9  |   });
  10 | 
  11 |   test('Lazy loading testcase', async ({ page }) => {
  12 |     await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
  13 | 
  14 |     const list = page.getByTestId('lazy-list').locator('li');
  15 | 
  16 |     // Wait for the initial items
  17 |     await expect(list.first()).toBeVisible();
  18 | 
  19 |     // Load items until all 30 are available
  20 |     while (await list.count() < 30) {
  21 |       const previousCount = await list.count();
  22 | 
  23 |       await list.last().scrollIntoViewIfNeeded();
  24 | 
  25 |       // Wait for more items to appear
  26 |       await expect.poll(
  27 |         async () => await list.count(),
  28 |         { timeout: 5000 }
> 29 |       ).toBeGreaterThan(previousCount);
     |         ^ Error: expect(received).toBeGreaterThan(expected)
  30 | 
  31 |       console.log('Loaded items:', await list.count());
  32 |     }
  33 | 
  34 |     // Verify all 30 items are loaded
  35 |     await expect(list).toHaveCount(30);
  36 | 
  37 |     console.log('All 30 items loaded successfully!');
  38 |   });
  39 | });
  40 | 
```