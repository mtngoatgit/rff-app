var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/farmbase";

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

var massiveInstance = massive.connectSync({
  connectionString : connectionString,
  scripts: '/Users/aMoveableFeast/devProjects/rileysFarmFresh/rff-app/server/db'});
app.set('db', massiveInstance);
var db = app.get('db');


var controller = require('./productCtrl.js');

app.get('/markets', controller.getMarkets);
app.post('/markets', controller.addMarket);
app.delete('/markets/:id', controller.deleteMarket);

app.get('/products', controller.getProducts);
app.post('/products', controller.addProduct);
app.delete('/products/:id', controller.deleteProduct);




app.listen(3000, function(){
  console.log('listening on port 3000')
})
