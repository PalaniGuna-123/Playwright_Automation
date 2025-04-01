class GoHome {
    constructor(page) {
      this.page = page;
      this.GO_HOME = 'button.button.go-home';
    }
  
    async goHome() {
      await this.page.click(this.GO_HOME);
      console.log("Go to home");
    }
  }
  
  module.exports = GoHome;
  