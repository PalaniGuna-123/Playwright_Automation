import { test, expect } from '@playwright/test';

test("work with multiple tabs", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();  
    await page.goto("https://palaniguna-123.github.io/PalaniGuna-Portfolio/");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"), 
        page.locator("//div[@class='icons']//i[@class='bx bxl-instagram']").click()
    ]);

    await newPage.waitForLoadState();  
    console.log("New tab URL:", newPage.url());
});
