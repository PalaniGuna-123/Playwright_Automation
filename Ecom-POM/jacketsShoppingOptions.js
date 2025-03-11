class ShoppingOptions {
    constructor(page) {
        this.page = page;
        this.CHANGE_LIST = "//div[@class='column main']//div[2]//div[1]//a[1]";
        this.CLICK_STYLE = "//div[normalize-space()='Style']";
        this.REARRANGE_LIST="//div[@class='column main']//div[2]//div[1]//a[1]"
        this.STYLE_CHOICE = "//div[@id='narrow-by-list']//div[1]//div[2]//ol[1]//li[2]//a[1]";
        this.CLICK_SIZE = "//div[normalize-space()='Size']";
        this.SIZE_CHOICE = "//a[@aria-label='XL']//div[contains(@class,'swatch-option text')][normalize-space()='XL']";
        this.CLICK_SALE = "//div[normalize-space()='Sale']";
        this.SALE_CHOICE = "//body/div/main/div/div/div[@data-collapsible='true']/div/div[@role='tablist']/div[1]/div[2]/ol[1]/li[7]/a[1]/span[1]";
        this.CLICK_COLOR = "//div[normalize-space()='Color']";
        this.COLOR_CHOICE = "//a[@aria-label='Orange']//div[contains(@class,'swatch-option color')]";
        this.CLICK_ECO = "//div[normalize-space()='Eco Collection']";
        this.ECO_CHOICE = "//div[@id='layered-filter-block']//div[1]//div[2]//ol[1]//li[2]//a[1]";
        this.RECOMMENDS = "//div[normalize-space()='Erin Recommends']";
        this.RECOMMENDS_CHOICE = "//div[@id='layered-filter-block']//div[1]//div[2]//ol[1]//li[1]//a[1]";
        this.CLICK_MATERIAL = "//div[normalize-space()='Material']";
        this.MATERIAL_CHOICE = "//div[@id='narrow-by-list']//li[5]//a[1]";
        this.CLICK_NEW = "//div[normalize-space()='New']";
        this.NEW_CHOICE = "//div[@id='layered-filter-block']//div[1]//div[2]//ol[1]//li[2]//a[1]";
        this.CLICK_PATTERN = "//div[normalize-space()='Pattern']";
        this.PATTERN_CHOICE = "//div[@id='layered-filter-block']//div[1]//div[2]//ol[1]//li[1]//a[1]";
        this.CLICK_PERFORMANCE = "//div[normalize-space()='Performance Fabric']";
        this.PERFORMANCE_CHOICE = "//body/div/main/div/div/div[@data-collapsible='true']/div/div[@role='tablist']/div[1]/div[2]/ol[1]/li[1]/a[1]/span[1]";
    }

    async shoppingThisProduct() {
  

        await this.page.click(this.CLICK_STYLE);

        await this.page.click(this.STYLE_CHOICE);

        await this.page.click(this.CLICK_SIZE);

        await this.page.click(this.SIZE_CHOICE);

        await this.page.click(this.CLICK_SALE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.SALE_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.CLICK_COLOR);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.COLOR_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.CLICK_ECO);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.ECO_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.RECOMMENDS);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.RECOMMENDS_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.CLICK_MATERIAL);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.MATERIAL_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.CLICK_NEW);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.NEW_CHOICE);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.CLICK_PATTERN);
        await this.page.waitForTimeout(2000);

        await this.page.click(this.PATTERN_CHOICE);
        await this.page.waitForTimeout(2000);
    }
}

module.exports = ShoppingOptions;
