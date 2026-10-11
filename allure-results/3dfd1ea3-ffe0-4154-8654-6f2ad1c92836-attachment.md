# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\12_TTA_file_upload.spec.ts >> Test the application >> TTA File upload testcase
- Location: tests\Practice\12_TTA_file_upload.spec.ts:9:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#avatar-upload')
    - waiting for "https://accounts.google.com/o/oauth2/auth?access_type=offline&client_id=973242068062-siovql4qcnlungeca1mh26t2dcpgs265.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fclerk.thetestingacademy.com…" navigation to finish...
    - navigated to "https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S975880739%3A1791701859024748&access_type=offline&client_id=973242068062-siovql4qcnlungeca1mh26t2dcpgs265.apps.googleusercontent.co…"

```

# Page snapshot

```yaml
- generic [ref=f6e2]:
  - generic [ref=f6e3]:
    - button "Dismiss banner" [ref=f6e4] [cursor=pointer]
    - generic [ref=f6e8]:
      - generic [ref=f6e9]: FREE WEBINAR
      - generic [ref=f6e11]: 🎓 How to become an AI architect, even as a manual tester or automation tester
      - generic [ref=f6e13]: "|"
      - generic [ref=f6e14]:
        - generic [ref=f6e17]: Tue 13 Oct, 8 PM IST
        - generic [ref=f6e18]: Webinar 2 of 6
      - generic [ref=f6e19]:
        - button "Join the webinar" [ref=f6e20] [cursor=pointer]
        - link "Details" [ref=f6e27] [cursor=pointer]:
          - /url: https://app.thetestingacademy.com/ai/blueprint/projects
        - generic [ref=f6e28]:
          - button "View announcement 1" [ref=f6e29] [cursor=pointer]
          - button "View announcement 2" [ref=f6e30] [cursor=pointer]
          - button "View announcement 3" [ref=f6e31] [cursor=pointer]
  - generic [ref=f6e32]:
    - generic [ref=f6e35]:
      - generic [ref=f6e37]:
        - heading "Sign in to TheTestingAcademy" [level=1] [ref=f6e38]
        - paragraph [ref=f6e39]: Welcome back! Please sign in to continue
      - generic [ref=f6e40]:
        - button "Sign in with Google Continue with Google" [ref=f6e43] [cursor=pointer]:
          - generic [ref=f6e44]:
            - img "Sign in with Google" [ref=f6e46]
            - generic [ref=f6e47]: Continue with Google
        - paragraph [ref=f6e50]: or
        - generic [ref=f6e52]:
          - generic [ref=f6e53]:
            - generic [ref=f6e56]:
              - generic [ref=f6e57]: Email address
              - textbox "Email address" [active] [ref=f6e59]:
                - /placeholder: Enter your email address
                - text: buddhadev09101996@gmail.com
            - generic:
              - generic:
                - generic:
                  - generic: Password
                  - generic:
                    - textbox "Password":
                      - /placeholder: Enter your password
                    - button "Show password"
          - button "Continue" [ref=f6e62] [cursor=pointer]
    - link "← Back to Home" [ref=f6e66] [cursor=pointer]:
      - /url: /
  - button "Chat with support on WhatsApp" [ref=f6e67] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import path from 'node:path';
  3  | 
  4  | test.describe('Test the application', () => {
  5  | const URL = 'https://app.thetestingacademy.com/student/settings';
  6  |   test.beforeEach(async ({page}) =>{
  7  |     await page.goto(URL);
  8  |   })
  9  |   test('TTA File upload testcase', async ({ page }) => {
  10 |     const filePath1 = path.join(__dirname, 'Screenshot (5).png');
> 11 |     await page.locator('#avatar-upload').setInputFiles(filePath1);
     |     ^ Error: locator.setInputFiles: Test timeout of 30000ms exceeded.
  12 | 
  13 |     
  14 |     
  15 |     await page.pause();
  16 |   });
  17 |     
  18 | });
```