var protractor = require('../protractor.js');

exports.newView = function(ptor) {
  function setValue(selector, value) {
    return ptor.findElement(selector).sendKeys(value);
  }

  return {
    setName: function(name) {
      return setValue(protractor.By.id('name'), name);
    },
    setEmail: function(email) {
      var selector = '[data-ng-model="data.email"]';
      return setValue(protractor.By.css(selector), email);
    },
    save: function() {
      ptor.findElement(protractor.By.css('.btn')).click();
    }
  };
};
