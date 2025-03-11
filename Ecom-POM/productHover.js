class ProductHover {
    constructor(page) {
        this.page = page;
        this.HOVERING_WOMEN = "//span[normalize-space()='Women']";
        this.WOMEN_TOPS = "//a[@id='ui-id-9']";
        this.WOMEN_JACKETS = "//a[@id='ui-id-11']//span[contains(text(),'Jackets')]";
    }

    async hovering_products() {
        await this.page.hover(this.HOVERING_WOMEN);
        
        const womenTopsLink = this.page.locator(this.WOMEN_TOPS);
        await womenTopsLink.waitFor({ state: 'visible', timeout: 7000 });

        await this.page.hover(this.WOMEN_TOPS);

        const jacketsLink = this.page.locator(this.WOMEN_JACKETS);
        await jacketsLink.waitFor({ state: 'attached', timeout: 7000 });

        await this.page.click(this.WOMEN_JACKETS);
    }
}

module.exports = ProductHover;
