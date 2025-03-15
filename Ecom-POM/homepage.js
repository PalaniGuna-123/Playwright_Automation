class HomePage{
    constructor(page){
       this.page = page;
    }
    async navigatetoWeb(){
       await this.page.goto('/')
       await this.page.setViewportSize({ width: 1700, height: 1080 });

    }
   }
   module.exports=HomePage