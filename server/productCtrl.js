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
deleteInvoice: function(req, res, next){
  console.log(req.params.id);
  db.delete_invoice(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},
deleteNote: function(req, res, next){
  db.delete_note(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},

//  INVOICE FUNCTIONALITY
// getUserId: function(req, res, next){
//   db.get_user_id(function(err, response){
//     res.send(response);
//   })
// },
getInvoices: function(req, res, next){
  db.get_all_invoices(function(err, response){
    // console.log(response);
    res.send(response);
  })
},
addUser: function(req, res, next){
  db.add_user(req.body, function (err, response){
  res.status(200).send(req.body);
  })
},
addOrder: function(req, res, next){
  db.get_user_id(req.body.email, function(err, userId){
    // console.log(userId);
    db.add_order(userId[0].userid, function(err, orderId){
      for(var i= 0; i < req.body.products.length; i++) {
        var product = [
          orderId[0].orderid,
          req.body.products[i].name,
          req.body.products[i].container,
          req.body.products[i].notes,
          req.body.products[i].price,
          req.body.products[i].quantity
        ]
        db.add_invoice(product, function(err, response){
          // console.log(err, response);
        });
      }
    })
  })
},

//  END INVOICE FUNCTIONALITY

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
