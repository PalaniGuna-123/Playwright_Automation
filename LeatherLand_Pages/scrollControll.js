class ScrollControl {
    constructor(page) {
      this.page = page;
    }
  
    async scrollBy1000px() {
      if (this.page) {
        await this.page.waitForTimeout(2000);  // Wait for 2 seconds
        await this.page.evaluate(() => {
          window.scrollBy(0, 1000);
        });
        console.log('Scrolled down 1000px');
      } else {
        console.log("Page is undefined. Cannot scroll.");
      }
    }
  }
  
  module.exports = ScrollControl;
  