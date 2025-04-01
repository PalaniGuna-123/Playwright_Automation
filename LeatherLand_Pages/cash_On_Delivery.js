class CashOnDelivery {
    constructor(page) {
      this.page = page;
      this.CASH_ON_DELIVERY = 'span:has-text("Cash on delivery")';
    }
  
    async clickCashOnDelivery() {
      await this.page.click(this.CASH_ON_DELIVERY);
      console.log("Clicked Cash On delivery option successfully");
    }
  }
  
  module.exports = CashOnDelivery;
  