class HomePage{
    constructor(page){
       this.page = page;
    }
    async navigatetoWeb(){
       await this.page.goto('/')
    }
   }
   module.exports=HomePage