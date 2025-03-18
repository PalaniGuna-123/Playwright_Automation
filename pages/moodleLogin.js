class moodleLogin{
    constructor(page){
        this.page=page
        this.LOGIN={
            username: "//input[@id='username']",
            password: "//input[@id='password']"
        }
        this.CLICK_LOGIN="//button[@id='loginbtn']"
    }
    async proceed_login(){
        await this.page.fill(this.LOGIN.username,"gupalani")
        await this.page.fill(this.LOGIN.password,"Doller@?2004")
        await this.page.click(this.CLICK_LOGIN)
    }
}
module.exports=moodleLogin