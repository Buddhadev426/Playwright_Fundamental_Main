# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 08_select_Dropdown\245_Advance_MultiDD.spec.ts >> Custom multi-select dropdown
- Location: tests\08_select_Dropdown\245_Advance_MultiDD.spec.ts:3:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('rs-async-menu')
    - locator resolved to <div role="listbox" class="tta-rs__menu" data-testid="rs-async-menu">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    45 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
          - generic [ref=e533]: Tables & Forms
          - strong [ref=e536]: Select Box Variants
        - generic [ref=e537]:
          - generic [ref=e538] [cursor=pointer]:
            - checkbox "Locator markers" [checked] [ref=e539]
            - generic [ref=e540]: Locator markers
          - generic [ref=e541]: 5 variants
          - button "Toggle dark mode" [ref=e542] [cursor=pointer]
      - main [ref=e548]:
        - region [ref=e549]:
          - generic [ref=e550]: Form practice · Combobox variants
          - heading [level=1] [ref=e552]:
            - text: Select
            - emphasis [ref=e553]: box variants
            - text: practice
          - paragraph [ref=e554]:
            - text: Five custom-built combobox variants — single, multi, creatable, grouped, and async. DOM classes intentionally mirror the popular
            - code [ref=e555]: react-select
            - text: conventions (
            - code [ref=e556]: tta-rs__control
            - text: ","
            - code [ref=e557]: tta-rs__menu
            - text: ","
            - code [ref=e558]: tta-rs__option
            - text: ) so your locators transfer to real production widgets.
        - region "Select box variants workspace" [ref=e559]:
          - generic [ref=e560]:
            - generic [ref=e561]:
              - generic [ref=e562]:
                - heading "① Single — searchable" [level=2] [ref=e563]
                - generic [ref=e564]: Type to filter
              - paragraph [ref=e565]: Click to open. Type to filter the list. Click an option to set a single value.
              - generic [ref=e567]:
                - generic [ref=e568]:
                  - generic [ref=e569]: WebdriverIO
                  - textbox "Filter options" [ref=e571]
                - button "Clear value" [ref=e573] [cursor=pointer]
              - generic [ref=e580]:
                - generic [ref=e581]:
                  - generic [ref=e582]: id
                  - text: =rs-single
                - generic [ref=e583]:
                  - generic [ref=e584]: data-testid
                  - text: =rs-single · rs-single-input · rs-single-menu
                - generic [ref=e585]:
                  - generic [ref=e586]: class
                  - text: =tta-rs__control · tta-rs__option
            - generic [ref=e587]:
              - generic [ref=e588]:
                - heading "② Multi — chips with remove" [level=2] [ref=e589]
                - generic [ref=e590]: Multiple values
              - paragraph [ref=e591]: Pick multiple options. Each becomes a removable chip with its own X button.
              - generic [ref=e593]:
                - generic [ref=e594]:
                  - generic [ref=e595]:
                    - generic [ref=e596]: Mocha
                    - button "Remove Mocha" [ref=e597] [cursor=pointer]
                  - textbox "Filter options" [ref=e601]
                - button "Clear values" [ref=e603] [cursor=pointer]
              - generic [ref=e610]:
                - generic [ref=e611]:
                  - generic [ref=e612]: data-testid
                  - text: =rs-multi · rs-multi-input
                - generic [ref=e613]:
                  - generic [ref=e614]: chip
                  - text: =tta-rs__multi-value
                - generic [ref=e615]:
                  - generic [ref=e616]: remove
                  - text: =tta-rs__multi-value__remove
            - generic [ref=e617]:
              - generic [ref=e618]:
                - heading "③ Creatable multi — type and Enter" [level=2] [ref=e619]
                - generic [ref=e620]: Add new options
              - paragraph [ref=e621]:
                - text: Type a tag that doesn't exist, press
                - code [ref=e622]: Enter
                - text: ", and a new chip is created on the fly."
              - generic [ref=e624]:
                - generic [ref=e625]:
                  - generic [ref=e626]:
                    - generic [ref=e627]: performance
                    - button "Remove performance" [ref=e628] [cursor=pointer]
                  - textbox "Add a tag" [ref=e632]
                - button "Clear values" [ref=e634] [cursor=pointer]
              - generic [ref=e641]:
                - generic [ref=e642]:
                  - generic [ref=e643]: data-testid
                  - text: =rs-creatable · rs-creatable-input
                - generic [ref=e644]:
                  - generic [ref=e645]: create
                  - text: =press Enter
            - generic [ref=e646]:
              - generic [ref=e647]:
                - heading "④ Grouped — categorised options" [level=2] [ref=e648]
                - generic [ref=e649]: Groups
              - paragraph [ref=e650]: Options are split into labelled groups. Practise reaching an option inside a specific group heading.
              - generic [ref=e653]:
                - generic [ref=e654]: Pick a deployment target…
                - textbox "Filter options" [ref=e656]
              - generic [ref=e662]:
                - generic [ref=e663]:
                  - generic [ref=e664]: data-testid
                  - text: =rs-grouped
                - generic [ref=e665]:
                  - generic [ref=e666]: group
                  - text: =tta-rs__group · data-group=Cloud / Edge / Self-hosted
            - generic [ref=e667]:
              - generic [ref=e668]:
                - heading "⑤ Async — fetched on type" [level=2] [ref=e669]
                - generic [ref=e670]: 600ms latency
              - paragraph [ref=e671]:
                - text: Type a city name. Results load after a simulated 600ms network call. Practise
                - code [ref=e672]: page.waitForResponse
                - text: patterns or just await a visible option.
              - generic [ref=e675]:
                - generic [ref=e676]: Type to search cities…
                - textbox "Search cities" [active] [ref=e678]: pun
              - generic [ref=e683]:
                - generic [ref=e684]:
                  - generic [ref=e685]: data-testid
                  - text: =rs-async · rs-async-input · rs-async-menu
                - generic [ref=e686]:
                  - generic [ref=e687]: state
                  - text: =loading / no-results / results
            - generic [ref=e688]: "{ \"rs-single\": \"WebdriverIO\", \"rs-multi\": [ \"Mocha\" ], \"rs-creatable\": [ \"performance\" ], \"rs-grouped\": null, \"rs-async\": null }"
          - complementary [ref=e689]:
            - generic [ref=e690]:
              - heading "What students should practise" [level=3] [ref=e691]
              - list [ref=e692]:
                - listitem [ref=e693]:
                  - text: Click
                  - code [ref=e694]: .tta-rs__control
                  - text: to open, then click
                  - code [ref=e695]: .tta-rs__option
                  - text: by visible text.
                - listitem [ref=e696]:
                  - text: Type into
                  - code [ref=e697]: .tta-rs__input-container input
                  - text: to filter options.
                - listitem [ref=e698]:
                  - text: "Multi: remove a chip via its"
                  - code [ref=e699]: .tta-rs__multi-value__remove
                  - text: button.
                - listitem [ref=e700]: "Creatable: type a brand-new value and press Enter; assert the chip appears."
                - listitem [ref=e701]:
                  - text: "Grouped: scope a query under a specific"
                  - code [ref=e702]: .tta-rs__group[data-group="Edge"]
                  - text: .
                - listitem [ref=e703]: "Async: wait for the loading notice to disappear, then click the result."
            - group [ref=e704]:
              - generic "Playwright solutions One snippet per variant. Show solution" [ref=e705] [cursor=pointer]:
                - generic [ref=e709]:
                  - strong [ref=e710]: Playwright solutions
                  - generic [ref=e711]: One snippet per variant.
                - generic [ref=e712]: Show solution
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  |   test('Custom multi-select dropdown', async ({ page }) => {
  4  |     await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');
  5  | 
  6  |     //① Single — searchable
  7  |     await page.getByTestId('rs-single-input').click();
  8  |     await page.getByText('WebdriverIO', {exact : true}).click();
  9  | 
  10 |     //② Multi — chips with remove
  11 |     await page.getByTestId('rs-multi-input').click();
  12 |     await page.getByText('Pytest', {exact : true}).click();
  13 |     await page.getByText('Mocha', {exact : true}).click();
  14 |     await page.getByLabel('Remove Pytest').click();
  15 |      await page.keyboard.press('Escape');
  16 | 
  17 | 
  18 |     //③ Creatable multi — type and Enter
  19 | 
  20 |     await page.getByTestId('rs-creatable-input').click();
  21 |     await page.getByText('performance', {exact : true}).click();
  22 |     await page.getByText('visual-regression', {exact : true}).click();
  23 |     await page.getByLabel('Remove visual-regression').click();
  24 |     await page.keyboard.press('Escape');
  25 | 
  26 |     //⑤ Async — fetched on type
  27 |     await page.getByTestId('rs-async-input').fill('pun');
  28 |     await expect(page.getByTestId("rs-async-menu")).toContainText('Pune');
> 29 |     await page.getByTestId("rs-async-menu").click();
     |                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  30 | 
  31 | 
  32 | 
  33 | 
  34 | 
  35 |     
  36 |     
  37 |     await page.pause();
  38 |   });
```