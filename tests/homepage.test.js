const {test,expect}= require ("@playwright/test")

test("open the homepage and check the title", async function({page}){
    await page.goto("/")
    await expect(page).toHaveTitle(/Home/)
})