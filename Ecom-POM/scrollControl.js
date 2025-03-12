class ScrollControl {
    constructor(page) {
        this.page = page;  // Ensure this.page is being passed from the test
    }

    async scrollBy1000px() {
        // Check if the page object is valid
        if (this.page) {
            await this.page.evaluate(() => {
                window.scrollBy(0, 1000);
            });
            console.log('Scrolled down 1000px');
        } else {
            console.error("Page is undefined. Cannot scroll.");
        }
    }
}

module.exports = ScrollControl;
