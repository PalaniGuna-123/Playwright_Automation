class ProductDetailsPage{
    constructor(page){
        this.page=page
        this.ADD_TO_CART_BUTTON_SELECTOR = '#product-addtocart-button';
        this.MINICART_WRAPPER_SELECTOR = '.minicart-wrapper';
        this.MINICART_ITEM_SELECTOR = '.minicart-items .product-item';
        
    }
    async AddtoProductCart(){
        await this.page.click(this.ADD_TO_CART_BUTTON_SELECTOR);
        await this.page.waitForTimeout(3000);
    }
    async verifyProductCart(){
        await this.page.click(this.MINICART_WRAPPER_SELECTOR);
        return await this.page.waitForSelector(this.MINICART_ITEM_SELECTOR)
    }
}
module.exports=ProductDetailsPage