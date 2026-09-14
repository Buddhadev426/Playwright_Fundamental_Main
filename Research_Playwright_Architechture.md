Playwright Architecture - Research Findings
Research focus: WebSocket, CDP, JSON-RPC, and how these concepts relate to Playwright browser communication.

This document organizes the concepts discussed: Playwright API, internal/driver layer, JSON, JSON-RPC, WebSocket, CDP, and browser-specific communication.

1. High-Level Playwright Architecture
Your Test Code
      |
      v
Playwright API
      |
      v
Playwright Internal / Driver Layer
      |
   +--+---------+
   |            |
   v            v
Chromium     Firefox/WebKit
Examples of Playwright APIs include page.goto(), page.locator(), locator.click(), locator.fill(), and page.screenshot().

2. What Happens When You Call a Playwright API?
Test Code
   |
   | await page.locator("#login").click()
   v
Playwright API
   |
   v
Playwright Internal Layer
   |
   |-- locator/action processing
   |-- actionability checks
   |-- browser-specific communication
   v
Browser
   |
   v
Web Application
For a click, Playwright can perform checks such as whether the element exists, is visible, enabled, stable, and able to receive the action before performing it.

3. Playwright API
The Playwright API is the high-level interface used by test code. It hides most of the low-level browser communication.

await page.goto("https://example.com");
await page.locator("#login").click();
await page.locator("#username").fill("admin");
4. Playwright Driver / Internal Layer
The internal layer performs the lower-level work required to control browsers. It interprets API calls, manages browser/page state, performs checks, and handles browser-specific communication.

Important: “Driver/internal layer” is a useful conceptual description. Avoid treating it as a single simple component with one fixed implementation path.
5. JSON
JSON is a data format commonly used to represent structured information.

{
  "selector": "#login",
  "action": "click"
}
JSON contains data such as strings, numbers, booleans, arrays, objects, and null values.

6. JSON-RPC
JSON-RPC is a structured remote procedure call protocol style. It represents an operation as a request containing an identifier, method, and parameters.

{
  "id": 101,
  "method": "some.action",
  "params": {
    "selector": "#login"
  }
}
Field	Meaning
id	Identifies the request so the response can be matched.
method	Identifies the operation being requested.
params	Contains the input data for the operation.
Important: JSON-RPC should not be shown as a mandatory Playwright pipeline step after the driver. It is a messaging/protocol concept used in relevant communication contexts.
7. WebSocket
WebSocket provides a persistent, two-way communication channel between endpoints.

Endpoint A
   |
   |  WebSocket connection
   |  <----------------->
   |
Endpoint B
Think of WebSocket as the communication channel or road through which messages can travel. A protocol message can be transported through that channel.

8. CDP
CDP = Chrome DevTools Protocol. It is a browser-control protocol associated with Chromium-based browsers.

const browser =
  await chromium.connectOverCDP("http://localhost:9222");
This allows Playwright to connect to an existing Chromium instance through a CDP connection.

Important: Playwright does not always use CDP. CDP is especially relevant when connecting to Chromium through CDP, such as with connectOverCDP().
9. CDP + WebSocket
Playwright
    |
    | CDP messages
    v
WebSocket / communication channel
    |
    v
Chromium
The key distinction is:

CDP: defines browser-control commands and events.
WebSocket: can provide the communication transport.
Therefore, CDP and WebSocket are not simply two identical layers. One is a protocol; the other is a transport mechanism.

10. Chromium vs Firefox vs WebKit
Browser	CDP?	Playwright handling
Chromium	CDP can be used for CDP-based connections	Playwright handles browser communication internally
Firefox	Not CDP	Playwright uses Firefox-specific communication internally
WebKit	Not CDP	Playwright uses WebKit-specific communication internally
11. Firefox Example
const browser = await firefox.launch();
Test
  |
  v
Playwright API
  |
  v
Playwright Internal Layer
  |
  v
Firefox-specific communication
  |
  v
Firefox
You normally do not need to manually learn or send the underlying Firefox protocol when using Playwright.

12. WebKit Example
const browser = await webkit.launch();
Test
  |
  v
Playwright API
  |
  v
Playwright Internal Layer
  |
  v
WebKit-specific communication
  |
  v
WebKit
13. Normal Playwright vs connectOverCDP()
Normal Playwright launch
const browser = await chromium.launch();
Test
  |
  v
Playwright API
  |
  v
Playwright Internal Architecture
  |
  v
Chromium
Chromium through CDP
const browser =
  await chromium.connectOverCDP("http://localhost:9222");
Test
  |
  v
Playwright API
  |
  v
CDP connection
  |
  v
Chromium
14. Parcel Analogy
Technical concept	Easy analogy
Test code	Person placing an order
Playwright API	Front desk/interface
Internal/driver layer	Worker processing the request
CDP	Communication rules for Chromium DevTools
JSON	Structured format for information
JSON-RPC	Structured request/response message format
WebSocket	Road/channel carrying messages
Browser	Destination that performs the work
Remember: The analogy is conceptual. CDP, JSON-RPC, and WebSocket should not be interpreted as an always-fixed sequence in every Playwright operation.
15. Complete Conceptual Architecture
                         YOUR TEST
                            |
                            v
                    +----------------+
                    | Playwright API |
                    +----------------+
                            |
                            v
              +----------------------------+
              | Playwright Internal Layer |
              +----------------------------+
                   /          |          \
                  /           |           \
                 v            v            v
           Chromium       Firefox        WebKit
               |
               | (CDP-based connection when applicable)
               v
              CDP
               |
               v
          Communication
          such as WebSocket
The lower section is conceptual: the exact communication path depends on the browser and the type of connection being used.

16. Key Differences
Concept	What it is
Playwright API	High-level interface used by test code
Internal/Driver Layer	Low-level Playwright machinery that controls browsers
CDP	Chrome DevTools Protocol; Chromium-specific
JSON	Data representation format
JSON-RPC	Structured remote procedure call protocol style
WebSocket	Persistent two-way communication transport
Browser	Executes the actual browser operation
17. Interview-Ready Answer
Playwright provides a high-level API for browser automation. When we call methods such as page.goto() or locator.click(), Playwright's internal architecture handles the lower-level browser interaction and browser-specific communication. CDP, or Chrome DevTools Protocol, is Chromium-specific and can be used for CDP-based Chromium connections. WebSocket is a transport mechanism that can carry protocol messages. JSON is a data format, while JSON-RPC is a structured request/response protocol style. Firefox and WebKit use their own browser-specific communication mechanisms rather than CDP.

18. One-Line Memory Trick
Playwright API   = Interface you use
Internal Layer   = Handles browser-control work
CDP              = Chromium DevTools Protocol
JSON             = Data format
JSON-RPC         = Structured RPC messaging
WebSocket        = Communication channel
Browser          = Performs the operation
19. Final Mental Model
        YOU
         |
         | Playwright API
         v
   PLAYWRIGHT
   INTERNAL LAYER
         |
         +-------------------+
         |                   |
         v                   v
     Chromium          Firefox / WebKit
         |
     CDP when
     applicable
         |
   Communication
   channel such
   as WebSocket
Most important point: Playwright gives you one consistent automation API while hiding most browser-specific communication details from your test code.