class LogInPage {
    constructor(page) {
      this.page = page;
      this.GO_TO_LOGIN_PAGE = '#signIn';
      this.LOG_IN_CREDENTIALS = {
        email: '#username',
        password: '#password'
      };
      this.CLICK_LOG_IN = '#signInButton';
    }
  
    async goToLogInPage() {
      await this.page.click(this.GO_TO_LOGIN_PAGE);
    }
  
    async fillLogInPage() {
      await this.page.fill(this.LOG_IN_CREDENTIALS.email, 'kani@gmail.com');
      await this.page.fill(this.LOG_IN_CREDENTIALS.password, 'Kani@?2003');
      await this.page.click(this.CLICK_LOG_IN);
      console.log("Log in successfully");
    }
  }
  
  module.exports = LogInPage;
  
  