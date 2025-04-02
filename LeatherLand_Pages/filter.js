const { expect } = require('@playwright/test');

class FilterPage {
  constructor(page) {
    this.page = page;
    this.FILTER_OPTION = this.page.locator('i.bx.bx-filter-alt.filter-icon');
    this.FILTER = this.page.locator('.ascending-order');
    this.CLICK_PRODUCT = this.page.locator("//img[@alt='fXtRkbYakgG5EFzgcgXY']");
  }

  async filterProduct() {
    await expect(this.FILTER_OPTION).toBeVisible();
    await this.FILTER_OPTION.click();
    console.log("Choose Filter option");

    await expect(this.FILTER).toBeVisible();
    await this.FILTER.click();
    console.log("Filter option clicked successfully");
  }

  async clickProduct() {
    await expect(this.CLICK_PRODUCT).toBeVisible();
    await this.CLICK_PRODUCT.click();
    console.log("Product clicked successfully");
  }
}

module.exports = FilterPage;
