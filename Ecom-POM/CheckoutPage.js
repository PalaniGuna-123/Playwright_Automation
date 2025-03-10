class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.PROCEED_TO_CHECKOUT_BUTTON = '#top-cart-btn-checkout';
        this.FLAT_RATE_SHIPPING_METHOD = '#label_method_flatrate_flatrate';
        this.GO_TO_NEXT_STEP_BUTTON = '.button.action.continue.primary';
        this.SHIPPING_FORM_SELECTOR = {
            email: '#customer-email',
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
    }

    async proceedToCheckout() {
        await this.page.click(this.PROCEED_TO_CHECKOUT_BUTTON);
    }

    async fillShippingForm() {
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.email, "adamvarga.one.dev@gmail.com");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.firstName, "Adam");
        await this.page.fill(this.SHIPPING_FORM_SELECTOR.lastName, "Varga");
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
}

module.exports = CheckoutPage;