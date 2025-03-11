class createAccountPage{
    constructor(page){
        this.page=page
        this.GO_TO_CREATE_ACCOUNT="//div[@class='panel header']//a[normalize-space()='Create an Account']"
        this.CREATE_FORM_SELECTOR={
            FirstName: "//input[@id='firstname']",
            LastName: "//input[@id='lastname']",
            emailId: "//input[@id='email_address']",
            password: '//*[@id="password"]',
            confirm_password: '//*[@id="password-confirmation"]',
            create_account: '//*[@id="form-validate"]/div/div[1]/button/span'
        }

    }
    async go_to_create_account(){
        await this.page.waitForSelector(this.GO_TO_CREATE_ACCOUNT)
        await this.page.click(this.GO_TO_CREATE_ACCOUNT)
    }
    async fill_create_account_form(){
        await this.page.fill(this.CREATE_FORM_SELECTOR.FirstName,"Guna")
        await this.page.fill(this.CREATE_FORM_SELECTOR.LastName,"Vision")
        await this.page.fill(this.CREATE_FORM_SELECTOR.emailId,"guna.dev@gmail.com")
        await this.page.fill(this.CREATE_FORM_SELECTOR.password,"Guna@?2004")
        await this.page.fill(this.CREATE_FORM_SELECTOR.confirm_password,"Guna@?2004")
        await this.page.click(this.CREATE_FORM_SELECTOR.create_account)

    }
}
module.exports=createAccountPage