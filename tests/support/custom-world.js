const { setWorldConstructor } = require('@cucumber/cucumber');
const config = require('../../playwright.config');
const dotenv = require('dotenv').config();

class CustomWorld {
    constructor() {
        this.browser = null;
        this.page = null;
        this.baseURL = config.use.baseURL;
    }
}

setWorldConstructor(CustomWorld);