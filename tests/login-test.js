module.exports = {
  'Login Test' : function (browser) {
    browser
      .url('https://testtest-678bb.firebaseapp.com/')
      .waitForElementVisible('form')
      .setValue('input[name="username"]', 'username')
      .setValue('input[name="password"]', 'password')
      .click('input[type="submit"]', function (result) {
        console.log(result);
      })
      // Wait for new page to load
      .waitForElementVisible('h2#loggedin', 5000)
      .end();
  }
};
