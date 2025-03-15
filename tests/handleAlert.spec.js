import {test,expect} from '@playwright/test'
test("handle alert with textbox", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     
page.on('dialog', async (d) =>{
    expect(d.type()).toContain("alert")
    expect(d.message()).toContain("I am a JS Alert")
    await d.accept()
})
 await page.locator("//button[@onclick='jsAlert()']").click()
})
test("handle alert with textbox confirm", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     
page.on('dialog', async (dialogWindow) =>{
    expect(dialogWindow.type()).toContain("confirm")
    expect(dialogWindow.message()).toContain("I am a JS Confirm")
    // await dialogWindow.accept()
    await dialogWindow.dismiss()
})
 await page.locator("//button[@onclick='jsConfirm()']").click()
 await page.close()
})
test("handle alert with textbox prompt", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
     
page.on('dialog', async (dialogWindow) =>{
    expect(dialogWindow.type()).toContain("prompt")
    expect(dialogWindow.message()).toContain("I am a JS prompt")
    await dialogWindow.accept("Guna Vision")
})
 await page.locator("//button[@onclick='jsPrompt()']").click()
 await page.waitForTimeout(5000)
 await page.close()
})

