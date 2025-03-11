import { test, expect } from "@playwright/test";
import HomePage from "../Ecom-POM/homepage";
import SearchPage from "../Ecom-POM/searchpage";
import ProductListingPage from "../Ecom-POM/productlistingpage";
import ProductDetailsPage from "../Ecom-POM/ProductDetailsPage";
import CheckoutPage from "../Ecom-POM/CheckoutPage";

const SEARCH_TERM = "bag";

test("search for a product and add to cart", async function ({ page }) {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const productlistingpage = new ProductListingPage(page);
    const productdetailspage = new ProductDetailsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await homePage.navigatetoWeb();
    await searchPage.searchProduct(SEARCH_TERM);
    await productlistingpage.selectFirstProduct();
    await productdetailspage.AddtoProductCart();
    await checkoutPage.proceedToCheckout();
    await checkoutPage.proceed()
    await checkoutPage.fillShippingForm()
    await checkoutPage.selectFlatRateShippingMethod()
    await checkoutPage.proceedToPaymentStep()
    await checkoutPage.placeOrder()
    await checkoutPage.isCheckoutSuccess()

    // const cartItem = await productdetailspage.verifyProductCart();
    // expect(cartItem).not.toBeNull();
});