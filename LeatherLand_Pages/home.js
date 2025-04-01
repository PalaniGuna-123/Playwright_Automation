
class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToWeb(url = 'http://leatherland.netlify.app/') {
      await this.page.goto(url);
    //   await this.page.setViewportSize({ width: 1280, height: 800 });
      console.log(`Navigated to ${url} and set window size correctly.`);
    }
  }
  
  module.exports = HomePage;