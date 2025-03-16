import {test, expect} from '@playwright/test'
  const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))
  const testdatas=JSON.parse(JSON.stringify(require("../logindata.json")))

// test.skip ('login to application', async ({page})=>{
//     await page.goto("https://freelance-learn-automation.vercel.app/login")
//     await page.pause()
    
//     await page.locator("//input[@id='email1']").fill(testdata.username)
//     await page.locator("//input[@id='password1']").fill(testdata.password)
// })   

test.skip("sign up with json data", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("//input[@id='name']").fill(testdata.name)
    await page.getByPlaceholder("Email").fill(testdata.username)
    await page.locator("//input[@id='password']").fill(testdata.password)

})

test.describe("data driven login testing", function (){
    for(const data of testdatas){
        test.describe("log with users", function (){

            test(`Login with user ${data.username}`, async ({page})=>{
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                // await page.pause()
                
                await page.locator("//input[@id='email1']").fill(data.username)
                await page.locator("//input[@id='password1']").fill(data.password)
            }) 
        })
    }
})