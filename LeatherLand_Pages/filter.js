class FilterPage {
    constructor(page) {
      this.page = page;
      this.FILTER_OPTION = 'i.bx.bx-filter-alt.filter-icon';
      this.FILTER = '.ascending-order';
      this.CLICK_PRODUCT = 'a:has-text("School Shoes Girls 5yr Black")';
    }
  
    async filterProduct() {
      await this.page.click(this.FILTER_OPTION);
      console.log("Choose Filter option");
  
      await this.page.click(this.FILTER);
      console.log("Filter option clicked successfully");
    }
  
    async clickProduct() {
      const product = await this.page.$(this.CLICK_PRODUCT);
      if (product) {
        await product.click();
        console.log("Product clicked successfully");
      } else {
        console.log("Product not found");
      }
    }
  }
  
  module.exports = FilterPage;
  