import {test, expect} from '@playwright/test'

test("keyboard actions", async function ({page}){
   await page.goto("https://www.google.com")
   await page.locator("textarea[name='q']").type("Guna Vision")
//    await page.keyboard.press("Enter")
   await page.waitForTimeout(2000)
   await page.keyboard.press("Control+A")
   await page.waitForTimeout(2000)
   await page.keyboard.press("Control+C")
   await page.waitForTimeout(1000)
   await page.keyboard.press("Backspace")
   await page.waitForTimeout(2000)
   await page.keyboard.press("Control+V")

   await page.close()
})

test ("another example", async function ({page}){
    await page.goto("https://www.google.com")
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Guna vision")

    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    for(let i=0;i<6;i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")

    await page.close()
})