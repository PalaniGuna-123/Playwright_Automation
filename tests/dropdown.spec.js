import {test,expect} from '@playwright/test'
test ("My dropdown test", async ({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/")
    await page.locator('//*[@id="post-2646"]/div[2]/div/div/div/p/select').selectOption({index:4})
    await page.waitForTimeout(3000)

    const value=await page.locator('//*[@id="post-2646"]/div[2]/div/div/div/p/select').textContent()
    console.log("All dropdown values "+ value);

    await expect(value.includes('BritishVirgin Islands')).toBeTruthy()

    let country=await page.$('//*[@id="post-2646"]/div[2]/div/div/div/p/select')
    
    let array=await country.$$("option")
    
    let status=false
    for(let i=0;i<array.length;i++){
        let element=array[i]
        let values =await element.textContent()
        console.log("value from dropdown using for loop  "+ values);

        if(values.includes("Cameroon")){
            status=true;
            break;
        }
    }
    
   await expect(status).toBeTruthy()

    
})

test.skip ("multi select dropdown", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")

    await page.locator("//div[contains(@class,'css-1pahdxg-control')]//div[contains(@class,'css-1hwfws3')]").selectOption('Green','Blue')
})