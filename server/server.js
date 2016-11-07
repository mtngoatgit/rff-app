var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var strategy = require('./setup-passport');
var cookieParser = require('cookie-parser');
var jwt = require('express-jwt');

var session = require('express-session');
var massive = require('massive');
var config = require('./config')
var connectionString = config.connectionString;


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));
app.use(cookieParser());
app.use(session({ secret: config.sessionSecret, resave: false,  saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


var massiveInstance = massive.connectSync({
  connectionString : connectionString,
  scripts: '/Users/aMoveableFeast/devProjects/rileysFarmFresh/rff-app/server/db'});
app.set('db', massiveInstance);
var db = app.get('db');

app.get('/callback',
  //  FINISH CODING THIS LINE DIRECTLY BELOW
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });

  var requiresLogin = require('./requiresLogin');

    app.get('/user',
      requiresLogin,
      function (req, res) {
        res.render('user', {
          user: req.user
        });
      });


var jwtCheck = jwt({
  secret: new Buffer(config.jxtSecret, 'base64'),
  audience: config.jxtAudience
});
//  FINISH CODING THIS BELOW
app.use('/admin', jwtCheck);
var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/#/admin',
  // headers: { authorization: 'Bearer YOUR_ID_TOKEN_HERE' } };
  headers: { authorization: 'Bearer config.clientID' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // console.log(body);
});

app.get('/auth/me', function(req, res, next){
  res.status(200).send(req.user)
})


var controller = require('./productCtrl.js');

// app.get('/checkAuth', controller.checkAuth);
app.get('/markets', controller.getMarkets);
app.post('/markets', controller.addMarket);
app.delete('/markets/:id', controller.deleteMarket);

app.get('/products', controller.getProducts);
app.post('/products', controller.addProduct);
app.delete('/products/:id', controller.deleteProduct);

app.get('/wholesale', controller.getWholesaleSummary);
app.post('/wholesale', controller.addWholesaleSummary);
app.delete('/wholesale/:id', controller.deleteWholesaleSummary);

// app.get('/users', controller.getUser);
// app.post('/users', controller.addUser);
app.get('/invoices', controller.getInvoices);
app.post('/orders', controller.addOrder);
app.delete('/invoices/:id', controller.deleteInvoice);

app.get('/notes', controller.getNotes);
app.post('/notes', controller.addNote);
app.delete('/notes/:id', controller.deleteNote);


app.listen(config.port, function(){
  console.log('listening on port 3000')
})
