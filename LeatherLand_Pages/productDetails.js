class ProductDetails {
    constructor(page) {
      this.page = page;
      this.CHANGE_IMAGE = 'img.thumbnail.active';
      this.CHANGE_SIZE = 'button.size-btn';
      this.CLICK_BUY_NOW = 'button.btn.buy-now';
    }
  
    async changeImgOne() {
      const imgElement = await this.page.$(this.CHANGE_IMAGE);
      if (imgElement) {
        await imgElement.click();
        console.log("Image 1 changed successfully");
      } else {
        console.log("Image element not found");
      }
    }
  
    async changeSize() {
      await this.page.click(this.CHANGE_SIZE);
      console.log("Change size correctly");
      await this.page.click(this.CLICK_BUY_NOW);
      console.log("Buy now button clicked successfully");
    }
  }
  
  module.exports = ProductDetails;
  