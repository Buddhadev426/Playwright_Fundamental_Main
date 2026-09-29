# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\07_Flipkart_search.spec.ts >> Test the application >> Search prduct price respect to product name
- Location: tests\Practice\07_Flipkart_search.spec.ts:4:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.jIjQ8S').nth(4).locator('.hZ3P6w.DeU9vF')

```

# Page snapshot

```yaml
- generic [ref=f1e3]:
  - generic [ref=f1e7]:
    - generic [ref=f1e9]:
      - link [ref=f1e10] [cursor=pointer]:
        - /url: /
        - img "Flipkart" [ref=f1e11]
      - link "Explore Plus" [ref=f1e12] [cursor=pointer]:
        - /url: /plus
    - generic [ref=f1e16]:
      - textbox "Search for products, brands and more" [ref=f1e18]: DSLR Camera
      - button [ref=f1e19] [cursor=pointer]
    - link "Login" [ref=f1e28] [cursor=pointer]:
      - /url: /login?ret=%2Fsearch%3Fq%3DDSLR%2BCamera%26otracker%3Dsearch%26otracker1%3Dsearch%26marketplace%3DFLIPKART%26as-show%3Doff%26as%3Doff%26page%3D7
    - link "Become a Seller" [ref=f1e30] [cursor=pointer]:
      - /url: https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect
    - generic [ref=f1e32]: More
    - link "Cart" [ref=f1e42] [cursor=pointer]:
      - /url: /viewcart?exploreMode=true&preference=FLIPKART
  - generic [ref=f1e50]:
    - generic [ref=f1e51] [cursor=pointer]: Electronics
    - generic [ref=f1e54] [cursor=pointer]: TVs & Appliances
    - generic [ref=f1e57] [cursor=pointer]: Men
    - generic [ref=f1e60] [cursor=pointer]: Women
    - generic [ref=f1e63] [cursor=pointer]: Baby & Kids
    - generic [ref=f1e66] [cursor=pointer]: Home & Furniture
    - generic [ref=f1e69] [cursor=pointer]: Sports, Books & More
    - link "Flights" [ref=f1e72] [cursor=pointer]:
      - /url: /travel/flights?otracker=nmenu_Flights
    - link "Offer Zone" [ref=f1e73] [cursor=pointer]:
      - /url: /offers-list/top-deals?screen=dynamic&pk=themeViews%3DDT-OMU-A2%3ADT-OMU~widgetType%3DdealCard~contentType%3Dneo&otracker=nmenu_offer-zone
  - generic [ref=f1e74]:
    - generic [ref=f1e75]:
      - generic [ref=f1e77]:
        - generic [ref=f1e79]:
          - generic [ref=f1e80]: Filters
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: CATEGORIES
            - generic [ref=f1e87]:
              - img [ref=f1e89] [cursor=pointer]
              - link "Cameras & Accessories" [ref=f1e91] [cursor=pointer]:
                - /url: /cameras-accessories/pr?sid=jek&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e93]:
              - img [ref=f1e95] [cursor=pointer]
              - link "Cameras" [ref=f1e97] [cursor=pointer]:
                - /url: /cameras/pr?sid=jek,p31&q=DSLR+Camera&otracker=categorytree
            - generic [ref=f1e99]:
              - img [ref=f1e101] [cursor=pointer]
              - link "DSLR & Mirrorless" [ref=f1e103] [cursor=pointer]:
                - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&q=DSLR+Camera&otracker=categorytree
          - generic [ref=f1e104]: Brand
          - generic [ref=f1e109]:
            - generic [ref=f1e110]: Price
            - generic [ref=f1e118]:
              - generic [ref=f1e119] [cursor=pointer]
              - generic [ref=f1e126]:
                - generic [ref=f1e127]: .
                - generic [ref=f1e128]: .
                - generic [ref=f1e129]: .
                - generic [ref=f1e130]: .
                - generic [ref=f1e131]: .
                - generic [ref=f1e132]: .
                - generic: .
            - generic [ref=f1e133]:
              - combobox [ref=f1e135]:
                - option "Min" [selected]
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
              - generic [ref=f1e136]: to
              - combobox [ref=f1e138]:
                - option "5000"
                - option "10000"
                - option "20000"
                - option "30000"
                - option "50000"
                - option "50000+" [selected]
          - generic [ref=f1e139]: Video Resolution
          - generic [ref=f1e144]:
            - generic [ref=f1e145] [cursor=pointer]: Customer Ratings
            - generic [ref=f1e150]:
              - generic "4★ & above" [ref=f1e151] [cursor=pointer]
              - generic "3★ & above" [ref=f1e156] [cursor=pointer]
              - generic "2★ & above" [ref=f1e161] [cursor=pointer]
              - generic "1★ & above" [ref=f1e166] [cursor=pointer]
          - generic [ref=f1e171]: Lens Mount
          - generic [ref=f1e176]: Effective Pixels
          - generic [ref=f1e181]: Sensor Size
          - generic [ref=f1e186]: Shutter Speed
          - generic [ref=f1e191]: Mega Pixel
          - generic [ref=f1e196]: Type
          - generic [ref=f1e201]: Discount
          - generic [ref=f1e206]:
            - generic [ref=f1e207] [cursor=pointer]
            - generic [ref=f1e212]: "?"
          - generic [ref=f1e214]: Country Of Origin
          - generic [ref=f1e219]: Color
          - generic [ref=f1e224]: Number of Lens
          - generic [ref=f1e229]:
            - generic [ref=f1e230] [cursor=pointer]: Offers
            - generic [ref=f1e235]:
              - generic "Buy More, Save More" [ref=f1e236] [cursor=pointer]
              - generic "Special Price" [ref=f1e241] [cursor=pointer]
          - generic [ref=f1e246]: FPS in Burst Mode
          - generic [ref=f1e251]: Maximum ISO
          - generic [ref=f1e256]: Maximum Shutter Speed
          - generic [ref=f1e261]: Features
          - generic [ref=f1e266]: GST Invoice Available
          - generic [ref=f1e271]: Availability
        - link "Need help? Help me decide Buying Guide" [ref=f1e277] [cursor=pointer]:
          - /url: /buying-guide/dslr-camera?sid=jek,p31,trv&otracker=bg_from_browse_lhs
          - generic [ref=f1e278]: Need help?
          - generic [ref=f1e279]: Help me decide
          - img "Buying Guide" [ref=f1e282]
      - generic [ref=f1e283]:
        - generic [ref=f1e286]:
          - generic [ref=f1e287]:
            - link "Home" [ref=f1e289] [cursor=pointer]:
              - /url: /
            - link "Cameras & Accessories" [ref=f1e293] [cursor=pointer]:
              - /url: /cameras-accessories/pr?sid=jek&marketplace=FLIPKART
            - link "Cameras" [ref=f1e297] [cursor=pointer]:
              - /url: /cameras/pr?sid=jek,p31&marketplace=FLIPKART
            - link "DSLR & Mirrorless" [ref=f1e301] [cursor=pointer]:
              - /url: /cameras/dslr-mirrorless/pr?sid=jek,p31,trv&marketplace=FLIPKART
          - generic [ref=f1e302]: Showing 145 – 144 of 144 results for "DSLR Camera"
          - generic [ref=f1e303]:
            - generic [ref=f1e304]: Sort By
            - generic [ref=f1e305]: Relevance
            - generic [ref=f1e306] [cursor=pointer]: Popularity
            - generic [ref=f1e307] [cursor=pointer]: Price -- Low to High
            - generic [ref=f1e308] [cursor=pointer]: Price -- High to Low
            - generic [ref=f1e309] [cursor=pointer]: Newest First
        - generic [ref=f1e312]:
          - generic [ref=f1e313]: Page 7 of 5
          - navigation [ref=f1e314]:
            - link "Previous" [ref=f1e315] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=6
            - link "1" [ref=f1e316] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=1
            - link "2" [ref=f1e317] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=2
            - link "3" [ref=f1e318] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=3
            - link "4" [ref=f1e319] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=4
            - link "5" [ref=f1e320] [cursor=pointer]:
              - /url: /search?q=DSLR+Camera&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off&page=5
    - generic [ref=f1e322]:
      - generic [ref=f1e323]: Reviews for Popular DSLR & Mirrorless
      - generic [ref=f1e324]:
        - generic [ref=f1e325]:
          - img "Canon EOS 7D Mark II DSLR Camera (Body only)" [ref=f1e328]
          - generic [ref=f1e329]:
            - link "1. Canon EOS 7D Mark II DSLR C... 4.1 21 Ratings&6 Reviews ₹1,09,999 11% off" [ref=f1e330] [cursor=pointer]:
              - /url: /canon-eos-7d-mark-ii-dslr-camera-body-only/p/itm7ef20bfaa49a5?pid=CAME3YQ44SXE3SQF&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e331]: 1. Canon EOS 7D Mark II DSLR C...
              - generic [ref=f1e333]:
                - generic [ref=f1e334]: "4.1"
                - generic [ref=f1e336]:
                  - text: 21 Ratings
                  - generic [ref=f1e337]: "&6 Reviews"
              - generic [ref=f1e339]:
                - generic [ref=f1e340]: ₹1,09,999
                - generic [ref=f1e341]: 11% off
            - list [ref=f1e342]:
              - listitem [ref=f1e343]: "Effective Pixels: 20.2 MP"
              - listitem [ref=f1e344]: "Sensor Type: CMOS"
              - listitem [ref=f1e345]: Full HD
        - generic [ref=f1e346]:
          - generic [ref=f1e347]: Most Helpful Review
          - generic [ref=f1e349]:
            - generic [ref=f1e350]:
              - generic [ref=f1e351]: "5"
              - paragraph [ref=f1e353]: Shubham sanjay khanvilkar
            - generic [ref=f1e354]: My mom gifted me this dslr on my bday...since then i fallen in love with this instrument..awesome pics..:D
            - generic [ref=f1e359]:
              - paragraph [ref=f1e360]: Shubham sanjay khanvilkar
              - paragraph [ref=f1e361]: Apr, 2016
        - generic [ref=f1e362]:
          - generic [ref=f1e363]: Recent Review
          - generic [ref=f1e365]:
            - generic [ref=f1e366]:
              - generic [ref=f1e367]: "5"
              - paragraph [ref=f1e369]: Brilliant
            - generic [ref=f1e370]: Its a ECO version of 1DX MARK II , excellent camera in crop sensor
            - generic [ref=f1e375]:
              - paragraph [ref=f1e376]: Avijit Dasgupta
              - paragraph [ref=f1e381]: Certified Buyer
              - paragraph [ref=f1e382]: Oct, 2018
      - generic [ref=f1e383]:
        - generic [ref=f1e384]:
          - img "NIKON D7000 Series D7500 DSLR Camera Body with 18-140 mm Lens" [ref=f1e387]
          - generic [ref=f1e388]:
            - link "2. NIKON D7000 Series D7500 DS... 4.5 1,231 Ratings&154 Reviews ₹78,990 16% off" [ref=f1e389] [cursor=pointer]:
              - /url: /nikon-d7000-series-d7500-dslr-camera-body-18-140-mm-lens/p/itme57c2bb8a03cd?pid=DLLFCKK6GET9EEDC&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e390]: 2. NIKON D7000 Series D7500 DS...
              - generic [ref=f1e392]:
                - generic [ref=f1e393]: "4.5"
                - generic [ref=f1e395]:
                  - text: 1,231 Ratings
                  - generic [ref=f1e396]: "&154 Reviews"
              - generic [ref=f1e398]:
                - generic [ref=f1e399]: ₹78,990
                - generic [ref=f1e400]: 16% off
            - list [ref=f1e401]:
              - listitem [ref=f1e402]: 4K UHD, Follow your passion wherever it leads, Flagship Image Quality., AF and Capturing Ability (Superb shooting performance for moving subjects), Cinematic Versatility (Get your creative world in motion with stunning 4K UHD video and advanced filmmaking features), In-camera Time-lapse Movies, Power Aperture Control, Active D-Lighting, Electronic VR, Versatile Sound Controls, Designed for Performance., Touch-operation, Tilting 3.2-in. LCD Monitor, Precision Optical Viewfinder, Comfortable Grip Design, Built-in Bluetooth and Wi-Fi Connectivity
              - listitem [ref=f1e403]: "Effective Pixels: 20.9 MP"
              - listitem [ref=f1e404]: "Sensor Type: CMOS"
        - generic [ref=f1e405]:
          - generic [ref=f1e406]: Most Helpful Review
          - generic [ref=f1e408]:
            - generic [ref=f1e409]:
              - generic [ref=f1e410]: "5"
              - paragraph [ref=f1e412]: Brilliant
            - generic [ref=f1e415]:
              - generic [ref=f1e416]: One of the finest Dslr camera i hv ever seen... No need to think.. jst go and grab it.. if u need a high mid rnge Semi professional Camera go for it.. no wil...
              - generic [ref=f1e417] [cursor=pointer]: Read full review
            - generic [ref=f1e419]:
              - paragraph [ref=f1e420]: Satyajit Acharjee
              - paragraph [ref=f1e425]: Certified Buyer
              - paragraph [ref=f1e426]: Aug, 2019
        - generic [ref=f1e427]:
          - generic [ref=f1e428]: Recent Review
          - generic [ref=f1e430]:
            - generic [ref=f1e431]:
              - generic [ref=f1e432]: "5"
              - paragraph [ref=f1e434]: Perfect product!
            - generic [ref=f1e435]: For wedding and event very nice cameraCan u have budget friendly and good choice for fresh to seniors
            - generic [ref=f1e440]:
              - paragraph [ref=f1e441]: Flipkart Customer
              - paragraph [ref=f1e446]: Certified Buyer
              - paragraph [ref=f1e447]: 3 months ago
      - generic [ref=f1e448]:
        - generic [ref=f1e449]:
          - img "Toy Imagine Top Quality Kids Digital Camera 3.0MP, 1080P Mini Video Camera DSLR Camera USB Rechargeable & Portable Camera" [ref=f1e452]
          - generic [ref=f1e453]:
            - link "3. Toy Imagine Top Quality Kid... 3.2 16 Ratings&2 Reviews ₹619 61% off" [ref=f1e454] [cursor=pointer]:
              - /url: /toy-imagine-top-quality-kids-digital-camera-3-0mp-1080p-mini-video-dslr-usb-rechargeable-portable/p/itma28cadb9918bb?pid=DLLHHYD8NNH6VGZH&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e455]: 3. Toy Imagine Top Quality Kid...
              - generic [ref=f1e457]:
                - generic [ref=f1e458]: "3.2"
                - generic [ref=f1e460]:
                  - text: 16 Ratings
                  - generic [ref=f1e461]: "&2 Reviews"
              - generic [ref=f1e463]:
                - generic [ref=f1e464]: ₹619
                - generic [ref=f1e465]: 61% off
            - list [ref=f1e466]:
              - listitem [ref=f1e467]: "Effective Pixels: 3 MP"
              - listitem [ref=f1e468]: "Sensor Type: CCD"
              - listitem [ref=f1e469]: "1080"
        - generic [ref=f1e470]:
          - generic [ref=f1e471]: Most Helpful Review
          - generic [ref=f1e473]:
            - generic [ref=f1e474]:
              - generic [ref=f1e475]: "1"
              - paragraph [ref=f1e477]: Did not meet expectations
            - generic [ref=f1e478]: The battery is draining quickly.
            - generic [ref=f1e483]:
              - paragraph [ref=f1e484]: Komal Kumar Sahu
              - paragraph [ref=f1e489]: Certified Buyer
              - paragraph [ref=f1e490]: 3 months ago
        - generic [ref=f1e491]:
          - generic [ref=f1e492]: Recent Review
          - generic [ref=f1e494]:
            - generic [ref=f1e495]:
              - generic [ref=f1e496]: "1"
              - paragraph [ref=f1e498]: Did not meet expectations
            - generic [ref=f1e499]: The battery is draining quickly.
            - generic [ref=f1e504]:
              - paragraph [ref=f1e505]: Komal Kumar Sahu
              - paragraph [ref=f1e510]: Certified Buyer
              - paragraph [ref=f1e511]: 3 months ago
      - generic [ref=f1e512]:
        - generic [ref=f1e513]:
          - img "KMUYO 6 PACK OF 2 MINI PTZ CAMERA DSLR Camera IP Camera" [ref=f1e516]
          - generic [ref=f1e517]:
            - link "4. KMUYO 6 PACK OF 2 MINI PTZ ... 5 1 Ratings&1 Reviews ₹3,430 57% off" [ref=f1e518] [cursor=pointer]:
              - /url: /kmuyo-6-pack-2-mini-ptz-camera-dslr-ip/p/itmac7027059ac79?pid=DLLHZGYJQNBCMCDZ&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e519]: 4. KMUYO 6 PACK OF 2 MINI PTZ ...
              - generic [ref=f1e521]:
                - generic [ref=f1e522]: "5"
                - generic [ref=f1e524]:
                  - text: 1 Ratings
                  - generic [ref=f1e525]: "&1 Reviews"
              - generic [ref=f1e527]:
                - generic [ref=f1e528]: ₹3,430
                - generic [ref=f1e529]: 57% off
            - list [ref=f1e530]:
              - listitem [ref=f1e531]: "Effective Pixels: 12 MP"
              - listitem [ref=f1e532]: "Sensor Type: CMOS"
              - listitem [ref=f1e533]: WiFi Available
        - generic [ref=f1e534]:
          - generic [ref=f1e535]: Most Helpful Review
          - generic [ref=f1e537]:
            - generic [ref=f1e538]:
              - generic [ref=f1e539]: "5"
              - paragraph [ref=f1e541]: Best in the market!
            - generic [ref=f1e542]: nice good excellent
            - generic [ref=f1e547]:
              - paragraph [ref=f1e548]: Flipkart Customer
              - paragraph [ref=f1e553]: Certified Buyer
              - paragraph [ref=f1e554]: 1 month ago
        - generic [ref=f1e555]:
          - generic [ref=f1e556]: Recent Review
          - generic [ref=f1e558]:
            - generic [ref=f1e559]:
              - generic [ref=f1e560]: "5"
              - paragraph [ref=f1e562]: Best in the market!
            - generic [ref=f1e563]: nice good excellent
            - generic [ref=f1e568]:
              - paragraph [ref=f1e569]: Flipkart Customer
              - paragraph [ref=f1e574]: Certified Buyer
              - paragraph [ref=f1e575]: 1 month ago
      - generic [ref=f1e576]:
        - generic [ref=f1e577]:
          - img "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens" [ref=f1e580]
          - generic [ref=f1e581]:
            - link "5. Canon EOS 1500D DSLR Camera... 4.5 17,241 Ratings&2,254 Reviews ₹40,299 19% off" [ref=f1e582] [cursor=pointer]:
              - /url: /canon-eos-1500d-dslr-camera-body-18-55-mm-ii-lens/p/itm033175ceb4ddd?pid=DLLFAEWE22ZAERXG&marketplace=FLIPKART&ov_redirect=true
              - generic [ref=f1e583]: 5. Canon EOS 1500D DSLR Camera...
              - generic [ref=f1e585]:
                - generic [ref=f1e586]: "4.5"
                - generic [ref=f1e588]:
                  - text: 17,241 Ratings
                  - generic [ref=f1e589]: "&2,254 Reviews"
              - generic [ref=f1e591]:
                - generic [ref=f1e592]: ₹40,299
                - generic [ref=f1e593]: 19% off
            - list [ref=f1e594]:
              - listitem [ref=f1e595]: Self-Timer, Type C and Mini HDMI, 9 point AF with 1 centre cross-type AF point, Standard ISO 100 - 6400 (expandable to 12 800), Wi-Fi / NFC supported, Full HD video with fully manual control and selectable frame rates, 1080p recording at 30p, optical viewfinder
              - listitem [ref=f1e596]: "Effective Pixels: 24.1 MP"
              - listitem [ref=f1e597]: "Sensor Type: CMOS"
        - generic [ref=f1e598]:
          - generic [ref=f1e599]: Most Helpful Review
          - generic [ref=f1e601]:
            - generic [ref=f1e602]:
              - generic [ref=f1e603]: "5"
              - paragraph [ref=f1e605]: Just wow!
            - generic [ref=f1e606]: wonderful camera at this price!
            - generic [ref=f1e611]:
              - paragraph [ref=f1e612]: Flipkart Customer
              - paragraph [ref=f1e617]: Certified Buyer
              - paragraph [ref=f1e618]: Jun, 2019
        - generic [ref=f1e619]:
          - generic [ref=f1e620]: Recent Review
          - generic [ref=f1e622]:
            - generic [ref=f1e623]:
              - generic [ref=f1e624]: "1"
              - paragraph [ref=f1e626]: Useless product
            - generic [ref=f1e627]: Battery performance is not good.
            - generic [ref=f1e632]:
              - paragraph [ref=f1e633]: Anil Kumar
              - paragraph [ref=f1e638]: Certified Buyer
              - paragraph [ref=f1e639]: 7 months ago
  - contentinfo [ref=f1e640]:
    - generic [ref=f1e642]:
      - generic [ref=f1e643]:
        - generic [ref=f1e644]:
          - generic [ref=f1e645]: ABOUT
          - link "Contact Us" [ref=f1e646] [cursor=pointer]:
            - /url: /helpcentre?otracker=footer_navlinks
          - link "About Us" [ref=f1e647] [cursor=pointer]:
            - /url: https://corporate.flipkart.net/corporate-home
          - link "Careers" [ref=f1e648] [cursor=pointer]:
            - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
          - link "Flipkart Stories" [ref=f1e649] [cursor=pointer]:
            - /url: http://stories.flipkart.com/?otracker=footer_navlinks
          - link "Press" [ref=f1e650] [cursor=pointer]:
            - /url: http://stories.flipkart.com/category/top-stories/news/
          - link "Corporate Information" [ref=f1e651] [cursor=pointer]:
            - /url: /corporate-information
        - generic [ref=f1e652]:
          - generic [ref=f1e653]: GROUP COMPANIES
          - link "Myntra" [ref=f1e654] [cursor=pointer]:
            - /url: https://www.myntra.com/
          - link "Cleartrip" [ref=f1e655] [cursor=pointer]:
            - /url: https://www.cleartrip.com/
          - link "Shopsy" [ref=f1e656] [cursor=pointer]:
            - /url: https://www.shopsy.in/
        - generic [ref=f1e657]:
          - generic [ref=f1e658]: HELP
          - link "Payments" [ref=f1e659] [cursor=pointer]:
            - /url: /pages/payments
          - link "Shipping" [ref=f1e660] [cursor=pointer]:
            - /url: /pages/shipping
          - link "Cancellation & Returns" [ref=f1e661] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
          - link "FAQ" [ref=f1e662] [cursor=pointer]:
            - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
        - generic [ref=f1e663]:
          - generic [ref=f1e664]: CONSUMER POLICY
          - link "Cancellation & Returns" [ref=f1e665] [cursor=pointer]:
            - /url: /pages/returnpolicy?otracker=footer_navlinks
          - link "Terms Of Use" [ref=f1e666] [cursor=pointer]:
            - /url: /pages/terms?otracker=footer_navlinks
          - link "Security" [ref=f1e667] [cursor=pointer]:
            - /url: /pages/paymentsecurity?otracker=footer_navlinks
          - link "Privacy" [ref=f1e668] [cursor=pointer]:
            - /url: /pages/privacypolicy?otracker=footer_navlinks
          - link "Sitemap" [ref=f1e669] [cursor=pointer]:
            - /url: /sitemap?otracker=footer_navlinks
          - link "Grievance Redressal" [ref=f1e670] [cursor=pointer]:
            - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
          - link "EPR Compliance" [ref=f1e671] [cursor=pointer]:
            - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
          - link "FSSAI Food Safety Connect App" [ref=f1e672] [cursor=pointer]:
            - /url: https://fssai.gov.in/cms/food-safety-connect.php
        - generic [ref=f1e674]:
          - generic [ref=f1e675]: "Mail Us:"
          - generic [ref=f1e678]:
            - paragraph [ref=f1e679]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e680]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e681]: Clove Embassy Tech Village,
            - paragraph [ref=f1e682]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e683]: Bengaluru, 560103,
            - paragraph [ref=f1e684]: Karnataka, India
          - generic [ref=f1e685]: Social
          - generic [ref=f1e686]:
            - link [ref=f1e688] [cursor=pointer]:
              - /url: https://www.facebook.com/flipkart
            - link [ref=f1e691] [cursor=pointer]:
              - /url: https://www.twitter.com/flipkart
            - link [ref=f1e694] [cursor=pointer]:
              - /url: https://www.youtube.com/flipkart
            - link [ref=f1e697] [cursor=pointer]:
              - /url: https://www.instagram.com/flipkart
        - generic [ref=f1e700]:
          - generic [ref=f1e701]: "Registered Office Address:"
          - generic [ref=f1e704]:
            - paragraph [ref=f1e705]: Flipkart Internet Private Limited,
            - paragraph [ref=f1e706]: Buildings Alyssa, Begonia &
            - paragraph [ref=f1e707]: Clove Embassy Tech Village,
            - paragraph [ref=f1e708]: Outer Ring Road, Devarabeesanahalli Village,
            - paragraph [ref=f1e709]: Bengaluru, 560103,
            - paragraph [ref=f1e710]: Karnataka, India
            - paragraph [ref=f1e711]: "CIN : U51109KA2012PTC066107"
            - paragraph [ref=f1e712]:
              - text: "Telephone:"
              - link "044-45614700" [ref=f1e713] [cursor=pointer]:
                - /url: tel:044-45614700
              - text: /
              - link "044-67415800" [ref=f1e714] [cursor=pointer]:
                - /url: tel:044-67415800
      - generic [ref=f1e716]:
        - link "Become a Seller" [ref=f1e719] [cursor=pointer]:
          - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
        - generic [ref=f1e720]: Advertise
        - link "Gift Cards" [ref=f1e724] [cursor=pointer]:
          - /url: /the-gift-card-store?otracker=footer_navlinks
        - link "Help Center" [ref=f1e727] [cursor=pointer]:
          - /url: /helpcentre?otracker=footer_navlinks
        - generic [ref=f1e728]: © 2007-2026 Flipkart.com
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { serialize } from 'node:v8';
  3  | test.describe("Test the application", () => {
  4  |     test("Search prduct price respect to product name", async ({page}) => {
  5  |         await page.goto('https://www.flipkart.com/');
  6  |         await page.waitForTimeout(3000);
  7  |         const popup = page.locator('//div[@class="q7ywiQ"]');
  8  |         await popup.locator('//span[@class="b3wTlE"]').click();
  9  | 
  10 |         const searchbox = page.locator('//input[@class="nw1UBF v1zwn26"]').nth(0);
  11 |         await searchbox.fill('DSLR Camera');
  12 |         await searchbox.press('Enter');
  13 | 
  14 |         await page.waitForTimeout(5000);
  15 | 
  16 |         
  17 | 
  18 |         while(true){
  19 |         const products = page.locator('.jIjQ8S');
  20 |         const count = await products.count();
  21 |         console.log('Total products : ', count);
  22 |         
  23 |             for(let i = 0; i < count; i++){
  24 |         const product = products.nth(i);
  25 |         const nameLocator = product.locator('.RG5Slk');
  26 |         const priceLocator = product.locator('.hZ3P6w.DeU9vF');
  27 | 
  28 | 
  29 |     if (await nameLocator.count() === 0) {
  30 |         console.log('Product name not found');
  31 |         continue;
  32 |     }
  33 | 
  34 |     if (await priceLocator.count() === 0) {
  35 |         console.log('Price not found');
  36 |         continue;
  37 |     }
  38 |             const name = await product.locator('.RG5Slk').innerText();
> 39 |             const price = await product.locator('.hZ3P6w.DeU9vF').innerText();
     |                                                                   ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  40 | 
  41 |             console.log(`Product ${i + 1} :`);
  42 |             console.log(`Product Name : ${name}`);
  43 |             console.log(`Product Price : ${price}`);
  44 |         }
  45 |     
  46 | 
  47 |      const next = page.locator('a.jgg0SZ').filter({ hasText: 'Next' });
  48 | 
  49 |     // If Next doesn't exist → last page
  50 |     if (await next.count() === 0) {
  51 |         console.log('No Next link. Last page reached.');
  52 |         break;
  53 |     }
  54 | 
  55 |     // Click Next
  56 |     await next.click();
  57 | 
  58 | 
  59 |     // Wait for next page
  60 |     await page.waitForLoadState('domcontentloaded');
  61 | 
  62 |     console.log('........Moved to next page......');
  63 |             
  64 | 
  65 |         }
  66 | 
  67 |         
  68 |         
  69 | 
  70 | 
  71 | 
  72 |         await page.pause();
  73 |     })
  74 | })
```