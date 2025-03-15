import {test,expect} from '@playwright/test'

test ("upload my file",async function ({page}){
    await page.goto("https://practice.expandtesting.com/upload")

    await page.locator("//input[@id='fileInput']").setInputFiles("C:/2025GUNA/Img1.png.jpeg")

    await page.locator("//button[@id='fileSubmit']").click()
    await page.close()
})