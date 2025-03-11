class createAccountPage{
    constructor(page){
        this.page=page
        this.GO_TO_CREATE_ACCOUNT='//*[@id="registration"]/div[2]/a/span'
        this.CREATE_FORM_SELECTOR={
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
        await this.page.fill(this.CREATE_FORM_SELECTOR.password,"Guna@?2004")
        await this.page.fill(this.CREATE_FORM_SELECTOR.confirm_password,"Guna@?2004")
        await this.page.click(this.CREATE_FORM_SELECTOR.create_account)

    }
}
module.exports=createAccountPage