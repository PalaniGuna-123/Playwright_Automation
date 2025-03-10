const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const SearchPage=require('../../Ecom-POM/searchpage')
const ProductListingPage = require("../Ecom-POM/productlistingpage");
const ProductDetailsPage = require("../Ecom-POM/ProductDetailsPage");
const CheckoutPage = require('../../Ecom-POM/CheckoutPage');


Given('the user navigates to the website', async function () {
    const currentUrl = await this.page.url();
    expect(currentUrl).toBe(this.baseURL);
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

When('the user proceeds to checkout', async function () {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.proceedToCheckout();
});


