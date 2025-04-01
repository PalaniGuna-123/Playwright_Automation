class OrderCheckOutPage {
    constructor(page) {
      this.page = page;
      this.EDIT_ADDRESS = '#edit-address';
      this.QUANTITY = 'button:has-text("+")';
      this.SHIPPING_FORM = {
        'Door No': '#doorno',
        'Street': '#street',
        'City': '#city',
        'Pincode': '#pincode',
        'State': '#state'
      };
      this.CLICK_ADDRESS = '#save-btn';
    }
  
    async editAddress() {
      await this.page.click(this.EDIT_ADDRESS);
      console.log("Edit Address button clicked successfully");
    }
  
    async addQuantity() {
      await this.page.click(this.QUANTITY);
      console.log("Add quantity successfully");
    }
  
    async fillAddressForm() {
      try {
        await this.page.fill(this.SHIPPING_FORM['Door No'], '132/6');
        await this.page.fill(this.SHIPPING_FORM['Street'], 'Road Street');
        await this.page.fill(this.SHIPPING_FORM['City'], 'Chennai');
        await this.page.fill(this.SHIPPING_FORM['Pincode'], '600001');
        await this.page.fill(this.SHIPPING_FORM['State'], 'Tamil Nadu');
  
        console.log("Shipping Form Filled Successfully");
      } catch (e) {
        console.log(`Error filling shipping form: ${e}`);
      }
    }
  
    async clickSaveAddress() {
      try {
        await this.page.click(this.CLICK_ADDRESS);
        console.log("Save Address button clicked");
  
        const alert = await this.page.waitForEvent('dialog');
        console.log(`Alert Message: ${alert.message()}`);
        await alert.accept();
        console.log("Popup Alert Accepted Successfully");
      } catch (e) {
        console.log(`Error clicking Save Address: ${e}`);
      }
    }
  }
  
  module.exports = OrderCheckOutPage;
  
  