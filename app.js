var express = require('express')
  , load = require('express-load')
  , routes = require('./routes');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(300, function () {
  consol.log("Ntalk no ar");
