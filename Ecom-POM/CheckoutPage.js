class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.PROCEED_TO_CHECKOUT_BUTTON = "//span[@class='counter-number']";
        this.PROCEED="//button[@id='top-cart-btn-checkout']"
        this.FLAT_RATE_SHIPPING_METHOD = '#label_method_flatrate_flatrate';
        this.GO_TO_NEXT_STEP_BUTTON = '.button.action.continue.primary';
        this.SHIPPING_FORM_SELECTOR = {
            email: "//div[@class='control _with-tooltip']//input[@id='customer-email']",
            firstName: 'input[name="firstname"]',
            lastName: 'input[name="lastname"]',
            company: 'input[name="company"]',
            street: 'input[name="street[0]"]',
            country: 'select[name="country_id"]',
            region: 'select[name="region_id"]',
            city: 'input[name="city"]',
            postCode: 'input[name="postcode"]',
            telephone: 'input[name="telephone"]'
        };
        this.PLACE_ORDER_BUTTON = "//span[normalize-space()='Place Order']";
        this.CHECKOUT_SUCCESS_BLOCK = '.checkout-success';
    }
    async proceed(){
        await this.page.click(this.PROCEED)
    }
    async proceedToCheckout() {
        await this.page.click(this.PROCEED_TO_CHECKOUT_BUTTON);
    }

    async fillShippingForm() {
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.email, "guna.dev@gmail.com");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.firstName, "Guna");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.lastName, "Vision");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.company, "Any Company");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.street, "1234 Elm St");
        await this.page.locator(this.SHIPPING_FORM_SELECTOR.country).selectOption({index: 1});
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.city, "Springfield");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.postCode, "12345");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.telephone, "123-456-789");
    }

    async selectFlatRateShippingMethod() {
        await this.page.click(this.FLAT_RATE_SHIPPING_METHOD);
    }

    async proceedToPaymentStep() {
        await this.page.click(this.GO_TO_NEXT_STEP_BUTTON);
    }
    async placeOrder() {
                await this.page.click(this.PLACE_ORDER_BUTTON);
    }
        
    async isCheckoutSuccess() {
                return await this.page.waitForSelector(this.CHECKOUT_SUCCESS_BLOCK);
    }

}

module.exports = CheckoutPage;