import {test, expect} from '@playwright/test';

// Constants
const SEARCH_TERM = 'bag';
const SEARCH_INPUT_SELECTOR = '#search';
const SEARCH_RESULTS_SELECTOR = '.product-item';
const FIRST_PRODUCT_SELECTOR = "//img[@alt='Voyage Yoga Bag']";
const ADD_TO_CART_BUTTON_SELECTOR = '#product-addtocart-button';
const MINICART_WRAPPER_SELECTOR = '.minicart-wrapper';
const MINICART_ITEM_SELECTOR = '.minicart-items .product-itm';

// Function to navigate to the website
async function navigateToWebsite(page) {
    await page.goto('/');
}

// Function to perform a search
// The 'page' parameter is the Playwright page object
async function searchProduct(page, searchTerm) {
    await page.fill(SEARCH_INPUT_SELECTOR, searchTerm);
    await page.press(SEARCH_INPUT_SELECTOR, 'Enter');
    await page.waitForSelector(SEARCH_RESULTS_SELECTOR);
}


// Function to add the first product to the cart
async function addFirstProductToCart(page) {
    const firstProduct = await page.$(FIRST_PRODUCT_SELECTOR);
    await firstProduct.click();
    await page.click(ADD_TO_CART_BUTTON_SELECTOR);
    await page.waitForTimeout(3000);
}

// Function to verify the product is in the cart
async function verifyProductInCart(page) {
    await page.click(MINICART_WRAPPER_SELECTOR);
    const cartItem = await page.waitForSelector(MINICART_ITEM_SELECTOR);
    expect(cartItem).not.toBeNull();
}

test('Search for a product and add to cart', async ({page}) => {
    await navigateToWebsite(page);
    await searchProduct(page, SEARCH_TERM);
    await addFirstProductToCart(page);
    await verifyProductInCart(page);
});