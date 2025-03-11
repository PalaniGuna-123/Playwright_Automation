class LogInPage{
    constructor(page){
        this.page=page
        this.CLICK_SIGN_IN="//div[@class='panel header']//a[contains(text(),'Sign In')]"
        this.FIELD_SIGN_IN="//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]"
        this.FILL_lOGIN_FORM={
            LogInEmail: "//input[@id='email']",
            Password: "//fieldset[@class='fieldset login']//input[@id='pass']"
        }
    }
    async click_sign_in(){
        await this.page.click(this.CLICK_SIGN_IN)
    }
    async fill_login_form(){
        await this.page.fill(this.FILL_lOGIN_FORM.LogInEmail,"guna.dev@gmail.com")
        await this.page.fill(this.FILL_lOGIN_FORM.Password,"Guna@?2004")
    }
    async field_sign_in(){
        await this.page.click(this.FIELD_SIGN_IN)
    }
}
module.exports=LogInPage