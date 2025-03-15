 import {test, expect} from '@playwright/test'

 test("Verify Application Title using keyboard", async function ({page}){
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").type("Playwright")

   await page.waitForSelector("//li[@role='presentation']")

   await page.keyboard.press("ArrowDown")
   await page.keyboard.press("ArrowDown")
   await page.keyboard.press("Enter")
   await page.close()
 })
 test("Verify Application Title using ", async function ({page}){
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").type("Playwright")

   await page.waitForSelector("//li[@role='presentation']")
   const element= await page.$$("//li[@role='presentation']")
   await page.close()
 })