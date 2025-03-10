class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.PROCEED_TO_CHECKOUT_BUTTON = 'button.proceed-to-checkout';
    }

    async proceedToCheckout() {
        await this.page.click(this.PROCEED_TO_CHECKOUT_BUTTON);
    }
}

module.exports = CheckoutPage;