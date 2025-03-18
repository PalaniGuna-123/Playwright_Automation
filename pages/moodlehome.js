class demoHomePage{
    constructor(page){
        this.page=page;
    }
    async openDemoBlaze(){
        this.page.goto("https://moodle.myfssa.in/login/index.php")
    }
}
module.exports=demoHomePage;