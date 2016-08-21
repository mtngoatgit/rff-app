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
  db.add_market(items, function (err, response){
  res.status(200).send(req.body);
  })
},
deleteProduct: function(req, res, next){
  db.delete_product(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},
deleteMarket: function(req, res, next){
  db.delete_market(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},
addOrder: function(req, res, next){
  // var ord = [
  //   req.body.name,
  //   req.body.price,
  //   req.body.container,
  //   req.body.notes,
  //   req.body.quantity,
  //   req.body.user,
  //   req.body.phone
  // ];
  // console.log(req.body);
  db.add_order(req.body, function (err, response){
  res.status(200).send(req.body);
  })
},
getNotes: function(req, res, next){
  db.get_all_notes(function (err, response) {
    res.send(response);
  })
},
addNote: function(req, res, next){
  db.add_note(req.body.note, function (err, response){
  res.status(200).send(req.body);
  })
}

}
