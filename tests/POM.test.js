import { test, expect } from "@playwright/test";
import HomePage from "../Ecom-POM/homepage";
import SearchPage from "../Ecom-POM/searchpage";
import ProductListingPage from "../Ecom-POM/productlistingpage";
import ProductDetailsPage from "../Ecom-POM/ProductDetailsPage";
import CheckoutPage from "../Ecom-POM/CheckoutPage";
import createAccountPage from "../Ecom-POM/createAccount";
import LogInPage from "../Ecom-POM/logInPage";
import productHover from "../Ecom-POM/productHover";
import jacketsShoppingOptions from "../Ecom-POM/jacketsShoppingOptions"
import ShoppingOptions from "../Ecom-POM/jacketsShoppingOptions";
import navigateWomenProducts from "../Ecom-POM/navigateWomenProducts"
import WomenPage from "../Ecom-POM/navigateWomenProducts";
import JacketPage from "../Ecom-POM/JacketPageDropdown";
import CartPage from "../Ecom-POM/addCart";
import ScrollControl from "../Ecom-POM/scrollControl";
import ReviewPage from "../Ecom-POM/reviewPage";


const SEARCH_TERM = "bag";

test.only("search for a product and add to cart", async function ({ page }) {
    const homePage = new HomePage(page);
    await page.pause();
    const searchPage = new SearchPage(page);
    const productlistingpage = new ProductListingPage(page);
    const productdetailspage = new ProductDetailsPage(page);
    const checkoutPage = new CheckoutPage(page);
    const logInpage= new LogInPage(page)

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
    // await checkoutPage.isCheckoutSuccess()
    await logInpage.click_sign_in()
    await logInpage.fill_login_form()
    await logInpage.field_sign_in()

    //navigate women page
 
    const navigateWomen=new WomenPage(page)
    await navigateWomen.goToJacketsPage()

    const jacketPage = new JacketPage(page);
    await jacketPage.selectOptionFromDropdown()

    const cartpage=new CartPage(page)
    await cartpage.addAllItemsToCart()
    const scroll =new ScrollControl(page)
    const review=new ReviewPage(page)
    await scroll.scrollBy1000px()
    await review.reviewDetails()
    await review.fillreviewform()
    
});
test("create an account", async  function({page}) {
    const homePage = new HomePage(page);
    const createAccountpage=new createAccountPage(page)
    await homePage.navigatetoWeb();
    await createAccountpage.go_to_create_account()
    await createAccountpage.fill_create_account_form()

})
test("log in this page",async function({ page }){
    const homePage = new HomePage(page);
    const logInpage= new LogInPage(page)
    await homePage.navigatetoWeb();
    await logInpage.click_sign_in()
    await logInpage.fill_login_form()
    await logInpage.field_sign_in()
})
test("hovering this products",async function ({page}){
    const homePage = new HomePage(page);
    await homePage.navigatetoWeb();

    const hoveringPage=new productHover(page)
    await hoveringPage.hovering_products()
        
    //change options
    const changeShopingOptions=new ShoppingOptions(page)
    await changeShopingOptions.shoppingThisProduct()

})

test("add to cart women products", async function ({page}){
    const homePage = new HomePage(page);
    const scroll =new ScrollControl(page)
    const review=new ReviewPage(page)
    await homePage.navigatetoWeb();
    const navigateWomen=new WomenPage(page)
    await navigateWomen.goToJacketsPage()
    const jacketPage = new JacketPage(page);
    await jacketPage.selectOptionFromDropdown()
    const cartpage=new CartPage(page)
    await cartpage.addAllItemsToCart()
    await scroll.scrollBy1000px()
    await review.reviewDetails()
    await review.fillreviewform()
  
})
