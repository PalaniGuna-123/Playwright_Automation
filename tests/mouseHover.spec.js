import {test,expect} from '@playwright/test'


test (" perform mouse hover", async ({page})=>{
    await page.goto("https://www.browserstack.com/guide/mouse-hover-in-selenium")
    await page.locator("//button[@id='products-dd-toggle']").hover()
    await page.locator("//div[normalize-space()='Test iOS & Android mobile apps on real devices']").hover()
})