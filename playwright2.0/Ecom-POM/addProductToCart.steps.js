const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const SearchPage = require('../../pageObjects/SearchPage');
const ProductListingPage = require('../../pageObjects/ProductListingPage');
const ProductDetailsPage = require('../../pageObjects/ProductDetailsPage');
const CheckoutPage = require('../../pageObjects/CheckoutPage');

const SHIPPING_FORM_SELECTORS = {
    email: '#customer-email',
    firstName: 'input[name="firstname"]',
    lastName: 'input[name="lastname"]',
    company: 'input[name="company"]',
    street: 'input[name="street[0]"]',
    country: 'select[name="country_id"]',
    region: 'select[name="region_id"]',
    city: 'input[name="city"]',
    postCode: 'input[name="postcode"]',
    telephone: 'input[name="telephone"]',
};

Given('the user navigates to the website', async function () {
    await this.openBrowser();
    await this.navigateTo(this.baseURL);
});

When('the user searches for a product with the term {string}', async function (searchTerm) {
    const searchPage = new SearchPage(this.page);
    await searchPage.searchProduct(searchTerm);
});

When('the user selects the first product from the product listing', async function () {
    const productListingPage = new ProductListingPage(this.page);
    await productListingPage.selectFirstProduct(productListingPage);
});

When('the user adds the first product to the cart', async function () {
    const productDetailsPage = new ProductDetailsPage(this.page);
    await productDetailsPage.addFirstProductToCart(productDetailsPage);
});

Then('the product is successfully added to the cart', async function () {
    const productDetailsPage = new ProductDetailsPage(this.page);
    const cartItem = await productDetailsPage.verifyProductInCart();
    expect(cartItem).not.toBeNull();
});