class SeleniumPage{
    constructor(page){
        this.page=page;
        this.SELENIUM_LINK="//span[@aria-hidden='true'][normalize-space()='Selenium']"
        this.OPEN_ASSESSMENT="//li[@id='module-1799']//a[contains(@class,'aalink stretched-link')]"
        this.OPEN_REVIEW="//a[@title='Review your responses to this attempt']"
        this.OPEN_ONEPAGE="//a[normalize-space()='Show one page at a time']"
        this.NEXT_PAGE="//span[normalize-space()='Next page']"
        this.PREVIOUS_PAGE="//span[normalize-space()='Previous page']"
        this.FLAG="//a[@title='Flag this question for future reference']"
        this.UNFLAG="//a[normalize-space()='Remove flag']"
        this.FINISH="//a[@class='mod_quiz-next-nav']"
        this.BACK_TO_COURSE="//button[@id='single_button67d93837724754']"
    }
    async navigateSelenium(){
        await this.page.click(this.SELENIUM_LINK)
    }
    async open_selenium_assessment(){
       await this.page.click(this.OPEN_ASSESSMENT)
    }
    async open_review(){
        await this.page.click(this.OPEN_REVIEW)
    }
    async open_onepage(){
        await this.page.click(this.OPEN_ONEPAGE)
    }
    async move_next(){
        for(let i=1;i<=14;i++){
            await this.page.click(this.NEXT_PAGE)
            await this.page.waitForTimeout(1000)
        }
        for(let i=1;i<=1;i++){
            await this.page.click(this.PREVIOUS_PAGE)
        }
        await this.page.click(this.FLAG)
        await this.page.waitForTimeout(2000)
        await this.page.click(this.UNFLAG)
        await this.page.click(this.FINISH)
        await this.page.click(this.BACK_TO_COURSE)
    }
}
module.exports=SeleniumPage;