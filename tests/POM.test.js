import {test,expect} from "@playwright/test"
import HomePage from "../Ecom-POM/homepage"
import SearchPage from "../Ecom-POM/searchpage"
import ProductListingPage from "../Ecom-POM/productlistingpage"
import ProductDetailsPage from "../Ecom-POM/ProductDetailsPage"

const SEARCH_TERM="bag"

test ("search for a product and add to cart", async function ({page}){
    const homePage=new HomePage(page)
    const searchPage=new SearchPage(page)
    const productlistingpage = new ProductListingPage(page)
    const productdetailspage = new ProductDetailsPage(page)

    await homePage.navigatetoWeb()
    await searchPage.searchProduct(SEARCH_TERM)
    await productlistingpage.selectFirstProduct()
    await productdetailspage.AddtoProductCart()

    const cartItem= await productdetailspage.verifyProductCart()
    expect(cartItem).not.toBeNull()

})

