# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts >> test case-2 go directly to dashboard - capture artifacts
- Location: tests\05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic:
      - navigation:
        - navigation "Main navigation" [ref=e3]:
          - list [ref=e4]:
            - listitem [ref=e5]:
              - button "Go to Wingz Interface" [ref=e6] [cursor=pointer]:
                - generic [ref=e9]: Wingz
              - generic [ref=e13] [cursor=pointer]: Chat
              - generic [ref=e14] [cursor=pointer]: Agents
              - generic [ref=e15] [cursor=pointer]: Workflows
              - generic [ref=e16] [cursor=pointer]: Synthetic A/B
            - listitem [ref=e17]:
              - link "Go to Dashboard" [ref=e18] [cursor=pointer]:
                - /url: "#/dashboard"
                - generic [ref=e20]: Dashboard
            - listitem [ref=e21]:
              - button "Experimentation menu" [ref=e22] [cursor=pointer]:
                - generic [ref=e24]: Experimentation
              - generic [ref=e26] [cursor=pointer]: Web Experimentation
              - generic [ref=e27] [cursor=pointer]: Web Rollout
            - listitem [ref=e28]:
              - link "Go to Journey Analytics" [ref=e29] [cursor=pointer]:
                - /url: "#/analytics?view=overview"
                - generic [ref=e31]: Journey Analytics
            - listitem [ref=e32]:
              - button "Behavior Analytics menu" [ref=e33] [cursor=pointer]:
                - generic [ref=e35]: Behavior Analytics
              - generic [ref=e37] [cursor=pointer]: Dashboard
              - generic [ref=e38] [cursor=pointer]: Heatmaps
              - generic [ref=e39] [cursor=pointer]: Session Recordings
              - generic [ref=e40] [cursor=pointer]: Mobile Recordings
              - generic [ref=e41] [cursor=pointer]: Forms
            - listitem [ref=e42]:
              - button "User feedback menu" [ref=e43] [cursor=pointer]:
                - generic [ref=e45]: User feedback
              - generic [ref=e47] [cursor=pointer]: Surveys
              - generic [ref=e48] [cursor=pointer]: Concept Test
              - generic [ref=e49] [cursor=pointer]: Templates
              - generic [ref=e50] [cursor=pointer]: Settings
            - listitem [ref=e51]:
              - button "Feature Management" [ref=e52] [cursor=pointer]
              - generic [ref=e56] [cursor=pointer]: Feature Flags
              - generic [ref=e57] [cursor=pointer]: Feature Rollout
              - generic [ref=e58] [cursor=pointer]: Feature Experimentation
              - generic [ref=e59] [cursor=pointer]: Feature Multivariate
              - generic [ref=e60] [cursor=pointer]: Feature Personalization
              - generic [ref=e61] [cursor=pointer]: Tech Debt
            - listitem [ref=e62]:
              - link "Go to Web Personalization" [ref=e63] [cursor=pointer]:
                - /url: "#/target/targeting/"
                - generic [ref=e65]: Web Personalization
            - listitem [ref=e66]:
              - button "Data Platform menu" [ref=e67] [cursor=pointer]:
                - generic [ref=e69]: Data Platform
              - generic [ref=e71] [cursor=pointer]: Introduction
              - generic [ref=e72] [cursor=pointer]: Profiles
              - generic [ref=e73] [cursor=pointer]: Attributes
              - generic [ref=e74] [cursor=pointer]: Events
              - generic [ref=e75] [cursor=pointer]: Segments
              - generic [ref=e76] [cursor=pointer]: Triggers
              - generic [ref=e77] [cursor=pointer]: Audiences
              - generic [ref=e78] [cursor=pointer]: Metrics
              - generic [ref=e79] [cursor=pointer]: Funnels
              - generic [ref=e80] [cursor=pointer]: Audit
            - listitem [ref=e81]:
              - button "Plan menu" [ref=e82] [cursor=pointer]:
                - generic [ref=e85]: Plan
              - generic [ref=e87] [cursor=pointer]: Observations
              - generic [ref=e88] [cursor=pointer]: Hypotheses
              - generic [ref=e89] [cursor=pointer]: Ideas
            - listitem
            - listitem [ref=e90]:
              - link "Go to Upgrade" [ref=e91] [cursor=pointer]:
                - /url: "#/settings/upgrade/testing"
                - generic [ref=e93]: Upgrade
              - button "Configurations menu" [ref=e94] [cursor=pointer]:
                - generic [ref=e96]: Configurations
              - generic [ref=e98] [cursor=pointer]: Websites and Apps
              - generic [ref=e99] [cursor=pointer]: Integrations
              - generic [ref=e100] [cursor=pointer]: Elements
              - generic [ref=e101] [cursor=pointer]: Pages
              - generic [ref=e102] [cursor=pointer]: Asset Hub
            - listitem [ref=e103]:
              - link "Go to Settings" [ref=e104] [cursor=pointer]:
                - /url: "#/settings/accounts/general"
                - generic [ref=e106]: Settings
            - listitem [ref=e107]:
              - link "View Product Updates (opens in new tab)" [ref=e108] [cursor=pointer]:
                - /url: http://wingify.com/product-updates
                - generic [ref=e110]: Updates
              - button "Toggle navigation menu" [ref=e114] [cursor=pointer]
    - banner [ref=e116]:
      - link "Go to dashboard" [ref=e118] [cursor=pointer]:
        - /url: "#/dashboard"
        - img "Wingify ABTasty logo" [ref=e119]
        - generic [ref=e120]: /
        - generic [ref=e121]: PLAYGROUND
      - generic [ref=e122]:
        - generic [ref=e123]:
          - link "Playground website" [ref=e124] [cursor=pointer]:
            - /url: /safe-redirect/playground?url=https://playground.wingify.io
          - button [aria-hidden] [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: Demo Workspace
          - button "Need Help?" [ref=e145] [cursor=pointer]
          - button "View Account Usage Activity" [ref=e153] [cursor=pointer]
        - button "Wingz" [ref=e157] [cursor=pointer]
        - button "Open user menu" [ref=e161] [cursor=pointer]:
          - img "abc abc" [ref=e162]
    - main "Application main content" [ref=e163]:
      - generic [ref=e171]:
        - list [ref=e173]:
          - listitem [ref=e174] [cursor=pointer]:
            - button "Get Support" [ref=e175]
          - listitem [ref=e178] [cursor=pointer]:
            - link "Developer resources" [ref=e179]:
              - /url: "#/developers"
          - listitem [ref=e182] [cursor=pointer]:
            - link "Give us a call" [ref=e183]:
              - /url: tel:+14153493207
              - generic [ref=e185]: +1-415-349-3207
        - list [ref=e187]:
          - listitem [ref=e188] [cursor=pointer]:
            - generic [ref=e189]: "Data Region: US"
          - listitem [ref=e192] [cursor=pointer]:
            - link "Uptime Status" [ref=e193]:
              - /url: https://secure-stats.pingdom.com/yd4ybaf8hhh2
        - link "Visit wingify.com" [ref=e198] [cursor=pointer]:
          - /url: https://wingify.com
          - img "Wingify logo" [ref=e199]
  - textbox [aria-hidden] [ref=e200]
```