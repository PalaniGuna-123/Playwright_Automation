const { chromium, test, expect } = require('@playwright/test');
const homePage = require('../LeatherLand_Pages/home');
const LogInPage = require('../LeatherLand_Pages/logIn');
const Trending = require('../LeatherLand_Pages/trending');
const FilterPage = require('../LeatherLand_Pages/filter');
const ProductDetails = require('../LeatherLand_Pages/productDetails');
const OrderCheckOutPage = require('../LeatherLand_Pages/check_Out_Page');
const ScrollControl = require('../LeatherLand_Pages/scrollControll');
const cashOnDelivery = require('../LeatherLand_Pages/cash_On_Delivery');
const ConfirmOrder = require('../LeatherLand_Pages/confirm_order');
const GoHome = require('../LeatherLand_Pages/go_home');
const CardDetails = require('../LeatherLand_Pages/card_details');

test('Complete purchase flow', async ({ page }) => {
  const Land_Home_Page = new homePage(page);
  const Login_Page = new LogInPage(page);
  const Trending_Page = new Trending(page);
  const filterPage = new FilterPage(page);
  const stock = new ProductDetails(page);
  const order = new OrderCheckOutPage(page);
  const scroll = new ScrollControl(page);
  const cash_method = new cashOnDelivery(page);
  const order_confirm = new ConfirmOrder(page);
  const Go_to_My_Home = new GoHome(page);
  const card_details = new CardDetails(page);

  await Land_Home_Page.navigateToWeb();
  // page.pause()
  await Login_Page.goToLogInPage();
  await Login_Page.fillLogInPage();

  await Trending_Page.navigateTrending();
  await Trending_Page.navigateShoes();

  await filterPage.filterProduct();
  await filterPage.clickProduct();

  await stock.changeImgOne();
  await stock.changeSize();

  await order.addQuantity();
  await scroll.scrollBy1000px();
  await order.editAddress();
  await order.fillAddressForm();
  await order.clickSaveAddress();

  await card_details.clickCard();
  await card_details.fillCardDetails();
  await scroll.scrollBy1000px();
  await card_details.proceedToPay();
  // await Go_to_My_Home.goHome();

  // await expect(page).toHaveURL('http://leatherland.netlify.app/');
  console.log('Test completed successfully');
  page.close()
});
