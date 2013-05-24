var express = require('express'),
    app = express();

app.configure(function() {
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/'));
});

app.get('/yo', function(req, res) {
  res.send('This is the response');
});

app.listen(3000);
console.log('Listening on port 3000...');
