import {test,expect} from '@playwright/test'
import demoHomePage from '../pages/moodlehome'
import moodleLogin from '../pages/moodleLogin'
import SeleniumPage from '../pages/selenium'

test.describe("automation testing in demoblaze", ()=>{
    test("open demoblaze web application", async function ({page}){
        const openHome= new demoHomePage(page)
        const loginmoodle=new moodleLogin(page)
        const openSelenium= new SeleniumPage(page)
        await openHome.openDemoBlaze()
        await loginmoodle.proceed_login()
        await openSelenium.navigateSelenium()
        await openSelenium.open_selenium_assessment()
        await openSelenium.open_review()
        await openSelenium.open_onepage()
        await openSelenium.move_next()

    })
})