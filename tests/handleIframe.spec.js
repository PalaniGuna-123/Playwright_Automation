import {test,expect} from '@playwright/test'

test("handle iframe", async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[normalize-space()='java.applet']").click()
    await page.pause()
})