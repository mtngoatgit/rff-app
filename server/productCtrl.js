var app = require('./server');
var db = app.get('db');

module.exports = {

getProducts: function(req, res, next){
  db.get_all_products(function (err, response) {
    res.send(response);
  })
},
addProduct: function(req, res, next){
  var parameters = [
    req.body.name,
    req.body.price,
    req.body.container,
    req.body.notes
  ];
  db.add_product(parameters, function (err, response){
  res.status(200).send(req.body);
  })
},
getMarkets: function(req, res, next){
  db.get_all_markets(function(err, response){
    res.send(response);
  })
},
addMarket: function(req, res, next){
  var items = [
    req.body.name,
    req.body.address,
    req.body.times,
    req.body.notes
  ];
  console.log(items);
  console.log(db);
  db.add_market(items, function (err, response){
  res.status(200).send(req.body);
  })
},
deleteProduct: function(req, res, next){
  console.log(req.params);
  db.delete_product(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},
deleteMarket: function(req, res, next){
  console.log(req.params);
  db.delete_market(req.params.id, function(err, response){
  res.status(200).send(response);
  })
}


}
