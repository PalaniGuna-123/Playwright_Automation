// const { setWorldConstructor } = require('@cucumber/cucumber');
// const { chromium } = require('playwright');
// const config = require('../../playwright.config'); // Adjust the path as needed

// class CustomWorld {
//     constructor() {
//         this.browser = null;
//         this.page = null;
//         this.baseURL = config.use.baseURL;
//     }

//     async openBrowser() {
//         this.browser = await chromium.launch();
//         this.page = await this.browser.newPage();
//     }

//     async closeBrowser() {
//         await this.browser.close();
//     }

//     async navigateTo(url) {
//         await this.page.goto(url);
//     }
// }

// setWorldConstructor(CustomWorld);
const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const config = require('../../playwright.config');

class CustomWorld {
    constructor() {
        this.browser = null;
        this.context = null;
        this.page = null;
        this.baseURL = config.use.baseURL;
    }

    async openBrowser() {
        this.browser = await chromium.launch({ headless: false });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async navigateTo(url) {
        if (!this.page) await this.openBrowser();
        await this.page.goto(url);
    }

    async closeBrowser() {
        if (this.page) await this.page.close();
        if (this.browser) await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
