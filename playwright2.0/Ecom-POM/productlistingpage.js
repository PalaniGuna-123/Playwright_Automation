class ProductListingPage {
    constructor(page) {
        this.page = page;
        this.FIRST_PRODUCT_SELECTOR = '.product-item:first-of-type';
    }

    async selectFirstProduct() {
        const firstProduct = await this.page.$(this.FIRST_PRODUCT_SELECTOR);
        if (firstProduct) {
            await firstProduct.click();
        } else {
            throw new Error("First product not found!");
        }
    }
}

module.exports = ProductListingPage;
