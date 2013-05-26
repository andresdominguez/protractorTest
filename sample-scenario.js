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

var expectValue = function(binding, value) {
  var message = ptor.findElement(protractor.By.binding(binding));
  message.getText().then(function(text) {
    assert.equal(value, text);
  });
};

expectValue('{{serverMessage}}', 'This is the response.');

var view = homeView.newView(ptor);
view.setName('aaaa');
view.setEmail('my@email.com');
view.save();

var waitUntilVisible = function(selector) {
  return driver.wait(function() {
    return ptor.findElement(selector).then(function(element) {
      return element.isDisplayed();
    })
  }, 10000);
};

waitUntilVisible(protractor.By.binding('{{andres}}')).then(function() {
  driver.findElement(protractor.By.id('nowVisible')).getText(function(value) {
    assert.equal(value, 'foo')
  });

  ptor.findElement(protractor.By.binding('{{andres}}')).getText().then(function(value) {
    assert.equal(value, 'hey')
  });
});

driver.quit();
