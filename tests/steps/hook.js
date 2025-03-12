const {BeforeAll, Before, After, AfterAll, setDefaultTimeout, Status} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const config = require('../../playwright.config');
const fs = require('fs').promises;
const path = require('path');

setDefaultTimeout(120 * 1000); 

let browserInstance;
let testData;

BeforeAll(async () => {
    console.log("Launching the browser...");
    browserInstance = await chromium.launch();
    testData = JSON.parse(await fs.readFile('fixtures/data.json', 'utf8'));
});


Before(async function (scenario) {
    console.log(`Navigating to ${config.use.baseURL} before each test...`);
    this.context = await browserInstance.newContext({
        recordVideo: {
            dir: path.join(__dirname, 'videos') 
        }
    });
    this.page = await this.context.newPage();
    await this.page.goto(config.use.baseURL);
    this.data = testData; 
    this.testName = scenario.pickle.name;
});

After(async function (scenario) {
    console.log("Closing the page after the test...");
    const handleVideo = async (scenario, videoPath) => {
        if (scenario.result.status === Status.FAILED) {
            const failedVideoPath = path.join(__dirname, 'videos', `${this.testName.replace(/\W+/g, "_")}.webm`);
            await fs.rename(videoPath, failedVideoPath);
            console.log(`Test failed. Video saved at ${failedVideoPath}`);
        } else {
            await fs.unlink(videoPath);
            console.log(`Test passed. Video at ${videoPath} has been deleted.`);
        }
    };

    if (this.processEnv.CAPTURE_VIDEO) {
        const videoPath = await this.page.video().path();
        await handleVideo.call(this, scenario, videoPath);
    }
    await this.page.close();
    await this.context.close(); 
});


AfterAll(async () => {
    console.log("Closing the browser...");
    await browserInstance.close();
});

module.exports = {browserInstance};