class WomenPage {
    constructor(page) {
        this.page = page;
        this.WOMEN_MENU_ITEM = 'role=menuitem[name=" Women"]', { timeout: 60000 };
        this.JACKETS_LINK = 'role=link[name="Jackets"]', { timeout: 60000 };
    }

    async goToJacketsPage() {
        await this.page.click(this.WOMEN_MENU_ITEM);
        await this.page.click(this.JACKETS_LINK);
    }
}

module.exports = WomenPage;
