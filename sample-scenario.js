var webdriver = require('selenium-webdriver');
var protractor = require('./protractor.js');
var assert = require('assert');
var util = require('util');
var homeView = require('./scenarios/home-scenario.js');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities({
      'browserName': 'chrome',
      'version': '',
      'platform': 'ANY',
      'javascriptEnabled': true
    }).build();

var ptor = protractor.wrapDriver(driver);

driver.manage().timeouts().setScriptTimeout(10000);

ptor.get('http://localhost:3000/testApp/');

var message = ptor.findElement(protractor.By.binding('{{serverMessage}}'));
message.getText().then(function(text) {
  assert.equal('This is the response.', text);
});

var view = homeView.newView(ptor);
view.setName('aaaa');
view.setEmail('my@email.com');
view.save();
driver.quit();
