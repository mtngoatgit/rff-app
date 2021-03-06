var app = require('./server');
var db = app.get('db');

module.exports = {

// checkAuth: function(req, res, next) {
//           console.log(req.user);
//           if (req.user) {
//               res.status(200).json(req.user);
//           }
//           if (!req.user) {
//               res.status(200).json('unauthorized');
//           }
//       },

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
getWholesaleSummary: function(req, res, next){
  db.get_wholesale_summary(function (err, response) {
    res.send(response);
  })
},
addWholesaleSummary: function(req, res, next){
  console.log("In the server");
  console.log("BackEnd CTRL wholesale ADD", req.body);
  db.add_wholesale_summary(req.body.note, function (err, response){
  res.status(200).send(req.body);
  })
},
changeWholesaleSummary: function(req, res, next) {
  console.log(req.params.id);
  db.change_wholesale_summary(req.params.id, function(err, response){
  res.status(200).send(response);
  })
},
deleteWholesaleSummary: function(req, res, next){
  console.log(req.params.id);
  db.delete_wholesale_summary(req.params.id, function(err, response){
  res.status(200).send(response);
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
getInvoices: function(req, res, next){
  db.get_all_invoices(function(err, response){
    // console.log(response);
    res.send(response);
  })
},
addOrder: function(req, res, next){
    var userInfo = [
      req.body.user.name,
      req.body.user.email,
      req.body.user.phone
    ]
    db.add_user(userInfo, function(err, response){
      db.get_user_id(req.body.user.email, function(err, userId){
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
    res.status(200).send(req.body)
  })
},

// addOrder: function(req, res, next){
//   db.get_user_id(req.body.user.email, function(err, userId){
//     // console.log("req.body in prodCtrl", req.body);
//     db.add_order(userId[0].userid, function(err, orderId){
//       for(var i= 0; i < req.body.products.length; i++) {
//         var product = [
//           orderId[0].orderid,
//           req.body.products[i].name,
//           req.body.products[i].container,
//           req.body.products[i].notes,
//           req.body.products[i].price,
//           req.body.products[i].quantity
//         ]
//         db.add_invoice(product, function(err, response){
//           // console.log(err, response);
//         });
//       }
//     })
//   })
// },

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
