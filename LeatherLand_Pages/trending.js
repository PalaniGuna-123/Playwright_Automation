class Trending {
    constructor(page) {
      this.page = page;
      this.TRENDING = 'text=Trending';
      this.NAVIGATE_SHOES = 'text=View all';
    }
  
    async navigateTrending() {
      await this.page.click(this.TRENDING);
      console.log("Navigated to trending page");
    }
  
    async navigateShoes() {
      await this.page.click(this.NAVIGATE_SHOES);
      console.log("Navigated to shoes page successfully");
    }
  }
  
  module.exports = Trending;