const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const config = require('../../playwright.config'); // Adjust the path as needed

class CustomWorld {
    constructor() {
        this.browser = null;
        this.page = null;
        this.baseURL = config.use.baseURL;
    }

    async openBrowser() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }
}

setWorldConstructor(CustomWorld);