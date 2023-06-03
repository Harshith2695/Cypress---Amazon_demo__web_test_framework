# Cypress---Amazon_demo__web_test_framework
Test Automation Solution developed using Cypress, Javascript.

![image](https://github.com/Harshith2695/Cypress---Amazon_demo__web_test_framework/assets/49988272/3831ea47-e24c-440b-9457-abac3f212150)


## Pre Requisites

Below softwares or tools needs to be installed to execute the tests


| Software/Tool        | Version       | 
| -------------------- |:-------------:| 
| <a title="Microsoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg"><img width="75" alt="Visual Studio Code 1.35 icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png"></a>      | <a href="https://code.visualstudio.com/download">Latest</a> |
| <a title="node.js authors, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg"><img width="75" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/512px-Node.js_logo.svg.png"></a>      | <a href="https://nodejs.org/en/download">Latest Stable Version</a>      |

## Test Execution commands

Run single test

`npx cypress run --spec <filepath> --headed -b chrome`

file path is path to test script

```
Ex: ./cypress/e2e/validateJSON.spec.cy.js

./cypress/e2e/spec.cy.js
```

## Reports

Reports are generated using Mochawesome in `/cypress/reports/html ` folder


![image](https://github.com/Harshith2695/Cypress---Amazon_demo__web_test_framework/assets/49988272/5eab4f5b-07a9-4896-ad3a-42589a44c255)

To view the report right click select open with browser and choose any browser

![image](https://github.com/Harshith2695/Cypress---Amazon_demo__web_test_framework/assets/49988272/de1de14a-cf7d-4904-b481-10cfbfa30a95)

![image](https://github.com/Harshith2695/Cypress---Amazon_demo__web_test_framework/assets/49988272/64934cf2-a27d-49dc-a843-ec6ec0debd16)


## Attribution

Tools/software images are obtained via Wikimedia Commons (https://commons.wikimedia.org/wiki/Main_Page)

## References

Cypress commands : https://docs.cypress.io/api/table-of-contents/
