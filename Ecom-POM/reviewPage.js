class ReviewPage{
    constructor(page){
        this.page=page
        this.MORE_DETAILS="//a[@id='tab-label-additional-title']"
        this.REVIEW_PAGE="//a[@id='tab-label-reviews-title']"
        this.REVIEW_FORM={
            rating: '#Rating_3_label',
            nick: "//input[@id='nickname_field']",
            summary:"//input[@id='summary_field']",
            review:"//textarea[@id='review_field']"
        }
        this.REVIEW_SUBMIT="//span[normalize-space()='Submit Review']"
        this.WISH_LIST="//div[@class='product-addto-links']//span[contains(text(),'Add to Wish List')]"
    }
    async  reviewDetails(){
        await this.page.click(this.MORE_DETAILS)
        await this.page.click(this.REVIEW_PAGE)
    }
    async fillreviewform(){
        //await this.page.click(this.REVIEW_FORM.rating)
        await this.page.fill(this.REVIEW_FORM.nick,"Devil")
        await this.page.fill(this.REVIEW_FORM.summary,"Comfortable and Warm")
        await this.page.fill(this.REVIEW_FORM.review,"This jacket is super cozy and warm. I love wearing it on cold days, especially when I'm outdoors. The material feels soft and it keeps me warm without being too bulky. The only downside is that the sleeves are a bit too long for me. Other than that, it’s a great purchase!")
        // await this.page.click(this.REVIEW_SUBMIT)
        await this.page.click(this.WISH_LIST)
    }
}
module.exports=ReviewPage
