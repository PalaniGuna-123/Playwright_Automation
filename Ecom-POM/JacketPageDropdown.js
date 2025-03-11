class JacketPage {
    constructor(page) {
        this.page = page;
        this.DROPDOWN = "//div[@class='page-wrapper']//div[2]//div[3]//select[1]"; 
    }

    async selectOptionFromDropdown() {
        const dropdownLocator = this.page.locator(this.DROPDOWN); 

        await dropdownLocator.selectOption({ index: 2 }); 
    }
}

module.exports = JacketPage;
