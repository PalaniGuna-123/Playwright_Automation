class CartPage {
    constructor(page) {
        this.page = page;
        this.ITEMS_XPATH = "//img[@alt='Ingrid Running Jacket']", { timeout: 60000 }; 
        this.CHANGE_IMAGE = "//div[@aria-label='Next']//div[@class='fotorama__arr__arr']";
        this.SIZE_XPATH_BASE = "//div[@id='option-label-size-143-item-";  
        this.COLOR_XPATH_BASE = "//div[@id='option-label-color-93-item-";  
        this.QUANTITY="//input[@id='qty']"
        this.ADD_TO_COMPARE="//div[@class='product-addto-links']//span[contains(text(),'Add to Compare')]"
        
    }

    async changeImageMultipleTimes(times = 4) {
        for (let i = 0; i < times; i++) {
            await this.page.click(this.CHANGE_IMAGE);
            console.log(`Changed image ${i + 1} times.`);
            await this.page.waitForTimeout(1000);
        }
    }

    async selectSize(sizeId) {
        const sizeXPath = `${this.SIZE_XPATH_BASE}${sizeId}']`;  
        await this.page.click(sizeXPath);
        console.log(`Selected size with ID: ${sizeId}`);
    }

    async selectMultipleSizes() {
        const sizes = [166, 167, 168, 169, 170];  
        for (let sizeId of sizes) {
            await this.selectSize(sizeId);  
        }
    }

    async selectColor(colorId) {
        const colorXPath = `${this.COLOR_XPATH_BASE}${colorId}']`;
        await this.page.click(colorXPath);
        console.log(`Selected color with ID: ${colorId}`);
    }

    async selectMultipleColors() {
        const colors = [56, 58, 59];  
        for (let colorId of colors) {
            await this.selectColor(colorId);
        }
    }

    async addAllItemsToCart() {
        await this.page.click(this.ITEMS_XPATH);  
        await this.changeImageMultipleTimes();  
        await this.selectMultipleSizes();  
        await this.selectMultipleColors();  
        await this.page.fill(this.QUANTITY,'11')
        await this.page.click(this.ADD_TO_COMPARE)

    }
}

module.exports = CartPage;
