# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_webTables\236_WebTable.spec.ts >> Verify the web table example-1
- Location: tests\07_webTables\236_WebTable.spec.ts:18:7

# Error details

```
Error: locator.textContent: Unexpected token ":" while parsing css selector "following-sibling::td[1]". Did you mean to CSS.escape it?
Call log:
  - waiting for //table[@id="customers"]/tbody/tr/td[2] >> nth=5 >> following-sibling::td[1]

```

# Page snapshot

```yaml
- table [ref=e2]:
  - rowgroup [ref=e3]:
    - row [ref=e4]:
      - columnheader "Company" [ref=e5]
      - columnheader "Contact" [ref=e6]
      - columnheader "Country" [ref=e7]
    - row [ref=e8]:
      - cell "Google" [ref=e9]
      - cell "Maria Anders" [ref=e10]
      - cell "Germany" [ref=e11]
    - row [ref=e12]:
      - cell "Meta" [ref=e13]
      - cell "Francisco Chang" [ref=e14]
      - cell "Mexico" [ref=e15]
    - row [ref=e16]:
      - cell "Microsoft" [ref=e17]
      - cell "Roland Mendel" [ref=e18]
      - cell "Austria" [ref=e19]
    - row [ref=e20]:
      - cell "Island Trading" [ref=e21]
      - cell "Helen Bennett" [ref=e22]
      - cell "UK" [ref=e23]
    - row [ref=e24]:
      - cell "Adobe" [ref=e25]
      - cell "Yoshi Tannamuri" [ref=e26]
      - cell "Canada" [ref=e27]
    - row [ref=e28]:
      - cell "Amazon" [ref=e29]
      - cell "Giovanni Rovelli" [ref=e30]
      - cell "Italy" [ref=e31]
```

# Test source

```ts
  1  | /* ### Project - Webtable Project
  2  | > Zeta
  3  | 
  4  | URL - > [awesomeqa.com/webtable.html](https://awesomeqa.com/webtable.html) 
  5  | 
  6  | **Objective** :  To find the Helen Bankett first in the web table, and following the 
  7  | web table, please find which country she belongs to.
  8  | 
  9  | **Concept** -  following sibling, Dynamic XPath creation. -> Playwright Locator. */
  10 | 
  11 | //    //td[.="Helen Bennett"]/following-sibling::td[1]
  12 | //    //table[@id="customers"]/tbody/tr[5]/td[2]/following-sibling::td
  13 | 
  14 | 
  15 | 
  16 | import { test, expect } from '@playwright/test';
  17 | 
  18 |   test('Verify the web table example-1', async ({ page }) => {
  19 | 
  20 |     await page.goto('https://awesomeqa.com/webtable.html');   
  21 |     
  22 |     //  const firstPart = '//table[@id="customers"]/tbody/tr[';
  23 |     //  const secondPart = ']/td[';
  24 |     //  const thirdPart  = ']';
  25 |      
  26 |     //  const rows = await page.locator('//table[@id="customers"]/tbody/tr').count();
  27 |     //  const columns = await page.locator('//table[@id="customers"]/tbody/tr[2]/td').count();
  28 |       
  29 |     //  for(let i = 2; i <= rows; i++){
  30 |     //     for(let j = 1; j <= columns; j++){
  31 |     //         const dynamicXpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
  32 |     //         //console.log(dynamicXpath);
  33 |     //         const data = await page.locator(dynamicXpath).innerText();
  34 |     //         //console.log(data);
  35 |     const allNames = await page.locator('//table[@id="customers"]/tbody/tr/td[2]').all();
  36 |     for(const name of allNames){
  37 |       const data : string | null = await name.textContent();
  38 | 
  39 |             if(data?.includes('Giovanni Rovelli')){
  40 |                 const countryPath = name.locator('following-sibling::td[1]');;
> 41 |                 const countryText = await countryPath.textContent();
     |                                                       ^ Error: locator.textContent: Unexpected token ":" while parsing css selector "following-sibling::td[1]". Did you mean to CSS.escape it?
  42 |                 console.log('--------');
  43 |                 console.log(`Giovanni Rovelli is in - ${countryText}`);
  44 |             }
  45 |         }
  46 |      //}
  47 |     await page.pause();
  48 |   });
```