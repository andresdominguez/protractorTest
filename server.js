var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/'));
});

app.get('/message', function(req, res) {
  setTimeout(function() {
    res.send('This is the response.');
  }, 1000);
});

app.listen(3000);
console.log('Listening on port 3000...');
