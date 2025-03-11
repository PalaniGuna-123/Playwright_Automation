const {BeforeAll, Before, After, AfterAll} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const config = require('../../playwright.config');

let browserInstance;

// This runs before every tests
BeforeAll(async () => {
    console.log("Launching the browser...");
    browserInstance = await chromium.launch();
});


// This runs before each test execution
Before(async function () {
    console.log(`Navigating to ${config.use.baseURL} before each test...`);
    this.page = await browserInstance.newPage();
    await this.page.goto(config.use.baseURL);
});

// This runs after each test execution
After(async function () {
   console.log("Closing the page after the test")
   await this.page.close()
});

// This runs after every tests
AfterAll(async () => {
    console.log("Closing the browser......");
    await browserInstance.close()
    
});
module.exports={browserInstance}