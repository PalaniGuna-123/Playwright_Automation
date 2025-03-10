class SearchPage {
    constructor(page) {
        this.page = page;
        this.SEARCH_INPUT_SELECTOR = '#search';
        this.SEARCH_RESULTS_SELECTOR = '.product-item';
    }

    async searchProduct(SEARCH_TERM) {
        await this.page.fill(this.SEARCH_INPUT_SELECTOR, SEARCH_TERM);
        await this.page.press(this.SEARCH_INPUT_SELECTOR, 'Enter');
        await this.page.waitForSelector(this.SEARCH_RESULTS_SELECTOR);
    }
}

module.exports = SearchPage;
