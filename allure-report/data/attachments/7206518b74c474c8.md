# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts >> test case-1 go directly to dashboard - capture artifacts
- Location: tests\05_Allur_Reporting\234_Custom_TestWingify_Artifacts.spec.ts:10:5

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
                - generic [ref=e10]: Wingz
              - generic [ref=e15] [cursor=pointer]: Chat
              - generic [ref=e16] [cursor=pointer]: Agents
              - generic [ref=e17] [cursor=pointer]: Workflows
              - generic [ref=e18] [cursor=pointer]: Synthetic A/B
            - listitem [ref=e19]:
              - link "Go to Dashboard" [ref=e20] [cursor=pointer]:
                - /url: "#/dashboard"
                - generic [ref=e23]: Dashboard
            - listitem [ref=e24]:
              - button "Experimentation menu" [ref=e25] [cursor=pointer]:
                - generic [ref=e28]: Experimentation
              - generic [ref=e31] [cursor=pointer]: Web Experimentation
              - generic [ref=e32] [cursor=pointer]: Web Rollout
            - listitem [ref=e33]:
              - link "Go to Journey Analytics" [ref=e34] [cursor=pointer]:
                - /url: "#/analytics?view=overview"
                - generic [ref=e37]: Journey Analytics
            - listitem [ref=e38]:
              - button "Behavior Analytics menu" [ref=e39] [cursor=pointer]:
                - generic [ref=e42]: Behavior Analytics
              - generic [ref=e45] [cursor=pointer]: Dashboard
              - generic [ref=e46] [cursor=pointer]: Heatmaps
              - generic [ref=e47] [cursor=pointer]: Session Recordings
              - generic [ref=e48] [cursor=pointer]: Mobile Recordings
              - generic [ref=e49] [cursor=pointer]: Forms
            - listitem [ref=e50]:
              - button "User feedback menu" [ref=e51] [cursor=pointer]:
                - generic [ref=e54]: User feedback
              - generic [ref=e57] [cursor=pointer]: Surveys
              - generic [ref=e58] [cursor=pointer]: Concept Test
              - generic [ref=e59] [cursor=pointer]: Templates
              - generic [ref=e60] [cursor=pointer]: Settings
            - listitem [ref=e61]:
              - button "Feature Management" [ref=e62] [cursor=pointer]
              - generic [ref=e68] [cursor=pointer]: Feature Flags
              - generic [ref=e69] [cursor=pointer]: Feature Rollout
              - generic [ref=e70] [cursor=pointer]: Feature Experimentation
              - generic [ref=e71] [cursor=pointer]: Feature Multivariate
              - generic [ref=e72] [cursor=pointer]: Feature Personalization
              - generic [ref=e73] [cursor=pointer]: Tech Debt
            - listitem [ref=e74]:
              - link "Go to Web Personalization" [ref=e75] [cursor=pointer]:
                - /url: "#/target/targeting/"
                - generic [ref=e78]: Web Personalization
            - listitem [ref=e79]:
              - button "Data Platform menu" [ref=e80] [cursor=pointer]:
                - generic [ref=e83]: Data Platform
              - generic [ref=e86] [cursor=pointer]: Introduction
              - generic [ref=e87] [cursor=pointer]: Profiles
              - generic [ref=e88] [cursor=pointer]: Attributes
              - generic [ref=e89] [cursor=pointer]: Events
              - generic [ref=e90] [cursor=pointer]: Segments
              - generic [ref=e91] [cursor=pointer]: Triggers
              - generic [ref=e92] [cursor=pointer]: Audiences
              - generic [ref=e93] [cursor=pointer]: Metrics
              - generic [ref=e94] [cursor=pointer]: Funnels
              - generic [ref=e95] [cursor=pointer]: Audit
            - listitem [ref=e96]:
              - button "Plan menu" [ref=e97] [cursor=pointer]:
                - generic [ref=e101]: Plan
              - generic [ref=e104] [cursor=pointer]: Observations
              - generic [ref=e105] [cursor=pointer]: Hypotheses
              - generic [ref=e106] [cursor=pointer]: Ideas
            - listitem
            - listitem [ref=e107]:
              - link "Go to Upgrade" [ref=e108] [cursor=pointer]:
                - /url: "#/settings/upgrade/testing"
                - generic [ref=e111]: Upgrade
              - button "Configurations menu" [ref=e112] [cursor=pointer]:
                - generic [ref=e115]: Configurations
              - generic [ref=e118] [cursor=pointer]: Websites and Apps
              - generic [ref=e119] [cursor=pointer]: Integrations
              - generic [ref=e120] [cursor=pointer]: Elements
              - generic [ref=e121] [cursor=pointer]: Pages
              - generic [ref=e122] [cursor=pointer]: Asset Hub
            - listitem [ref=e123]:
              - link "Go to Settings" [ref=e124] [cursor=pointer]:
                - /url: "#/settings/accounts/general"
                - generic [ref=e127]: Settings
            - listitem [ref=e128]:
              - link "View Product Updates (opens in new tab)" [ref=e129] [cursor=pointer]:
                - /url: http://wingify.com/product-updates
                - generic [ref=e132]: Updates
              - button "Toggle navigation menu" [ref=e137] [cursor=pointer]
    - banner [ref=e140]:
      - link "Go to dashboard" [ref=e142] [cursor=pointer]:
        - /url: "#/dashboard"
        - img "Wingify ABTasty logo" [ref=e143]
        - generic [ref=e144]: /
        - generic [ref=e145]: PLAYGROUND
      - generic [ref=e146]:
        - generic [ref=e147]:
          - link "Playground website" [ref=e148] [cursor=pointer]:
            - /url: /safe-redirect/playground?url=https://playground.wingify.io
          - button [aria-hidden] [ref=e161] [cursor=pointer]:
            - generic [ref=e162]: Demo Workspace
          - button "Need Help?" [ref=e171] [cursor=pointer]
          - button "View Account Usage Activity" [ref=e180] [cursor=pointer]
          - generic:
            - generic:
              - generic "Notifications"
        - button "Wingz" [ref=e185] [cursor=pointer]
        - button "Open user menu" [ref=e190] [cursor=pointer]:
          - img "abc abc" [ref=e191]
    - main "Application main content" [ref=e192]:
      - generic [ref=e200]:
        - list [ref=e202]:
          - listitem [ref=e203] [cursor=pointer]:
            - button "Get Support" [ref=e204]
          - listitem [ref=e208] [cursor=pointer]:
            - link "Developer resources" [ref=e209]:
              - /url: "#/developers"
          - listitem [ref=e213] [cursor=pointer]:
            - link "Give us a call" [ref=e214]:
              - /url: tel:+14153493207
              - generic [ref=e217]: +1-415-349-3207
        - list [ref=e219]:
          - listitem [ref=e220] [cursor=pointer]:
            - generic [ref=e221]: "Data Region: US"
          - listitem [ref=e225] [cursor=pointer]:
            - link "Uptime Status" [ref=e226]:
              - /url: https://secure-stats.pingdom.com/yd4ybaf8hhh2
        - link "Visit wingify.com" [ref=e232] [cursor=pointer]:
          - /url: https://wingify.com
          - img "Wingify logo" [ref=e233]
  - img [ref=e234]:
    - generic: "'"
  - textbox [aria-hidden] [ref=e252]
```