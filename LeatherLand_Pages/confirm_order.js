
class ConfirmOrder {
    constructor(page) {
      this.page = page;
      this.CONFIRM_ORDER = '#proceed-to-payment';
    }
  
    async proceedToPayment() {
      await this.page.click(this.CONFIRM_ORDER);
      console.log("Proceed to payment successfully");
    }
  }
  
  module.exports = ConfirmOrder;