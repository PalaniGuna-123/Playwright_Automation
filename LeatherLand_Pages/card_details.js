class CardDetails {
    constructor(page) {
      this.page = page;
      this.CLICK_CARD = 'label[for="card"]';
      this.CARD_FORM = {
        'name': '#cardholder-name',
        'number': '#card-number',
        'expiryDate': '#expiry-date',
        'cvv': '#cvv'
      };
      this.PAY_NOW = '#proceed-to-payment';
      this.TRACK_ORDER = '.button.track-order';
    }
  
    async clickCard() {
      await this.page.click(this.CLICK_CARD);
    }
  
    async fillCardDetails() {
      await this.page.fill(this.CARD_FORM.name, 'Guna Palani');
      await this.page.fill(this.CARD_FORM.number, '1234 5678 9101 1213');
      await this.page.fill(this.CARD_FORM.expiryDate, '08/29');
      await this.page.fill(this.CARD_FORM.cvv, '754');
    }
  
    async proceedToPay() {
      await this.page.click(this.PAY_NOW);
      await this.page.click(this.TRACK_ORDER);
    }
  }
  
  module.exports = CardDetails;
  